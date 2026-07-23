import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bot, X, Mic, Send, Volume2, Leaf } from 'lucide-react';
import { useAppContext } from '../context';

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([
    { role: 'ai', text: 'Hello! I am KrishiMitra AI. How can I help you with your farm today?' }
  ]);
  const [input, setInput] = useState('');
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { speak } = useAppContext();

  const quickPrompts = [
    "Today's Wheat Mandi Prices",
    "Tomato blight treatment",
    "NABARD Cold Storage Subsidy",
    "When should I harvest?"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    
    setMessages(prev => [...prev, { role: 'user', text }]);
    setInput('');
    
    // Simulate AI response
    setTimeout(() => {
      const response = `Here is information about "${text}". We are still analyzing your exact query, but KrishiYukti is here to support your farming journey.`;
      setMessages(prev => [...prev, { role: 'ai', text: response }]);
    }, 1000);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-20 right-4 sm:right-8 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 flex flex-col overflow-hidden"
            style={{ maxHeight: 'calc(100vh - 120px)' }}
          >
            {/* Header */}
            <div className="bg-[#0D2818] p-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-8 h-8 rounded-full bg-[#1B4332] border border-[#2D6A4F] flex items-center justify-center">
                    <Bot className="w-5 h-5" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-[#0D2818] rounded-full"></span>
                </div>
                <div>
                  <h3 className="font-bold text-sm">KrishiMitra AI</h3>
                  <p className="text-[10px] text-green-200 opacity-80">Always here for you</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/10 rounded-full transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 max-h-96">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] rounded-2xl p-3 text-sm shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-[#1B4332] text-white rounded-br-none' 
                      : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none'
                  }`}>
                    {msg.text}
                    {msg.role === 'ai' && (
                      <button 
                        onClick={() => speak(msg.text)}
                        className="mt-2 flex items-center gap-1 text-[10px] font-bold text-[#40916c] uppercase hover:text-[#2d6a4f]"
                      >
                        <Volume2 className="w-3 h-3" /> Read Aloud
                      </button>
                    )}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompts */}
            <div className="p-3 bg-white border-t border-gray-100 overflow-x-auto whitespace-nowrap flex gap-2 hide-scrollbar">
              {quickPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(prompt)}
                  className="inline-block px-3 py-1.5 bg-gray-50 hover:bg-green-50 border border-gray-200 hover:border-[#40916c] rounded-full text-xs text-gray-600 transition-colors"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-3 bg-white border-t border-gray-200 flex items-center gap-2">
              <button 
                onClick={() => {
                  setIsListening(true);
                  setTimeout(() => { setIsListening(false); handleSend("Voice input simulated text"); }, 2000);
                }}
                className={`p-2 rounded-full transition-colors ${isListening ? 'bg-red-50 text-red-500' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
              >
                <Mic className="w-5 h-5" />
              </button>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend(input)}
                placeholder="Ask KrishiMitra in your language..."
                className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-[#40916c] focus:ring-1 focus:ring-[#40916c]"
              />
              <button 
                onClick={() => handleSend(input)}
                className="p-2 bg-[#1B4332] text-white rounded-full hover:bg-[#0D2818] transition-colors"
                disabled={!input.trim()}
              >
                <Send className="w-4 h-4 ml-0.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 p-4 bg-[#D97706] text-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:scale-105 active:scale-95 transition-all z-40 group border-2 border-white"
      >
        <Leaf className="w-6 h-6 group-hover:rotate-12 transition-transform" />
        <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full animate-pulse"></span>
      </button>
    </>
  );
}
