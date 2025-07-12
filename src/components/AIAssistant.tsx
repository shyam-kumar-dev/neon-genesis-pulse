import { useState, useEffect } from 'react';
import { Bot, MessageCircle, X, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "👋 Hello! I'm your AI assistant. Ask me anything about this portfolio or AI development!",
      isBot: true,
    }
  ]);

  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      isBot: false,
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "That's a great question! This portfolio showcases cutting-edge AI integration and modern web technologies.",
        "I can help you understand the technical implementations behind these projects. What specifically interests you?",
        "This portfolio demonstrates advanced React patterns, AI integration, and futuristic design principles.",
        "The neural network architecture here represents the future of web development. Would you like to know more?",
      ];

      const botResponse = {
        id: Date.now() + 1,
        text: responses[Math.floor(Math.random() * responses.length)],
        isBot: true,
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating AI Assistant Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          className="w-16 h-16 rounded-full neon-border bg-primary/20 hover:bg-primary/30 text-primary float-animation group"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Bot className="w-6 h-6 group-hover:animate-neon-pulse" />
          )}
        </Button>
      </div>

      {/* Chat Interface */}
      {isOpen && (
        <div className="fixed bottom-28 right-8 w-80 h-96 z-50">
          <div className="glass-panel h-full rounded-2xl border-primary/30 flex flex-col overflow-hidden">
            {/* Header */}
            <div className="p-4 border-b border-glass-border">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-primary animate-neon-pulse" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Neural Assistant</h3>
                  <p className="text-xs text-muted-foreground">AI-Powered Guide</p>
                </div>
                <div className="ml-auto flex items-center space-x-1">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                  <span className="text-xs text-primary">Online</span>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-xs p-3 rounded-lg text-sm ${
                      message.isBot
                        ? 'bg-primary/10 border border-primary/20 text-foreground'
                        : 'bg-secondary/10 border border-secondary/20 text-foreground'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-primary/10 border border-primary/20 p-3 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-glass-border">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-muted/20 border border-glass-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                />
                <Button
                  onClick={handleSendMessage}
                  size="sm"
                  className="neon-border bg-primary/20 hover:bg-primary/30 text-primary px-3"
                >
                  <Zap className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};