import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import KanbanPipeline from '../../components/NGO/KanbanPipeline';
import { useAuth } from '../../context/AuthContext';
import { getAllNeeds } from '../../services/needService';
import { getNgoTasks } from '../../services/taskService';

export default function NgoDashboard() {
  const { user } = useAuth();
  const [metrics, setMetrics] = useState({
    openNeeds: 0,
    activeTasks: 0,
    volunteers: 148, // Placeholder for now
    resolvedCases: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        setLoading(true);
        const [needs, tasks] = await Promise.all([
          getAllNeeds(),
          getNgoTasks(user?.uid)
        ]);

        const openNeedsCount = needs.filter(n => n.status === 'pending').length;
        const activeTasksCount = tasks.filter(t => t.status === 'open' || t.status === 'assigned').length;
        const resolvedCount = needs.filter(n => n.status === 'resolved').length;

        setMetrics(prev => ({
          ...prev,
          openNeeds: openNeedsCount,
          activeTasks: activeTasksCount,
          resolvedCases: resolvedCount
        }));
      } catch (err) {
        console.error("Failed to fetch NGO metrics:", err);
        setError("Error loading dashboard data.");
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchMetrics();
    }
  }, [user]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans flex flex-col text-slate-800">
      <Navbar />
      
      {/* Wrapper to layout Sidebar and Main Content below the Navbar */}
      <div className="flex-grow pt-20 flex flex-col lg:flex-row w-full max-w-[1600px] mx-auto">
        
        {/* Left Sidebar Shell (Desktop) */}
        <aside className="w-full lg:w-72 flex-shrink-0 bg-white border-r border-slate-100 lg:min-h-[calc(100vh-80px)] p-8 hidden lg:flex flex-col">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-2xl bg-teal-700 text-white flex items-center justify-center font-black text-2xl shadow-lg shadow-teal-700/20">
              N
            </div>
            <div>
              <h2 className="font-black text-slate-900 leading-tight text-lg">NGO Center</h2>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Management Console</p>
            </div>
          </div>
          
          <nav className="flex-grow flex flex-col gap-3">
            <div className="h-12 w-full rounded-2xl bg-teal-50/50 border border-teal-100/50 flex items-center px-5 cursor-pointer group transition-all hover:bg-teal-50">
              <span className="text-sm font-black text-teal-800">Overview</span>
            </div>
            <div className="h-12 w-full rounded-2xl bg-transparent hover:bg-slate-50 flex items-center px-5 transition-all cursor-pointer group">
              <span className="text-sm font-bold text-slate-500 group-hover:text-slate-900">Manage Tasks</span>
            </div>
            <div className="h-12 w-full rounded-2xl bg-transparent hover:bg-slate-50 flex items-center px-5 transition-all cursor-pointer group">
              <span className="text-sm font-bold text-slate-500 group-hover:text-slate-900">Volunteers</span>
            </div>
            <div className="h-12 w-full rounded-2xl bg-transparent hover:bg-slate-50 flex items-center px-5 transition-all cursor-pointer group">
              <span className="text-sm font-bold text-slate-500 group-hover:text-slate-900">Impact Reports</span>
            </div>
          </nav>
          
          <div className="mt-auto p-6 bg-slate-50 rounded-3xl border border-slate-100">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 text-center">System Status</p>
            <div className="flex items-center justify-center gap-2 text-teal-600 font-black text-[10px] tracking-widest">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
              SECURE
            </div>
          </div>
        </aside>

        {/* Mobile Horizontal Tabs Shell */}
        <div className="lg:hidden w-full bg-white border-b border-slate-100 p-6 flex overflow-x-auto gap-3 scrollbar-hide">
          <div className="px-6 py-3 rounded-2xl bg-teal-50 border border-teal-100 flex items-center flex-shrink-0 cursor-pointer">
             <span className="text-sm font-black text-teal-700">Overview</span>
          </div>
          <div className="px-6 py-3 rounded-2xl bg-transparent border border-slate-100 flex items-center flex-shrink-0 cursor-pointer">
             <span className="text-sm font-bold text-slate-500">Tasks</span>
          </div>
          <div className="px-6 py-3 rounded-2xl bg-transparent border border-slate-100 flex items-center flex-shrink-0 cursor-pointer">
             <span className="text-sm font-bold text-slate-500">Volunteers</span>
          </div>
        </div>

        {/* Main Content Grid Shell */}
        <main className="flex-grow p-6 sm:p-10 lg:p-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
            <div>
              <h1 className="text-4xl font-black text-slate-900 tracking-tight">Overview</h1>
              <p className="text-slate-500 font-medium mt-2">Track your organization's activity and impact in real-time.</p>
            </div>
            <button className="px-8 py-4 bg-teal-700 text-white font-black text-sm uppercase tracking-widest rounded-2xl shadow-xl shadow-teal-700/25 hover:bg-teal-800 hover:-translate-y-1 transition-all active:scale-95 flex items-center gap-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4"/></svg>
              Create New Task
            </button>
          </div>

          {/* Top Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-6 relative">
            {loading && (
              <div className="absolute inset-0 bg-white/50 backdrop-blur-[1px] z-10 flex items-center justify-center rounded-2xl">
                <div className="w-8 h-8 border-4 border-teal-700/20 border-t-teal-700 rounded-full animate-spin"></div>
              </div>
            )}

            {/* Open Needs */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Open Needs</h3>
              <div className="flex items-end justify-between mt-2">
                <span className="text-4xl font-black text-slate-900">{metrics.openNeeds}</span>
                <span className="text-sm font-bold text-red-600 bg-red-50 px-2 py-1 rounded-md">Live</span>
              </div>
            </div>

            {/* Tasks */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Active Tasks</h3>
              <div className="flex items-end justify-between mt-2">
                <span className="text-4xl font-black text-slate-900">{metrics.activeTasks}</span>
                <span className="text-sm font-bold text-teal-700 bg-teal-50 px-2 py-1 rounded-md">On track</span>
              </div>
            </div>

            {/* Volunteers */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Volunteers</h3>
              <div className="flex items-end justify-between mt-2">
                <span className="text-4xl font-black text-slate-900">{metrics.volunteers}</span>
                <span className="text-sm font-bold text-green-600 bg-green-50 px-2 py-1 rounded-md">Network</span>
              </div>
            </div>

            {/* Resolved Cases */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Resolved Cases</h3>
              <div className="flex items-end justify-between mt-2">
                <span className="text-4xl font-black text-slate-900">{metrics.resolvedCases}</span>
                <span className="text-sm font-bold text-slate-600 bg-slate-100 px-2 py-1 rounded-md">Total</span>
              </div>
            </div>

          </div>

          {/* Kanban Pipeline Section */}
          <KanbanPipeline />

        </main>
        
      </div>
    </div>
  );
}
