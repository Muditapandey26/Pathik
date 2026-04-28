import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import VolunteerDashboard from '../pages/volunteer/VolunteerDashboard';
import NgoDashboard from '../pages/ngo/NgoDashboard';
import CreateTask from '../pages/ngo/CreateTask';
import ReportNeed from '../pages/ReportNeed';
import NotFound from '../pages/NotFound';
import VolunteerRoute from './VolunteerRoute';
import NGORoute from './NGORoute';
import About from '../pages/About';
import Features from '../pages/Features';
import Contact from '../pages/Contact';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route 
        path="/volunteer/dashboard" 
        element={
          <VolunteerRoute>
            <VolunteerDashboard />
          </VolunteerRoute>
        } 
      />
      <Route 
        path="/ngo/dashboard" 
        element={
          <NGORoute>
            <NgoDashboard />
          </NGORoute>
        } 
      />
      <Route 
        path="/ngo/create-task" 
        element={
          <NGORoute>
            <CreateTask />
          </NGORoute>
        } 
      />
      <Route path="/report-need" element={<ReportNeed />} />
      <Route path="/about" element={<About />} />
      <Route path="/features" element={<Features />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
