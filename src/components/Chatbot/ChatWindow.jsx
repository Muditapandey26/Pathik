import React, { useState } from 'react';
import MessageBubble from './MessageBubble';
import ChatInput from './ChatInput';

export default function ChatWindow() {
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // Dummy state for UI demonstration (No actual API logic)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Namaskar! I’m Saathi. Are you here to volunteer or report a community need?",
      isUser: false,
    }
  ]);

  const handleSend = () => {
    if (!inputValue.trim()) return;
    
    // Add dummy user message to state
    setMessages(prev => [...prev, { id: Date.now(), text: inputValue, isUser: true }]);
    setInputValue('');
    setIsLoading(true);
    
    // Simulate backend response after 1.5 seconds
    setTimeout(() => {
      setIsLoading(false);
      setMessages(prev => [...prev, { 
        id: Date.now(), 
        text: "I am a placeholder UI for now! Backend integration coming soon.", 
        isUser: false 
      }]);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-full w-full bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/60 border border-slate-100 overflow-hidden relative">
      
      {/* Glassy Header */}
      <div className="px-8 py-5 border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-20 flex items-center gap-4">
        <div className="relative">
          <div className="w-14 h-14 rounded-2xl bg-teal-700 text-white flex items-center justify-center shadow-lg shadow-teal-700/30">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </div>
          <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#16A34A] border-4 border-white rounded-full"></span>
        </div>
        <div>
          <h3 className="font-black text-slate-900 text-xl tracking-tight">Saathi</h3>
          <p className="text-[10px] text-[#16A34A] font-black uppercase tracking-[0.2em] flex items-center gap-2">
            Online Assistant
          </p>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-slate-50/50 flex flex-col gap-2">
        {messages.map((msg) => (
          <MessageBubble key={msg.id} message={msg.text} isUser={msg.isUser} />
        ))}
        {isLoading && (
          <div className="flex w-full justify-start mb-6">
            <div className="px-5 py-4 rounded-2xl bg-white border border-slate-100 rounded-bl-none flex gap-2 items-center shadow-sm">
              <span className="w-1.5 h-1.5 bg-teal-600 rounded-full animate-bounce"></span>
              <span className="w-1.5 h-1.5 bg-teal-600 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
              <span className="w-1.5 h-1.5 bg-teal-600 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <ChatInput 
        value={inputValue} 
        onChange={setInputValue} 
        onSubmit={handleSend} 
      />
    </div>
  );
}
