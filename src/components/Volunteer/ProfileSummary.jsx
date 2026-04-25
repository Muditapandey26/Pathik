import React from 'react';

export default function ProfileSummary({ 
  name = "Dummy Volunteer", 
  role = "Community Helper", 
  hours = 120, 
  tasksCompleted = 15 
}) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative mb-6">
        <div className="w-24 h-24 bg-teal-50 rounded-[2rem] flex items-center justify-center text-teal-700 font-black text-4xl border-4 border-white shadow-xl shadow-teal-700/10 ring-1 ring-teal-100/50">
          {name.charAt(0)}
        </div>
        <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-[#16A34A] border-4 border-white rounded-full flex items-center justify-center">
           <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/></svg>
        </div>
      </div>
      <h3 className="text-xl font-black text-slate-900 tracking-tight">{name}</h3>
      <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mt-1">{role}</p>
      
      <div className="w-full grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-slate-50">
        <div className="text-center px-2">
          <p className="text-3xl font-black text-slate-900 tracking-tighter">{hours}</p>
          <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] mt-1">Hours</p>
        </div>
        <div className="text-center px-2">
          <p className="text-3xl font-black text-slate-900 tracking-tighter">{tasksCompleted}</p>
          <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] mt-1">Tasks</p>
        </div>
      </div>
      
      <button className="w-full mt-10 py-4 bg-slate-50 text-slate-700 text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl border border-slate-100 hover:bg-slate-100 hover:text-slate-900 transition-all active:scale-95 shadow-sm">
        Edit Account
      </button>
    </div>
  );
}
