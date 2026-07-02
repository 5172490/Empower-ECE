import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';

import SiteLayout from './components/layout/SiteLayout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import DevelopmentalPlanning from './pages/services/DevelopmentalPlanning';
import Navigator from './pages/services/Navigator';
import ArtOfRoutine from './pages/services/ArtOfRoutine';
import Funding from './pages/Funding';
import SchoolReadiness from './pages/SchoolReadiness';
import Workshops from './pages/Workshops';
import Resources from './pages/Resources';
import Booking from './pages/Booking';

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      navigateToLogin();
      return null;
    }
  }

  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/developmental-planning" element={<DevelopmentalPlanning />} />
        <Route path="/services/navigator" element={<Navigator />} />
        <Route path="/services/art-of-routine" element={<ArtOfRoutine />} />
        <Route path="/funding" element={<Funding />} />
        <Route path="/school-readiness" element={<SchoolReadiness />} />
        <Route path="/workshops" element={<Workshops />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/booking" element={<Booking />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <QueryClientProvider client={queryClientInstance}>
          <AuthenticatedApp />
          <Toaster />
        </QueryClientProvider>
      </AuthProvider>
    </Router>
  )
}

export default App
