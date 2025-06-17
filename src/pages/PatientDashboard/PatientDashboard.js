import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {
  Calendar as CalendarIcon,
  Clock,
  Users,
  CheckCircle,
} from "lucide-react";

const PatientDashboard = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleBookAppointment = () => {
    navigate("/appointmentbooking");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
     <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <CalendarIcon className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">MediConnect</span>
            </div>
            <div className="flex space-x-4">
              <Link to="/appointmentbooking">
                <button className="btn btn-outline-primary">Book Appointment</button>
              </Link>
              <Link to="/appointments">
                <button className="btn btn-primary">View Appointments</button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Welcome to Your <span className="text-blue-600">Patient Dashboard</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Manage your appointments, view medical records, and stay connected with your healthcare team.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="btn btn-primary d-flex align-items-center justify-center gap-2 px-4 py-3"
            onClick={handleBookAppointment}
          >
            Book Appointment <CalendarIcon className="ml-2 h-5 w-5" />
          </button>
          <Link to="/appointments">
            <button className="btn btn-outline-secondary d-flex align-items-center justify-center gap-2 px-4 py-3">
              View Appointments <Clock className="ml-2 h-5 w-5" />
            </button>
          </Link>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <CalendarIcon className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy Scheduling</h3>
          <p className="text-gray-600">Book your appointments in just a few clicks.</p>
        </div>
        <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
          <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Clock className="h-8 w-8 text-purple-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Flexible Times</h3>
          <p className="text-gray-600">Choose time slots that suit your availability.</p>
        </div>
        <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Instant Confirmation</h3>
          <p className="text-gray-600">Get notified immediately about your appointment status.</p>
        </div>
      </section>

      {/* Dashboard Card and Calendar */}
      <section className="container mx-auto text-black px-4 pb-16">
        <div className="row justify-content-center mb-5">
          <div className="col-md-8">
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">Upcoming Appointments</h5>
                <p className="card-text">You have no upcoming appointments.</p>
              </div>
              <div className="card-footer text-muted">
                <small>Last updated just now</small>
                <div className="btn-group d-flex justify-content-between mt-3">
                  <button className="btn btn-primary" onClick={handleBookAppointment}>
                    Book Appointment
                  </button>
                  <Link to="/appointments" className="btn btn-secondary">View All</Link>
                  <button className="btn btn-success">Manage</button>
                  <button className="btn btn-danger">Cancel</button>
                  <button className="btn btn-info">Reschedule</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Calendar Section */}
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h5>Select Appointment Date</h5>
            <Calendar
              onChange={setSelectedDate}
              value={selectedDate}
              minDate={new Date()}
            />
            <p className="mt-3">Selected: {selectedDate.toDateString()}</p>
            <p className="text-black mt-4">For assistance, contact our support team.</p>
            <button className="btn btn-secondary" onClick={() => navigate("/contact")}>
              Contact Support
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PatientDashboard;
