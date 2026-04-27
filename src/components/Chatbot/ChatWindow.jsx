import React, { useState } from 'react';
import MessageBubble from './MessageBubble';
import ChatInput from './ChatInput';
import { sendMessage } from '../../services/chatbotService';

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

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userText = inputValue.trim();
    const newUserMessage = { id: Date.now(), text: userText, isUser: true };
    
    // Add user message to UI immediately
    setMessages(prev => [...prev, newUserMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Format existing messages as history for Gemini (excluding the new message)
      // Gemini expects: { role: 'user' | 'model', parts: [{ text: string }] }
      const history = messages.map(msg => ({
        role: msg.isUser ? 'user' : 'model',
        parts: [{ text: msg.text }]
      }));

      // Get response from Gemini
      const responseText = await sendMessage(userText, history);
      
      setMessages(prev => [...prev, {
        id: Date.now(),
        text: responseText,
        isUser: false
      }]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, {
        id: Date.now(),
        text: "I encountered a slight technical glitch. Could you please try sending that again?",
        isUser: false
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full w-full bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/60 border border-slate-100 overflow-hidden relative">

      {/* Glassy Header */}
      <div className="px-8 py-5 border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-20 flex items-center gap-4">
        <div className="relative">
          <div className="w-14 h-14 rounded-2xl bg-teal-700 text-white flex items-center justify-center shadow-lg shadow-teal-700/30">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 8V4H8"></path>
              <rect width="16" height="12" x="4" y="8" rx="2"></rect>
              <path d="M2 14h2"></path>
              <path d="M20 14h2"></path>
              <path d="M15 13v2"></path>
              <path d="M9 13v2"></path>
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
