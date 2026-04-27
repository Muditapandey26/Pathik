import React from 'react';

/**
 * MessageBubble Component
 * Renders individual chat messages with alignment based on sender.
 */
export default function MessageBubble({ message, isUser }) {
  return (
    <div className={`flex w-full ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div 
        className={`max-w-[85%] sm:max-w-[75%] px-4 py-3 rounded-2xl shadow-sm ${
          isUser 
            ? 'bg-teal-700 text-white rounded-br-sm' 
            : 'bg-white text-slate-800 rounded-bl-sm border border-slate-100'
        }`}
      >
        <p className="text-sm sm:text-base leading-relaxed whitespace-pre-wrap">{message}</p>
      </div>
    </div>
  );
}
