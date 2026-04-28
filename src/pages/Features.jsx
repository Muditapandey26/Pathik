import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const FeatureCard = ({ icon, title, description }) => (
  <div className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-teal-500/30 transition-all group">
    <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-500 mb-6 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
    <p className="text-zinc-500 leading-relaxed">{description}</p>
  </div>
);

export default function Features() {
  const features = [
    {
      title: "Real-time Tracking",
      description: "Monitor live needs and active volunteer tasks on an interactive map. Respond to emergencies as they happen.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      )
    },
    {
      title: "NGO Dashboard",
      description: "A centralized command center for NGOs to manage volunteers, track resources, and post specific needs.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="9" y1="21" x2="9" y2="9" />
        </svg>
      )
    },
    {
      title: "Volunteer Network",
      description: "Join a global network of dedicated individuals. Gain reputation points and certifications for your contributions.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 00-3-3.87" />
          <path d="M16 3.13a4 4 0 010 7.75" />
        </svg>
      )
    },
    {
      title: "Impact Analytics",
      description: "Visualize the tangible impact of your work with deep analytics and automated reporting tools.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      )
    },
    {
      title: "Resource Management",
      description: "Efficiently allocate food, medicine, and supplies where they are needed most without waste.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      )
    },
    {
      title: "Verified Requests",
      description: "Every 'Report Need' request goes through a verification process to ensure authenticity and safety.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto space-y-20">
          <section className="text-center space-y-6">
            <h1 className="text-5xl md:text-7xl font-black tracking-tight bg-gradient-to-b from-white to-zinc-600 bg-clip-text text-transparent">
              Powerful Features
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Everything you need to coordinate social impact at scale, all in one place.
            </p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <FeatureCard key={idx} {...feature} />
            ))}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
