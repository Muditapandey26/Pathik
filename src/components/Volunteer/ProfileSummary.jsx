import React from 'react';

export default function ProfileSummary({ 
  name = "Dummy Volunteer", 
  role = "Community Helper", 
  hours = 120, 
  tasksCompleted = 15 
}) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-2xl mb-4 border-4 border-white shadow-sm">
        {name.charAt(0)}
      </div>
      <h3 className="text-lg font-bold text-gray-900">{name}</h3>
      <p className="text-sm text-gray-500 font-medium mb-6">{role}</p>
      
      <div className="w-full grid grid-cols-2 gap-4 border-t border-gray-100 pt-6">
        <div className="text-center">
          <p className="text-2xl font-black text-gray-900">{hours}</p>
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">Hours</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-black text-gray-900">{tasksCompleted}</p>
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">Tasks</p>
        </div>
      </div>
      
      <button className="w-full mt-6 py-2 bg-gray-50 text-gray-700 text-sm font-bold rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors">
        Edit Profile
      </button>
    </div>
  );
}
