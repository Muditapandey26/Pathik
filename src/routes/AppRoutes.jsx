import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import VolunteerDashboard from '../pages/volunteer/VolunteerDashboard';
import NgoDashboard from '../pages/ngo/NgoDashboard';
import ReportNeed from '../pages/ReportNeed';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/volunteer/dashboard" element={<VolunteerDashboard />} />
      <Route path="/ngo/dashboard" element={<NgoDashboard />} />
      <Route path="/report-need" element={<ReportNeed />} />
    </Routes>
  );
}
