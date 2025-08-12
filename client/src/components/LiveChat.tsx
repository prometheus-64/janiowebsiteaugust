import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    // In a real implementation, this would send the message to a chat service
    console.log('Chat message:', message);
    setMessage('');
    // You could integrate with services like Intercom, Zendesk, or custom chat API
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-primary hover:bg-primary/90 text-white rounded-full w-14 h-14 shadow-lg transition-all duration-200 hover:scale-105"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-white rounded-lg shadow-2xl border z-50 max-h-96 flex flex-col">
          {/* Header */}
          <div className="bg-primary text-white p-4 rounded-t-lg">
            <h3 className="font-semibold">Need Help?</h3>
            <p className="text-sm text-white/90">We'll get back to you within 1-2 business days</p>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 min-h-[200px] max-h-[200px] overflow-y-auto">
            <div className="bg-gray-100 p-3 rounded-lg mb-3">
              <p className="text-sm text-gray-700">
                Hi! How can we help you with your logistics needs today?
              </p>
            </div>
          </div>

          {/* Input Area */}
          <form onSubmit={handleSubmit} className="border-t p-3 flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button type="submit" size="sm" className="bg-primary hover:bg-primary/90">
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </div>
      )}
    </>
  );
};

export default LiveChat;