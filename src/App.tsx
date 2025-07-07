import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/lib/firebase';

import Navigation from '@/components/Navigation';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Chat from './pages/Chat';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
// ... other imports

const App = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    // Optional: show loading while auth state initializing
    return <div>Loading...</div>;
  }

  return (
    <BrowserRouter>
      <Navigation user={user} />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/chat" replace />}
        />
        <Route
          path="/signup"
          element={!user ? <Signup /> : <Navigate to="/chat" replace />}
        />
        <Route
          path="/chat"
          element={user ? <Chat /> : <Navigate to="/login" replace />}
        />
        {/* Add other routes here */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
