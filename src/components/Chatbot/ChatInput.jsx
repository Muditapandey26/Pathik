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
      className="p-6 border-t border-slate-100 bg-white"
    >
      <div className="flex items-center gap-3">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 px-6 py-4 bg-slate-50/50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-700 transition-all text-sm sm:text-base text-slate-800 placeholder-slate-400 font-medium"
        />
        <button
          type="submit"
          disabled={!value.trim()}
          className="p-4 bg-teal-700 text-white rounded-2xl hover:bg-teal-800 hover:-translate-y-0.5 transition-all flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed shadow-lg shadow-teal-700/20 active:scale-95"
          aria-label="Send message"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </button>
      </div>
    </form>
  );
}
