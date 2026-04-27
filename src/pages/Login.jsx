import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { auth } from '../services/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function Login() {
  const { setUserRole } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('volunteer');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save role for routing (Persistence bridge until Firestore)
      localStorage.setItem(`role_${user.uid}`, role);
      setUserRole(role);

      // Redirect based on selected role
      if (role === 'ngo') {
        navigate('/ngo/dashboard');
      } else {
        navigate('/volunteer/dashboard');
      }
    } catch (err) {
      console.error(err);
      setError("Invalid email or password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col text-slate-800">
      <Navbar />

      <main className="flex-grow flex items-center justify-center p-4 pt-28 pb-12">
        <div className="w-full max-w-md bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/60 border border-slate-100 p-10 sm:p-14 relative overflow-hidden">

          {/* Subtle decoration */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 rounded-full bg-teal-50 blur-[60px] opacity-70 pointer-events-none"></div>

          <div className="relative z-10 text-center mb-10">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight mb-3">
              Welcome Back
            </h2>
            <p className="text-slate-500 font-medium">
              Continue your mission with Pathik.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-8">
            
            {error && (
              <div className="p-4 bg-red-50 border border-red-100 text-red-600 text-xs font-bold rounded-xl animate-in fade-in zoom-in duration-200">
                {error}
              </div>
            )}

            <div className="space-y-3">
              <label
                htmlFor="email"
                className="block text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1"
              >
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

            <div className="space-y-3">
              <label
                htmlFor="password"
                className="block text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1"
              >
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
              <label
                htmlFor="role"
                className="block text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1"
              >
                Login As
              </label>

              <div className="relative">
                <select
                  id="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-6 py-4 bg-slate-50/50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-700 transition-all text-slate-800 appearance-none font-bold cursor-pointer"
                >
                  <option value="volunteer">Volunteer</option>
                  <option value="ngo">NGO Partner</option>
                </select>

                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-6 text-slate-500">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center py-5 px-6 border border-transparent rounded-2xl shadow-xl shadow-teal-700/25 text-lg font-black text-white bg-teal-700 hover:bg-teal-800 hover:-translate-y-1 transition-all duration-300 active:scale-95 uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {loading ? 'Signing In...' : 'Sign In'}
              </button>
            </div>
          </form>

          <div className="mt-8 text-center border-t border-slate-100 pt-6">
            <p className="text-sm text-slate-600 font-medium">
              Don't have an account yet?{' '}
              <Link
                to="/signup"
                className="text-teal-700 hover:text-teal-900 font-bold transition-colors"
              >
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}