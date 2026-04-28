import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            {/* Left side: Contact Info */}
            <div className="space-y-12">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl font-black tracking-tight">Get in Touch</h1>
                <p className="text-xl text-zinc-400">
                  Have questions about Pathik? We're here to help you coordinate impact.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-teal-500/10 flex items-center justify-center text-teal-500 shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Email Us</h3>
                    <p className="text-zinc-500">support@pathik.org</p>
                    <p className="text-zinc-500">info@pathik.org</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-teal-500/10 flex items-center justify-center text-teal-500 shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Call Us</h3>
                    <p className="text-zinc-500">+1 (555) 000-PATHIK</p>
                    <p className="text-zinc-500">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-teal-500/10 flex items-center justify-center text-teal-500 shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Headquarters</h3>
                    <p className="text-zinc-500">123 Impact Plaza, Innovation District</p>
                    <p className="text-zinc-500">Bangalore, Karnataka, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: Form */}
            <div className="bg-zinc-900/50 p-10 rounded-[2.5rem] border border-zinc-800 shadow-2xl">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-400 ml-1">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-6 py-4 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-400 ml-1">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-6 py-4 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-400 ml-1">Subject</label>
                  <input 
                    type="text" 
                    placeholder="How can we help?"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-6 py-4 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-400 ml-1">Message</label>
                  <textarea 
                    rows="5"
                    placeholder="Tell us more about your inquiry..."
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-6 py-4 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-all resize-none"
                  ></textarea>
                </div>
                <button className="w-full bg-teal-600 hover:bg-teal-500 text-white font-bold py-5 rounded-2xl shadow-xl shadow-teal-900/20 transition-all transform active:scale-[0.98]">
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
