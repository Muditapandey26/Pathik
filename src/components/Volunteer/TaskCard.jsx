import React from 'react';
import TaskStatus from './TaskStatus';

export default function TaskCard({ 
  title = "Dummy Task Title", 
  ngoName = "Helping Hands NGO", 
  location = "New Delhi, India", 
  date = "Oct 25, 2026", 
  status = "open",
  description = "This is a placeholder description for the task. It requires 3 volunteers.",
  matchScore,
  isFeatured = false
}) {
  return (
    <div className={`p-6 border rounded-[1.5rem] bg-white transition-all duration-300 cursor-pointer group relative overflow-hidden ${
      isFeatured 
        ? 'border-teal-200 shadow-2xl shadow-teal-700/10 ring-1 ring-teal-100 scale-[1.02] z-10' 
        : 'border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 hover:border-teal-100'
    }`}>
      {isFeatured && (
        <div className="absolute top-0 right-0 px-4 py-1.5 bg-teal-700 text-[9px] font-black text-white uppercase tracking-[0.15em] rounded-bl-2xl shadow-sm">
          Recommended
        </div>
      )}

      <div className="flex justify-between items-start mb-4 gap-4">
        <div className="flex flex-col gap-2">
          <h3 className={`text-lg font-black transition-colors leading-tight ${
            isFeatured ? 'text-teal-900' : 'text-slate-900 group-hover:text-teal-700'
          }`}>{title}</h3>
          <div className="flex items-center gap-3">
            <TaskStatus status={status} />
            {matchScore !== undefined && (
              <span className="inline-flex items-center px-2.5 py-1 rounded-xl text-[10px] font-black bg-emerald-50 text-emerald-700 border border-emerald-100 uppercase tracking-wider">
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                {matchScore}% Match
              </span>
            )}
          </div>
        </div>
      </div>
      
      <p className="text-[13px] text-slate-500 mb-6 line-clamp-2 leading-relaxed font-medium italic">
        "{description}"
      </p>
      
      <div className="flex flex-wrap items-center gap-4 text-[11px] font-black text-slate-400 uppercase tracking-widest pt-5 border-t border-slate-50">
        <div className="flex items-center gap-2 group-hover:text-slate-600 transition-colors">
          <svg className="w-4 h-4 text-teal-600/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
          <span className="truncate max-w-[100px]">{ngoName}</span>
        </div>
        <div className="flex items-center gap-2 group-hover:text-slate-600 transition-colors">
          <svg className="w-4 h-4 text-teal-600/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
          <span className="truncate max-w-[100px]">{location}</span>
        </div>
        <div className="flex items-center gap-1.5 sm:ml-auto group-hover:text-slate-600 transition-colors">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
}
