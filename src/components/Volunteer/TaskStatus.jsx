import React from 'react';

export default function TaskStatus({ status = "open" }) {
  const getStatusStyles = () => {
    switch(status.toLowerCase()) {
      case 'open':
        return 'bg-green-50 text-[#16A34A] border-green-100';
      case 'in progress':
        return 'bg-amber-50 text-[#F59E0B] border-amber-100';
      case 'completed':
        return 'bg-slate-100 text-slate-600 border-slate-200';
      case 'urgent':
        return 'bg-red-50 text-[#DC2626] border-red-100 animate-pulse';
      default:
        return 'bg-teal-50 text-[#0F766E] border-teal-100';
    }
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold border ${getStatusStyles()}`}>
      {status.toUpperCase()}
    </span>
  );
}
