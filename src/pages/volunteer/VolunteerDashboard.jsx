import React from 'react';
import Navbar from '../../components/Navbar';
import ProfileSummary from '../../components/Volunteer/ProfileSummary';
import TaskFeed from '../../components/Volunteer/TaskFeed';
import TaskCard from '../../components/Volunteer/TaskCard';

export default function VolunteerDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Volunteer Dashboard</h1>
            <p className="text-gray-500 font-medium mt-1">Welcome back, your community needs you.</p>
          </div>
          <button className="px-5 py-2.5 bg-blue-600 text-white font-bold rounded-xl shadow-sm shadow-blue-600/20 hover:bg-blue-700 transition-colors">
            Find Opportunities
          </button>
        </div>

        {/* Dashboard Grid Shell */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Profile Summary Shell */}
          <div className="lg:col-span-3 w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6 flex flex-col min-h-[300px]">
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Profile Summary</h2>
            <ProfileSummary />
          </div>

          {/* Center Column: Main Task Feed Shell */}
          <div className="lg:col-span-6 w-full flex flex-col gap-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6 min-h-[500px] flex flex-col">
              <div className="flex-grow flex flex-col">
                <TaskFeed />
              </div>
            </div>
          </div>

          {/* Right Column: Upcoming Tasks Panel Shell */}
          <div className="lg:col-span-3 w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6 flex flex-col min-h-[400px]">
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Upcoming Tasks</h2>
            <div className="flex-grow flex flex-col gap-4">
              <TaskCard 
                title="Weekend Beach Cleanup"
                ngoName="Ocean Savers"
                location="Sunny Beach"
                date="Sat, 8 AM"
                status="in progress"
                description="Don't forget your gloves! See you at the main pier."
              />
              <TaskCard 
                title="Teach Basic Math"
                ngoName="EduCare"
                location="City Library"
                date="Monday"
                status="open"
                description="Awaiting final confirmation from coordinator."
              />
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
