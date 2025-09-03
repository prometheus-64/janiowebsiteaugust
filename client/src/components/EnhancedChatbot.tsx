import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useChat } from '@/contexts/ChatContext';

// Configuration - you'll update these with your n8n details  
const CHAT_CONFIG = {
  n8nWebhookUrl: import.meta.env.VITE_N8N_WEBHOOK_URL || 'https://janio.app.n8n.cloud/webhook/ff3ceeec-a595-4cc1-8707-edda2bb9dfc1',
};

const EnhancedChatbot = () => {
  const [message, setMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { session, isOpen, setIsOpen, addMessage, updateSession, clearSession, isLoading, setIsLoading } = useChat();

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    scrollToBottom();
  }, [session?.messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const sendToN8N = async (userMessage: string, sessionData: any) => {
    try {
      console.log('Sending raw text to n8n:', userMessage);

      const response = await fetch(CHAT_CONFIG.n8nWebhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: userMessage
      });

      console.log('n8n Response status:', response.status);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('n8n Error response:', errorText);
        throw new Error(`HTTP error! status: ${response.status}, body: ${errorText}`);
      }

      const result = await response.text();
      console.log('n8n Response:', result);
      
      // Return the response as botMessage
      return {
        botMessage: result || "Thank you for your message. Our team will get back to you soon!",
        intent: 'general'
      };
    } catch (error) {
      console.error('Error sending message to n8n:', error);
      return {
        botMessage: "I'm having trouble connecting right now. Please try again in a moment or email us at support@janio.com",
        intent: 'error'
      };
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || !session) return;

    const userMessage = message.trim();
    setMessage('');
    setIsLoading(true);

    // Add user message to chat
    addMessage({
      text: userMessage,
      sender: 'user'
    });

    // Send to n8n and get response
    try {
      const n8nResponse = await sendToN8N(userMessage, session);
      
      // Add bot response
      addMessage({
        text: n8nResponse.botMessage || "Thank you for your message. Our team will get back to you soon!",
        sender: 'bot'
      });

      // Update session with any extracted user info
      if ('userProfile' in n8nResponse && n8nResponse.userProfile) {
        updateSession({
          userProfile: {
            ...session.userProfile,
            ...n8nResponse.userProfile
          }
        });
      }

      // Handle routing based on intent
      if (n8nResponse.intent === 'support') {
        // Could trigger additional actions like opening support form
        console.log('User needs support - routing to support channel');
      } else if (n8nResponse.intent === 'sales') {
        // Could trigger actions like opening contact form
        console.log('Qualified lead - routing to sales');
      }

    } catch (error) {
      console.error('Error in chat flow:', error);
      
      // Add fallback message
      addMessage({
        text: "I'm having trouble connecting right now. Please email us at support@janio.com or try again later.",
        sender: 'bot'
      });
    } finally {
      setIsLoading(false);
    }
  };


  if (!session) {
    return null; // Loading or no session yet
  }

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-primary hover:bg-primary/90 text-white rounded-full w-14 h-14 shadow-lg transition-all duration-200 hover:scale-105 relative"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
          
          {/* Notification dot for new session */}
          {!isOpen && session.messages.length === 1 && (
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse" />
          )}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 bg-white rounded-lg shadow-2xl border z-50 h-[28rem] flex flex-col">
          {/* Header */}
          <div className="bg-primary text-white p-4 rounded-t-lg flex justify-between items-center">
            <div>
              <h3 className="font-semibold flex items-center gap-2">
                <Bot className="w-4 h-4" />
                Janio Assistant
              </h3>
              <p className="text-sm text-white/90">Here to help with logistics & support</p>
            </div>
            <Button
              onClick={clearSession}
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20 h-6 w-6 p-0"
              title="Clear conversation"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {session.messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    msg.sender === 'user'
                      ? 'bg-primary text-white rounded-br-none'
                      : 'bg-gray-100 text-gray-800 rounded-bl-none'
                  }`}
                >
                  <div className="flex items-start gap-2">
                    {msg.sender === 'bot' && <Bot className="w-4 h-4 mt-0.5 flex-shrink-0" />}
                    {msg.sender === 'user' && <User className="w-4 h-4 mt-0.5 flex-shrink-0" />}
                    <div>
                      <p className="text-sm leading-relaxed">{msg.text}</p>
                      <span className="text-xs opacity-70 mt-1 block">
                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Typing indicator */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 rounded-lg rounded-bl-none p-3 max-w-[80%]">
                  <div className="flex items-center gap-2">
                    <Bot className="w-4 h-4" />
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span className="text-sm">Typing...</span>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t bg-white">
            <form onSubmit={handleSubmit} className="p-4 flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask about costs, delivery, or support..."
              className="flex-1 border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              disabled={isLoading}
            />
            <Button 
              type="submit" 
              size="sm" 
              className="bg-primary hover:bg-primary/90"
              disabled={isLoading || !message.trim()}
            >
              <Send className="w-4 h-4" />
            </Button>
            </form>
          </div>
          
          {/* Footer */}
          <div className="px-4 py-3 border-t bg-gray-50 rounded-b-lg">
            <p className="text-xs text-gray-500 text-center">
              Conversation saved • <button 
                onClick={clearSession} 
                className="text-primary hover:underline"
              >
                Start fresh
              </button>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default EnhancedChatbot;