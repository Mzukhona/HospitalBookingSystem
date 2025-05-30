import React,{ useState }  from "react";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const PatientDashboard = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleBookAppointment = () => {
    navigate("/appointmentbooking"); // Navigate to the appointment booking page
  };
  return (
    <div className="container text-black mt-5 mb-3">
      <div className="row justify-content-center">
        <div className="text-black col-md-8">
          <h2 className="text-center text-black mb-4">Patient Dashboard</h2>
          <p className="text-black">
            Welcome to your dashboard! Here you can manage your appointments,
            view medical records, and more.
          </p>
          <div className="card mb-3 mt-1">
            <div className="card-body">
              <h5 className="card-title">Upcoming Appointments</h5>
              <p className="card-text">You have no upcoming appointments.</p>
            </div>
            <div className="card-footer text-muted ">
              <small className="text-black mb-3">Last updated just now</small>
              <div
                className="btn-group d-flex justify-content-between align-items-center"
                role="group"
                aria-label="Basic example"
              >
                <button
                  className="btn btn-primary float-end me-2"
                  onClick={handleBookAppointment}
                >
                  Book Appointment
                </button>
                <button className="btn btn-secondary float-end me-2">
                  View All Appointments
                </button>
                <button className="btn btn-success float-end me-2">
                  Manage Appointments
                </button>
                <button className="btn btn-danger float-end me-2">
                  Cancel Appointment
                </button>
                <button className="btn btn-info float-end me-2">
                  Reschedule Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <p>View available appointment </p>
          <div className="text-center">
            <h5>Select Appointment Date</h5>
            <Calendar
              onChange={setSelectedDate}
              value={selectedDate}
              minDate={new Date()}
            />
            <p className="mt-3">Selected: {selectedDate.toDateString()}</p>
          </div>
          <p className="text-black">
            For any assistance, please contact our support team.
          </p>
          <button
            className="btn btn-secondary"
            onClick={() => navigate("/contact")}
          >
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
