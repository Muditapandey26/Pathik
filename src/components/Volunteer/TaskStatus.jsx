import React from 'react';

export default function TaskStatus({ status = "open" }) {
  const getStatusStyles = () => {
    switch(status.toLowerCase()) {
      case 'open':
        return 'bg-green-50 text-green-700 border-green-200';
      case 'in progress':
        return 'bg-yellow-50 text-yellow-700 border-yellow-200';
      case 'completed':
        return 'bg-gray-100 text-gray-600 border-gray-200';
      case 'urgent':
        return 'bg-red-50 text-red-700 border-red-200 animate-pulse';
      default:
        return 'bg-blue-50 text-blue-700 border-blue-200';
    }
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold border ${getStatusStyles()}`}>
      {status.toUpperCase()}
    </span>
  );
}
