import React, { useState, useMemo } from 'react';
import TaskCard from './TaskCard';
import { rankTasks } from '../../utils/matching';

export default function TaskFeed() {
  const [filterUrgency, setFilterUrgency] = useState('');
  const [filterCity, setFilterCity] = useState('');
  const [filterSkill, setFilterSkill] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // Mock volunteer profile data
  const mockVolunteer = {
    skills: ["Logistics", "Education"],
    city: "Mumbai",
    pincode: "400001"
  };

  // Dummy data array updated with matching fields
  const dummyTasks = [
    {
      id: 1,
      title: "Distribute Food Packets",
      ngoName: "Food for All",
      location: "Downtown Plaza",
      city: "Mumbai",
      pincode: "400001",
      date: "Tomorrow, 9 AM",
      status: "urgent",
      urgency: "high",
      requiredSkills: ["Logistics", "Coordination"],
      skill: "Logistics", // Kept for filter compatibility
      description: "We need 5 volunteers to help distribute 500 food packets to the homeless community downtown. Gloves and sanitizers provided."
    },
    {
      id: 2,
      title: "Weekend Beach Cleanup",
      ngoName: "Ocean Savers",
      location: "Sunny Beach",
      city: "Mumbai",
      pincode: "400005",
      date: "Saturday, 8 AM",
      status: "open",
      urgency: "medium",
      requiredSkills: ["Physical", "Environment"],
      skill: "Physical",
      description: "Join us for our monthly beach cleanup. Trash bags and gloves will be provided. Let's keep our oceans clean!"
    },
    {
      id: 3,
      title: "Teach Basic Math",
      ngoName: "EduCare Foundation",
      location: "City Library",
      city: "Pune",
      pincode: "411001",
      date: "Next Monday",
      status: "in progress",
      urgency: "low",
      requiredSkills: ["Education", "Teaching"],
      skill: "Education",
      description: "Looking for someone to teach basic mathematics to underprivileged children for 2 hours in the evening."
    },
    {
      id: 4,
      title: "Tree Plantation Drive",
      ngoName: "Green Earth",
      location: "Central Park",
      city: "Mumbai",
      pincode: "400012",
      date: "Oct 30, 2026",
      status: "completed",
      urgency: "low",
      requiredSkills: ["Physical"],
      skill: "Physical",
      description: "Successfully planted 200 saplings in the central park area. Thank you to all who participated."
    }
  ];

  // Integrate ranking utility
  // We use useMemo to avoid re-ranking on every render unless tasks/volunteer changes
  const rankedTasks = useMemo(() => {
    return rankTasks(mockVolunteer, dummyTasks);
  }, []);

  // Filtering logic applied to the ranked results
  const filteredTasks = rankedTasks.filter(task => {
    let matches = true;
    if (filterUrgency && task.status !== filterUrgency) matches = false;
    if (filterCity && !task.location.includes(filterCity)) matches = false;
    if (filterSkill && task.skill !== filterSkill) matches = false;
    return matches;
  });

  return (
    <div className="flex flex-col h-full w-full">
      {/* Header with Filter Toggle */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
             <span className="w-2 h-2 rounded-full bg-teal-500"></span>
             <h2 className="text-2xl font-black text-slate-900 tracking-tight">Recommendations</h2>
          </div>
          <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.25em]">Personalized for your profile</p>
        </div>
        <button 
          onClick={() => setShowFilters(!showFilters)}
          className={`text-[10px] font-black uppercase tracking-widest px-6 py-3 rounded-2xl transition-all flex items-center gap-2 shadow-sm ${
            showFilters || filterUrgency || filterCity || filterSkill 
              ? 'text-teal-700 bg-teal-50 border border-teal-100 ring-4 ring-teal-500/5' 
              : 'text-slate-600 bg-slate-50 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>
          Filter Feed
        </button>
      </div>

      {/* Filter UI */}
      {showFilters && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 p-8 bg-slate-50/50 border border-slate-100 rounded-[2rem] animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="space-y-2">
            <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Urgency</label>
            <select 
              value={filterUrgency} 
              onChange={(e) => setFilterUrgency(e.target.value)}
              className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-700 font-bold text-slate-700 shadow-sm transition-all"
            >
              <option value="">All Statuses</option>
              <option value="urgent">Urgent</option>
              <option value="open">Open</option>
              <option value="in progress">In Progress</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">City/Location</label>
            <select 
              value={filterCity} 
              onChange={(e) => setFilterCity(e.target.value)}
              className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-700 font-bold text-slate-700 shadow-sm transition-all"
            >
              <option value="">All Locations</option>
              <option value="Downtown">Downtown</option>
              <option value="Beach">Beach</option>
              <option value="City Library">City Library</option>
              <option value="Central Park">Central Park</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Skill</label>
            <select 
              value={filterSkill} 
              onChange={(e) => setFilterSkill(e.target.value)}
              className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-700 font-bold text-slate-700 shadow-sm transition-all"
            >
              <option value="">All Skills</option>
              <option value="Physical">Physical</option>
              <option value="Education">Education</option>
              <option value="Logistics">Logistics</option>
            </select>
          </div>
          
          {(filterUrgency || filterCity || filterSkill) && (
            <div className="sm:col-span-3 flex justify-end mt-2">
              <button 
                onClick={() => {
                  setFilterUrgency('');
                  setFilterCity('');
                  setFilterSkill('');
                }}
                className="text-[10px] font-black text-teal-600 hover:text-teal-800 uppercase tracking-[0.2em] transition-colors flex items-center gap-2 group"
              >
                <div className="w-5 h-5 rounded-full bg-teal-50 flex items-center justify-center group-hover:bg-teal-100 transition-colors">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"/></svg>
                </div>
                Reset All
              </button>
            </div>
          )}
        </div>
      )}

      {/* Feed */}
      <div className="flex flex-col gap-6">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task, index) => (
            <div key={task.id} className="animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: `${index * 100}ms` }}>
              <TaskCard 
                title={task.title}
                ngoName={task.ngoName}
                location={task.location}
                date={task.date}
                status={task.status}
                description={task.description}
                matchScore={task.matchScore}
                isFeatured={index === 0 && !filterUrgency && !filterCity && !filterSkill}
              />
            </div>
          ))
        ) : (
          <div className="py-20 text-center flex flex-col items-center border-2 border-dashed border-slate-200 rounded-[2.5rem] bg-slate-50/50">
            <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center text-slate-300 mb-6">
               <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <p className="text-slate-500 font-black text-sm uppercase tracking-widest">No matching tasks found</p>
            <p className="text-slate-400 text-xs mt-2 font-medium">Try adjusting your filters to see more opportunities.</p>
          </div>
        )}
      </div>
    </div>
  );
}
