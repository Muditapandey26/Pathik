import React from 'react';
import TaskStatus from './TaskStatus';

export default function TaskCard({ 
  title = "Dummy Task Title", 
  ngoName = "Helping Hands NGO", 
  location = "New Delhi, India", 
  date = "Oct 25, 2026", 
  status = "open",
  description = "This is a placeholder description for the task. It requires 3 volunteers."
}) {
  return (
    <div className="p-5 border border-gray-100 rounded-2xl bg-white hover:shadow-md hover:border-blue-100 transition-all duration-200 cursor-pointer group">
      <div className="flex justify-between items-start mb-3 gap-4">
        <h3 className="text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{title}</h3>
        <TaskStatus status={status} />
      </div>
      <p className="text-sm text-gray-600 mb-5 line-clamp-2">{description}</p>
      
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-xs font-medium text-gray-500">
        <div className="flex items-center gap-1.5">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
          <span className="truncate max-w-[120px]">{ngoName}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
          <span className="truncate max-w-[120px]">{location}</span>
        </div>
        <div className="flex items-center gap-1.5 sm:ml-auto">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
}
