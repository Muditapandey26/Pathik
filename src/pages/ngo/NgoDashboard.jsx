import React from 'react';
import Navbar from '../../components/Navbar';
import KanbanPipeline from '../../components/NGO/KanbanPipeline';

export default function NgoDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      <Navbar />
      
      {/* Wrapper to layout Sidebar and Main Content below the Navbar */}
      <div className="flex-grow pt-[72px] flex flex-col lg:flex-row w-full max-w-[1600px] mx-auto">
        
        {/* Left Sidebar Shell (Desktop) */}
        <aside className="w-full lg:w-64 flex-shrink-0 bg-white border-r border-gray-200 lg:min-h-[calc(100vh-72px)] p-6 hidden lg:flex flex-col">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-xl shadow-sm">
              N
            </div>
            <div>
              <h2 className="font-bold text-gray-900 leading-tight">NGO Center</h2>
              <p className="text-xs font-medium text-gray-500">Command Dashboard</p>
            </div>
          </div>
          
          <nav className="flex-grow flex flex-col gap-2">
            <div className="h-10 w-full rounded-lg bg-indigo-50 border border-indigo-100 flex items-center px-4 cursor-pointer">
              <span className="text-sm font-bold text-indigo-700">Overview</span>
            </div>
            <div className="h-10 w-full rounded-lg bg-transparent hover:bg-gray-50 flex items-center px-4 transition-colors cursor-pointer group">
              <span className="text-sm font-semibold text-gray-600 group-hover:text-gray-900">Manage Tasks</span>
            </div>
            <div className="h-10 w-full rounded-lg bg-transparent hover:bg-gray-50 flex items-center px-4 transition-colors cursor-pointer group">
              <span className="text-sm font-semibold text-gray-600 group-hover:text-gray-900">Volunteers</span>
            </div>
            <div className="h-10 w-full rounded-lg bg-transparent hover:bg-gray-50 flex items-center px-4 transition-colors cursor-pointer group">
              <span className="text-sm font-semibold text-gray-600 group-hover:text-gray-900">Reports</span>
            </div>
          </nav>
        </aside>

        {/* Mobile Horizontal Tabs Shell */}
        <div className="lg:hidden w-full bg-white border-b border-gray-200 p-4 flex overflow-x-auto gap-2 scrollbar-hide">
          <div className="px-4 py-2 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center flex-shrink-0 cursor-pointer">
             <span className="text-sm font-bold text-indigo-700">Overview</span>
          </div>
          <div className="px-4 py-2 rounded-lg bg-transparent border border-gray-100 flex items-center flex-shrink-0 cursor-pointer">
             <span className="text-sm font-semibold text-gray-600">Tasks</span>
          </div>
          <div className="px-4 py-2 rounded-lg bg-transparent border border-gray-100 flex items-center flex-shrink-0 cursor-pointer">
             <span className="text-sm font-semibold text-gray-600">Volunteers</span>
          </div>
          <div className="px-4 py-2 rounded-lg bg-transparent border border-gray-100 flex items-center flex-shrink-0 cursor-pointer">
             <span className="text-sm font-semibold text-gray-600">Reports</span>
          </div>
        </div>

        {/* Main Content Grid Shell */}
        <main className="flex-grow p-4 sm:p-6 lg:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">Overview</h1>
            <button className="px-5 py-2.5 bg-indigo-600 text-white font-bold rounded-xl shadow-sm shadow-indigo-600/20 hover:bg-indigo-700 transition-colors text-sm flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/></svg>
              Create Task
            </button>
          </div>

          {/* Top Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">
            
            {/* Open Needs */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col">
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Open Needs</h3>
              <div className="flex items-end justify-between mt-2">
                <span className="text-4xl font-black text-gray-900">24</span>
                <span className="text-sm font-bold text-red-600 bg-red-50 px-2 py-1 rounded-md">+3 today</span>
              </div>
            </div>

            {/* Tasks */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col">
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Active Tasks</h3>
              <div className="flex items-end justify-between mt-2">
                <span className="text-4xl font-black text-gray-900">12</span>
                <span className="text-sm font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-md">On track</span>
              </div>
            </div>

            {/* Volunteers */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col">
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Volunteers</h3>
              <div className="flex items-end justify-between mt-2">
                <span className="text-4xl font-black text-gray-900">148</span>
                <span className="text-sm font-bold text-green-600 bg-green-50 px-2 py-1 rounded-md">+12 this wk</span>
              </div>
            </div>

            {/* Resolved Cases */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col">
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Resolved Cases</h3>
              <div className="flex items-end justify-between mt-2">
                <span className="text-4xl font-black text-gray-900">856</span>
                <span className="text-sm font-bold text-gray-600 bg-gray-100 px-2 py-1 rounded-md">Total</span>
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
