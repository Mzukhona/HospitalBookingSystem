import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.css';
import React,{useState} from 'react';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Layout from './components/layout/Layout';
import Login from './pages/Login/Login';
import AppointmentBooking from './pages/AppointmentBooking/AppointmentBooking';
import UserRegistration from './pages/Register/UserRegistration';
import PatientDashboard from './pages/PatientDashboard/PatientDashboard';



const App = () => {
  return (
    <div className="App">
      
     <Layout>
      <Routes>
     <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/login' element={<Login/>} />
          <Route path="/register" element={<UserRegistration/>} />
          <Route path="/appointmentbooking" element={<AppointmentBooking/>} />
          <Route path="/patientDashboard" element={<PatientDashboard/>} />
      </Routes>
       
     </Layout>
   </div>
  );
}

export default App;
