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
    <div className="flex flex-col h-full w-full bg-white rounded-[2rem] shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
      
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-100 bg-white flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </div>
        <div>
          <h3 className="font-bold text-gray-900 text-lg">Saathi</h3>
          <p className="text-xs text-green-600 font-semibold flex items-center gap-1.5 tracking-wide">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> ONLINE
          </p>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-50 flex flex-col">
        {messages.map((msg) => (
          <MessageBubble key={msg.id} message={msg.text} isUser={msg.isUser} />
        ))}
        {isLoading && (
          <div className="flex w-full justify-start mb-4">
            <div className="px-4 py-3 rounded-2xl shadow-sm bg-white border border-gray-100 rounded-bl-sm flex gap-1.5 items-center h-10">
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.15s' }}></span>
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></span>
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
