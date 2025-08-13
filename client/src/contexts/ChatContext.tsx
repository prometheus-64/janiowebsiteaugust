import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Types for chat functionality
interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  isTyping?: boolean;
}

interface ChatSession {
  sessionId: string;
  messages: Message[];
  userProfile: {
    email?: string;
    name?: string;
    company?: string;
    intent?: 'sales' | 'support' | 'general';
  };
  isActive: boolean;
}

interface ChatContextType {
  session: ChatSession | null;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  addMessage: (message: Omit<Message, 'id' | 'timestamp'>) => void;
  updateSession: (updates: Partial<ChatSession>) => void;
  clearSession: () => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

// Configuration
const CHAT_CONFIG = {
  sessionStorageKey: 'janio_chat_session',
  welcomeMessage: "Hi! I'm here to help you with your logistics needs. Are you looking for cost savings, better delivery performance, or do you have a support question?",
};

const generateSessionId = () => {
  return `chat_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

const generateMessageId = () => {
  return `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [session, setSession] = useState<ChatSession | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Initialize or restore chat session
  useEffect(() => {
    const initializeSession = () => {
      const stored = localStorage.getItem(CHAT_CONFIG.sessionStorageKey);
      
      if (stored) {
        try {
          const parsedSession = JSON.parse(stored);
          // Restore session but mark as active again
          setSession({
            ...parsedSession,
            isActive: true,
            messages: parsedSession.messages.map((msg: any) => ({
              ...msg,
              timestamp: new Date(msg.timestamp)
            }))
          });
        } catch (error) {
          console.error('Error parsing stored chat session:', error);
          createNewSession();
        }
      } else {
        createNewSession();
      }
    };

    const createNewSession = () => {
      const newSession: ChatSession = {
        sessionId: generateSessionId(),
        messages: [
          {
            id: generateMessageId(),
            text: CHAT_CONFIG.welcomeMessage,
            sender: 'bot',
            timestamp: new Date()
          }
        ],
        userProfile: {},
        isActive: true
      };
      setSession(newSession);
    };

    initializeSession();
  }, []);

  // Save session to localStorage whenever it changes
  useEffect(() => {
    if (session) {
      localStorage.setItem(CHAT_CONFIG.sessionStorageKey, JSON.stringify(session));
    }
  }, [session]);

  const addMessage = (message: Omit<Message, 'id' | 'timestamp'>) => {
    const newMessage: Message = {
      ...message,
      id: generateMessageId(),
      timestamp: new Date()
    };

    setSession(prev => prev ? {
      ...prev,
      messages: [...prev.messages, newMessage]
    } : null);
  };

  const updateSession = (updates: Partial<ChatSession>) => {
    setSession(prev => prev ? { ...prev, ...updates } : null);
  };

  const clearSession = () => {
    localStorage.removeItem(CHAT_CONFIG.sessionStorageKey);
    setSession(null);
    setIsOpen(false);
    
    // Reinitialize after clearing
    setTimeout(() => {
      const newSession: ChatSession = {
        sessionId: generateSessionId(),
        messages: [
          {
            id: generateMessageId(),
            text: CHAT_CONFIG.welcomeMessage,
            sender: 'bot',
            timestamp: new Date()
          }
        ],
        userProfile: {},
        isActive: true
      };
      setSession(newSession);
    }, 100);
  };

  const value: ChatContextType = {
    session,
    isOpen,
    setIsOpen,
    addMessage,
    updateSession,
    clearSession,
    isLoading,
    setIsLoading
  };

  return (
    <ChatContext.Provider value={value}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};