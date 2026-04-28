import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          
          {/* Hero Section */}
          <section className="text-center space-y-8 mb-24">
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-2xl bg-teal-500/10 border border-teal-500/20 text-teal-500 text-[11px] font-black uppercase tracking-[0.2em] mx-auto shadow-sm">
              Our Story
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[0.9]">
              Bridging the gap between <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-300">
                Need and Action.
              </span>
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed max-w-3xl mx-auto font-medium">
              Pathik is a coordination engine designed to empower grassroots movements and streamline social impact through technology.
            </p>
          </section>

          {/* Mission & Vision Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
            <div className="bg-zinc-900/50 p-12 rounded-[3rem] shadow-2xl border border-zinc-800 space-y-6">
              <div className="w-16 h-16 bg-teal-700 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-teal-700/20">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              </div>
              <h2 className="text-4xl font-black text-white">Our Mission</h2>
              <p className="text-lg text-zinc-400 leading-relaxed">
                To provide communities with the tools they need to organize, communicate, and act effectively during times of crisis and in daily community building. We believe that local action, when properly coordinated, can solve the world's most pressing challenges.
              </p>
            </div>
            
            <div className="bg-zinc-800/30 p-12 rounded-[3rem] shadow-2xl text-white space-y-6 relative overflow-hidden border border-zinc-700/50">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-teal-500/10 blur-3xl rounded-full"></div>
              <div className="w-16 h-16 bg-teal-500 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-teal-500/20">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="22" y1="12" x2="18" y2="12"/><line x1="6" y1="12" x2="2" y2="12"/><line x1="12" y1="6" x2="12" y2="2"/><line x1="12" y1="22" x2="12" y2="18"/></svg>
              </div>
              <h2 className="text-4xl font-black text-white">Our Vision</h2>
              <p className="text-lg text-zinc-400 leading-relaxed">
                A world where no need goes unmet and no volunteer effort is wasted. We envision a global network of hyper-local response teams, powered by Pathik, creating a more resilient and compassionate society.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <section className="space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-black text-white">The Values That Drive Us</h2>
              <p className="text-zinc-500 font-medium">Built on a foundation of trust, transparency, and community.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Transparency', desc: 'We believe in full accountability for every action taken on our platform.' },
                { title: 'Inclusivity', desc: 'Pathik is for everyone, regardless of background, location, or resources.' },
                { title: 'Reliability', desc: 'Our systems are built to stay up when they are needed most.' }
              ].map((value, idx) => (
                <div key={idx} className="p-10 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-teal-500/50 transition-all group shadow-sm">
                  <h3 className="text-2xl font-black mb-4 text-white group-hover:text-teal-500 transition-colors">{value.title}</h3>
                  <p className="text-zinc-500 leading-relaxed font-medium">{value.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
