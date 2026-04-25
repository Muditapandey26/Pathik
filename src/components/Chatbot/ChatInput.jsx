import React from 'react';

export default function ChatInput({ value, onChange, onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      onSubmit();
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="p-4 border-t border-gray-100 bg-white"
    >
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-sm sm:text-base text-gray-800"
        />
        <button
          type="submit"
          disabled={!value.trim()}
          className="p-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
          aria-label="Send message"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </button>
      </div>
    </form>
  );
}
