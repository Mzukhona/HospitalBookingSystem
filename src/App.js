import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'sonner';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';

// Pages and Components
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Layout from './components/layout/Layout';
import Login from './pages/Login/Login';
import AppointmentBooking from './pages/AppointmentBooking/AppointmentBooking';
import TwoStepRegistration from './pages/Register/TwoStepRegistration';
import PatientDashboard from './pages/PatientDashboard/PatientDashboard';
//import AppointmentView from './components/AppointmentView';

// Simple NotFound component
const NotFound = () => (
  <div className="container text-center py-5">
    <h1>404 - Page Not Found</h1>
    <p>The page you're looking for doesn't exist.</p>
  </div>
);

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipPrimitive.Provider>
        <Toaster />
        
          <div className="App">
            <Layout>
              <Routes>
                {/* Redirect / to /home */}
                <Route path="/" element={<Navigate to="/home" replace />} />
                {/* Static pages */}
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<TwoStepRegistration />} />
                {/* Appointments and Dashboards */}
                <Route path="/appointmentbooking" element={<AppointmentBooking />} />
                {/*<Route path="/appointments" element={<AppointmentView />} />*/}
                <Route path="/patientDashboard" element={<PatientDashboard />} />
                {/* Catch-all 404 route 
                <Route path="*" element={<NotFound />} /> */}
              </Routes>
            </Layout>
          </div>
        
      </TooltipPrimitive.Provider>
    </QueryClientProvider>
  );
};

export default App;