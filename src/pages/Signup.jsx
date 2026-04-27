import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { auth } from '../services/firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { createUserProfile } from '../services/userService';

export default function Signup() {
  const { setUserRole } = useAuth();
  const [role, setRole] = useState('volunteer');
  const [name, setName] = useState('');
  const [orgName, setOrgName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      return setError("Passwords do not match");
    }

    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Update profile with name and optionally role (stored in displayName for now as Firestore is skipped)
      const profileName = role === 'ngo' ? `${orgName} (${name})` : name;
      await updateProfile(user, { displayName: profileName });
      
      // Save profile to Firestore
      const profileData = {
        name,
        email,
        role,
        ...(role === 'ngo' && { orgName })
      };
      await createUserProfile(user.uid, profileData);
      
      // Save role for routing (Persistence bridge until Firestore fetching is in context)
      localStorage.setItem(`role_${user.uid}`, role);
      setUserRole(role);
      
      console.log("Registered and profile saved for role:", role);
      
      // Redirect based on role
      if (role === 'ngo') {
        navigate('/ngo/dashboard');
      } else {
        navigate('/volunteer/dashboard');
      }
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans flex flex-col text-slate-800">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center p-4 pt-32 pb-20">
        <div className="w-full max-w-xl bg-white rounded-[3rem] shadow-2xl shadow-slate-200/60 border border-slate-100 p-10 sm:p-14 relative overflow-hidden">
          
          {/* Subtle decoration */}
          <div className="absolute top-0 right-0 -mr-24 -mt-24 w-64 h-64 rounded-full bg-teal-50 blur-[80px] opacity-70 pointer-events-none"></div>

          <div className="relative z-10 text-center mb-10">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight mb-3">Join Pathik</h2>
            <p className="text-slate-500 font-medium">Empower your community with grassroots action.</p>
          </div>

          <form onSubmit={handleSignup} className="space-y-8">
            
            {error && (
              <div className="p-4 bg-red-50 border border-red-100 text-red-600 text-xs font-bold rounded-xl animate-in fade-in zoom-in duration-200">
                {error}
              </div>
            )}

            <div className="space-y-3">
              <label htmlFor="role" className="block text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">
                I am a...
              </label>
              <div className="relative">
                <select 
                  id="role" 
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-6 py-4 bg-slate-50/50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-700 transition-all text-slate-800 appearance-none font-bold cursor-pointer"
                >
                  <option value="volunteer">Volunteer</option>
                  <option value="ngo">NGO / Organization</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-6 text-slate-500">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>
            </div>

            {role === 'ngo' && (
              <div className="space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
                <label htmlFor="orgName" className="block text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">
                  Organization Name
                </label>
                <input 
                  type="text" 
                  id="orgName" 
                  value={orgName}
                  onChange={(e) => setOrgName(e.target.value)}
                  required={role === 'ngo'}
                  className="w-full px-6 py-4 bg-slate-50/50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-700 transition-all text-slate-800 placeholder-slate-400 font-medium"
                  placeholder="E.g., Global Relief" 
                />
              </div>
            )}

            <div className="space-y-3">
              <label htmlFor="name" className="block text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">
                {role === 'ngo' ? 'Contact Person Name' : 'Full Name'}
              </label>
              <input 
                type="text" 
                id="name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-6 py-4 bg-slate-50/50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-700 transition-all text-slate-800 placeholder-slate-400 font-medium"
                placeholder={role === 'ngo' ? "Your name" : "Your full name"} 
              />
            </div>

            <div className="space-y-3">
              <label htmlFor="email" className="block text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">
                Email Address
              </label>
              <input 
                type="email" 
                id="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-6 py-4 bg-slate-50/50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-700 transition-all text-slate-800 placeholder-slate-400 font-medium"
                placeholder="you@example.com" 
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label htmlFor="password" className="block text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">
                  Password
                </label>
                <input 
                  type="password" 
                  id="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-6 py-4 bg-slate-50/50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-700 transition-all text-slate-800 placeholder-slate-400 font-medium"
                  placeholder="••••••••" 
                />
              </div>
              <div className="space-y-3">
                <label htmlFor="confirmPassword" className="block text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">
                  Confirm
                </label>
                <input 
                  type="password" 
                  id="confirmPassword" 
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="w-full px-6 py-4 bg-slate-50/50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-700 transition-all text-slate-800 placeholder-slate-400 font-medium"
                  placeholder="••••••••" 
                />
              </div>
            </div>

            <div className="pt-6">
              <button 
                type="submit" 
                disabled={loading}
                className="w-full flex justify-center py-5 px-6 border border-transparent rounded-2xl shadow-xl shadow-teal-700/25 text-lg font-black text-white bg-teal-700 hover:bg-teal-800 hover:-translate-y-1 transition-all duration-300 active:scale-95 uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {loading ? 'Creating Account...' : 'Create Account'}
              </button>
            </div>
          </form>

          <div className="mt-10 text-center border-t border-slate-100 pt-8">
            <p className="text-sm text-slate-500 font-medium">
              Already with us?{' '}
              <Link to="/login" className="text-teal-700 hover:text-teal-900 font-black transition-colors">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
