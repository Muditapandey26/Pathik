import React, { useState } from 'react';
import TaskCard from './TaskCard';

export default function TaskFeed() {
  const [filterUrgency, setFilterUrgency] = useState('');
  const [filterCity, setFilterCity] = useState('');
  const [filterSkill, setFilterSkill] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // Dummy data array
  const dummyTasks = [
    {
      id: 1,
      title: "Distribute Food Packets",
      ngoName: "Food for All",
      location: "Downtown Plaza",
      date: "Tomorrow, 9 AM",
      status: "urgent",
      skill: "Logistics",
      description: "We need 5 volunteers to help distribute 500 food packets to the homeless community downtown. Gloves and sanitizers provided."
    },
    {
      id: 2,
      title: "Weekend Beach Cleanup",
      ngoName: "Ocean Savers",
      location: "Sunny Beach",
      date: "Saturday, 8 AM",
      status: "open",
      skill: "Physical",
      description: "Join us for our monthly beach cleanup. Trash bags and gloves will be provided. Let's keep our oceans clean!"
    },
    {
      id: 3,
      title: "Teach Basic Math",
      ngoName: "EduCare Foundation",
      location: "City Library",
      date: "Next Monday",
      status: "in progress",
      skill: "Education",
      description: "Looking for someone to teach basic mathematics to underprivileged children for 2 hours in the evening."
    },
    {
      id: 4,
      title: "Tree Plantation Drive",
      ngoName: "Green Earth",
      location: "Central Park",
      date: "Oct 30, 2026",
      status: "completed",
      skill: "Physical",
      description: "Successfully planted 200 saplings in the central park area. Thank you to all who participated."
    }
  ];

  // Filtering logic
  const filteredTasks = dummyTasks.filter(task => {
    let matches = true;
    if (filterUrgency && task.status !== filterUrgency) matches = false;
    if (filterCity && !task.location.includes(filterCity)) matches = false;
    if (filterSkill && task.skill !== filterSkill) matches = false;
    return matches;
  });

  return (
    <div className="flex flex-col h-full w-full">
      {/* Header with Filter Toggle */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-gray-900">Task Feed</h2>
        <button 
          onClick={() => setShowFilters(!showFilters)}
          className={`text-sm font-bold px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1 ${
            showFilters || filterUrgency || filterCity || filterSkill 
              ? 'text-blue-700 bg-blue-100' 
              : 'text-blue-600 bg-blue-50 hover:bg-blue-100'
          }`}
        >
          Filter 
          <span aria-hidden="true" className={`transform transition-transform ${showFilters ? 'rotate-180' : ''}`}>
            &darr;
          </span>
        </button>
      </div>

      {/* Filter UI */}
      {showFilters && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 p-4 bg-gray-50 border border-gray-100 rounded-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div>
            <label className="block text-xs font-bold text-gray-500 mb-1">Urgency</label>
            <select 
              value={filterUrgency} 
              onChange={(e) => setFilterUrgency(e.target.value)}
              className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 font-medium text-gray-700"
            >
              <option value="">All Statuses</option>
              <option value="urgent">Urgent</option>
              <option value="open">Open</option>
              <option value="in progress">In Progress</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-500 mb-1">City/Location</label>
            <select 
              value={filterCity} 
              onChange={(e) => setFilterCity(e.target.value)}
              className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 font-medium text-gray-700"
            >
              <option value="">All Locations</option>
              <option value="Downtown">Downtown</option>
              <option value="Beach">Beach</option>
              <option value="City Library">City Library</option>
              <option value="Central Park">Central Park</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-500 mb-1">Skill Requirement</label>
            <select 
              value={filterSkill} 
              onChange={(e) => setFilterSkill(e.target.value)}
              className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 font-medium text-gray-700"
            >
              <option value="">All Skills</option>
              <option value="Physical">Physical</option>
              <option value="Education">Education</option>
              <option value="Logistics">Logistics</option>
            </select>
          </div>
          
          {(filterUrgency || filterCity || filterSkill) && (
            <div className="sm:col-span-3 flex justify-end mt-1">
              <button 
                onClick={() => {
                  setFilterUrgency('');
                  setFilterCity('');
                  setFilterSkill('');
                }}
                className="text-xs font-bold text-gray-500 hover:text-gray-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      )}

      {/* Feed */}
      <div className="flex flex-col gap-4">
        {filteredTasks.length > 0 ? (
          filteredTasks.map(task => (
            <TaskCard 
              key={task.id}
              title={task.title}
              ngoName={task.ngoName}
              location={task.location}
              date={task.date}
              status={task.status}
              description={task.description}
            />
          ))
        ) : (
          <div className="py-10 text-center flex flex-col items-center border-2 border-dashed border-gray-200 rounded-xl bg-gray-50/50">
            <svg className="w-10 h-10 text-gray-300 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <p className="text-gray-500 font-medium">No tasks match your filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}
