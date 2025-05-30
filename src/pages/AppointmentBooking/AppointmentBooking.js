import React from 'react'
import './AppointmentBooking.css' 
import { Navigate } from 'react-router-dom' 
const AppointmentBooking = ({ isAuthenticated }) => {
  if (!isAuthenticated) {
    // Redirect unauthenticated users to login page
    return <Navigate to="/login" replace />;
  }

  return (
      <div >
      <div className="container mt-5">
        <h2 className="mb-4">Book an Appointment</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label text-black">Full Name</label>
            <input type="text" className="form-control" id="name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label text-black">Email Address</label>
            <input type="email" className="form-control" id="email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="date" className="form-label text-black">Preferred Date</label>
            <input type="date" className="form-control" id="date" required />
          </div>
          <div className="mb-3">
            <label htmlFor="time" className="form-label text-black">Preferred Time</label>
            <input type="time" className="form-control" id="time" required />
          </div>
          <button type="submit" className="btn btn-primary">Book Appointment</button>
        </form>         
      </div>

      <div className="container  mt-5 p-5">
        <h2 className="mb-4 text-black">Appointment Confirmation</h2>
        <p className='text-black'>Your appointment has been successfully booked. We will send you a confirmation email shortly.</p>
      </div>
    </div>
  )
};

const AppointmentBookingPage = () => {
  const isAuthenticated = true; // Replace with actual authentication logic

  return (
    <AppointmentBooking isAuthenticated={isAuthenticated} />
  );
}
export default AppointmentBookingPage;
export { AppointmentBookingPage as AppointmentBooking };
