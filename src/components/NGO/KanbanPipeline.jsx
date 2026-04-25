import React from 'react';
import TaskCard from '../Volunteer/TaskCard';

export default function KanbanPipeline() {
  const columns = [
    {
      id: 'pending',
      title: 'Pending',
      color: 'bg-slate-100 text-slate-700',
      dot: 'bg-slate-400',
      tasks: [
        { id: 101, title: 'Medical Camp Setup', location: 'City Square', date: 'Tomorrow', status: 'urgent', description: 'Requires 10 volunteers.' }
      ]
    },
    {
      id: 'assigned',
      title: 'Assigned',
      color: 'bg-teal-50 text-teal-700',
      dot: 'bg-teal-600',
      tasks: [
        { id: 102, title: 'Food Drive', location: 'East District', date: 'Today', status: 'open', description: 'Volunteers confirmed.' },
        { id: 105, title: 'Logistics Planning', location: 'HQ', date: 'Today', status: 'open', description: 'Route planning for delivery.' }
      ]
    },
    {
      id: 'in_progress',
      title: 'In Progress',
      color: 'bg-amber-50 text-[#F59E0B]',
      dot: 'bg-[#F59E0B]',
      tasks: [
        { id: 103, title: 'Beach Cleanup', location: 'Sunny Beach', date: 'Ongoing', status: 'in progress', description: 'Currently running.' }
      ]
    },
    {
      id: 'completed',
      title: 'Completed',
      color: 'bg-green-50 text-[#16A34A]',
      dot: 'bg-[#16A34A]',
      tasks: [
        { id: 104, title: 'Tree Plantation', location: 'Central Park', date: 'Yesterday', status: 'completed', description: '200 trees planted.' }
      ]
    }
  ];

  return (
    <div className="w-full bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col min-h-[500px]">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-base font-bold text-slate-900">Task Pipeline</h3>
        <button className="text-sm font-bold text-teal-700 hover:text-teal-900 transition-colors">
          View All &rarr;
        </button>
      </div>

      <div className="flex-grow overflow-x-auto pb-4 scrollbar-hide">
        <div className="flex gap-6 min-w-max h-full">
          {columns.map(col => (
            <div key={col.id} className="w-80 flex flex-col bg-slate-50/50 rounded-2xl border border-slate-100">
              <div className="flex items-center justify-between p-4 border-b border-slate-100 bg-slate-50/80 rounded-t-2xl">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${col.dot}`}></span>
                  <h4 className="font-bold text-slate-800 text-sm">{col.title}</h4>
                </div>
                <span className={`text-xs font-bold px-2 py-1 rounded-md ${col.color}`}>
                  {col.tasks.length}
                </span>
              </div>
              
              <div className="flex-grow p-3 flex flex-col gap-3 overflow-y-auto">
                {col.tasks.map(task => (
                  <div key={task.id} className="cursor-grab active:cursor-grabbing">
                    <TaskCard 
                      title={task.title}
                      ngoName="Your NGO"
                      location={task.location}
                      date={task.date}
                      status={task.status}
                      description={task.description}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
