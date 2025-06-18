import React, { useState } from 'react';
import {
  Button,
  TextField,
  InputLabel,
  Card,
  CardHeader,
  CardContent,
  Typography,
  Select,
  MenuItem,
  Box,
  TextareaAutosize
} from '@mui/material';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import { CalendarToday, AccessTime, Person } from '@mui/icons-material';
import "./AppointmentBooking.css"
// import { enqueueSnackbar } from 'notistack';

const AppointmentBooking = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    department: '',
    doctor: '',
    appointmentType: '',
    notes: ''
  });
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const departments = [
    'General Medicine', 'Cardiology', 'Dermatology',
    'Pediatrics', 'Orthopedics', 'Neurology'
  ];

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM'
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

   const handleSubmit = async (e) => {
    // e.preventDefault();
    // setIsLoading(true);
    // setError("");

    // try {
    //   console.log("Sending registration request:", formData);
      
    //   const response = await fetch("http://localhost:3045/api/auth/register", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(formData)
    //   });
      
    //   console.log("Response status:", response.status);
      
    //   if (!response.ok) {
    //     const errorData = await response.text();
    //     console.error("Server error:", errorData);
    //     throw new Error(errorData || `HTTP error! status: ${response.status}`);
    //   }
      
    //   const data = await response.json();
    //   console.log("Registration response:", data);
      
    //   // Check different possible response structures
    //   const jwt = data.jwt || data.token || data.accessToken || data;
      
    //   if (!jwt) {
    //     console.error("No JWT token found in response:", data);
    //     // If no JWT token, we can still proceed to step 2 without it
    //     // The patient registration might work with a different auth mechanism
    //   }
      
    //   // Store token for subsequent requests if available
    //   if (jwt && typeof jwt === 'string') {
    //     localStorage.setItem('token', jwt);
    //   }
      
    //   // Try to decode JWT to get user ID (optional)
    //   let userId = null;
    //   if (jwt && typeof jwt === 'string' && jwt.includes('.')) {
    //     try {
    //       const base64Url = jwt.split('.')[1];
    //       const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    //       const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
    //         return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    //       }).join(''));
          
    //       const tokenData = JSON.parse(jsonPayload);
    //       console.log("Decoded JWT:", tokenData);
    //       userId = tokenData.sub || tokenData.userId || tokenData.id;
    //     } catch (jwtError) {
    //       console.warn("Could not decode JWT:", jwtError);
    //       // If JWT decoding fails, we can still proceed without userId
    //     }
    //   }
      
    //   onUserRegistered({ 
    //     userId, 
    //     jwt, 
    //     userInfo: {
    //       email: formData.email,
    //       firstName: formData.firstName,
    //       lastName: formData.lastName,
    //       phoneNumber: formData.phoneNumber
    //     }
    //   });
    // } catch (error) {
    //   console.error("Registration error:", error);
      
    //   // Handle different types of errors
    //   if (error.name === 'TypeError' && error.message.includes('fetch')) {
    //     setError("Unable to connect to server. Please check if the backend is running on http://localhost:3045");
    //   } else if (error.message.includes('CORS')) {
    //     setError("CORS error: Server needs to allow requests from this origin");
    //   } else {
    //     setError(error.message || "Registration failed. Please try again.");
    //   }
    // } finally {
    //   setIsLoading(false);
    // }
  };
  if (isSubmitted) {
    return (
      <Box sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f0fdf4 0%, #ffffff 50%, #eff6ff 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2
      }}>
        <Card sx={{ width: '100%', maxWidth: 500 }}>
          <CardHeader
            title={
              <Box sx={{ textAlign: 'center' }}>
                <Box sx={{
                  width: 64,
                  height: 64,
                  bgcolor: 'success.light',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 'auto',
                  mb: 2
                }}>
                  <AccessTime sx={{ fontSize: 32, color: 'success.main' }} />
                </Box>
                <Typography variant="h5" color="success.main">
                  Appointment Confirmed!
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Your appointment has been successfully booked
                </Typography>
              </Box>
            }
          />
          <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Box sx={{ bgcolor: 'grey.50', p: 3, borderRadius: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography><strong>Patient:</strong> {formData.fullName}</Typography>
              <Typography><strong>Date:</strong> {selectedDate ? format(selectedDate, 'PPP') : ''}</Typography>
              <Typography><strong>Time:</strong> {selectedTime}</Typography>
              <Typography><strong>Department:</strong> {formData.department}</Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" textAlign="center">
              A confirmation email has been sent to {formData.email}
            </Typography>
            <Button
              variant="contained"
              fullWidth
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  fullName: '', email: '', phone: '', department: '',
                  doctor: '', appointmentType: '', notes: ''
                });
                setSelectedDate(null);
                setSelectedTime('');
              }}
            >
              Book Another Appointment
            </Button>
          </CardContent>
        </Card>
      </Box>
    );
  }

  return (
    <Box sx={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #eff6ff 0%, #ffffff 50%, #f3e8ff 100%)',
      p: 2
    }}>
      <Box sx={{ maxWidth: 1200, mx: 'auto', pt: 4 }}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Book Your Appointment
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Fill in the details below to schedule your visit
          </Typography>
        </Box>

        <Card sx={{ width: '100%' }}>
          <CardHeader
            title={
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Person />
                <Typography variant="h6">Appointment Details</Typography>
              </Box>
            }
            subheader="Please provide your information and preferred appointment time"
          />
          <CardContent>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <InputLabel htmlFor="fullName">Full Name *</InputLabel>
                  <TextField
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    placeholder="Enter your full name"
                    required
                    fullWidth
                  />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <InputLabel htmlFor="email">Email Address *</InputLabel>
                  <TextField
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="Enter your email"
                    required
                    fullWidth
                  />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <InputLabel htmlFor="phone">Phone Number</InputLabel>
                  <TextField
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="Enter your phone number"
                    fullWidth
                  />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <InputLabel htmlFor="department">Department *</InputLabel>
                  <Select
                    value={formData.department}
                    onChange={(e) => handleInputChange('department', e.target.value)}
                    displayEmpty
                    fullWidth
                  >
                    <MenuItem value="" disabled>Select department</MenuItem>
                    {departments.map((dept) => (
                      <MenuItem key={dept} value={dept}>{dept}</MenuItem>
                    ))}
                  </Select>
                </Box>
              </Box>

              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <InputLabel>Preferred Date *</InputLabel>
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    minDate={new Date()}
                    filterDate={(date) => date.getDay() !== 0}
                    placeholderText="Select a date"
                    customInput={
                      <TextField
                        fullWidth
                        InputProps={{
                          startAdornment: <CalendarToday sx={{ mr: 1 }} />
                        }}
                      />
                    }
                  />
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <InputLabel>Preferred Time *</InputLabel>
                  <Select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    displayEmpty
                    fullWidth
                  >
                    <MenuItem value="" disabled>Select time</MenuItem>
                    {timeSlots.map((time) => (
                      <MenuItem key={time} value={time}>{time}</MenuItem>
                    ))}
                  </Select>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <InputLabel>Appointment Type</InputLabel>
                <Select
                  value={formData.appointmentType}
                  onChange={(e) => handleInputChange('appointmentType', e.target.value)}
                  displayEmpty
                  fullWidth
                >
                  <MenuItem value="" disabled>Select appointment type</MenuItem>
                  <MenuItem value="consultation">Consultation</MenuItem>
                  <MenuItem value="follow-up">Follow-up</MenuItem>
                  <MenuItem value="check-up">Regular Check-up</MenuItem>
                  <MenuItem value="emergency">Emergency</MenuItem>
                </Select>
              </Box>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <InputLabel>Additional Notes</InputLabel>
                <TextareaAutosize
                  minRows={3}
                  value={formData.notes}
                  onChange={(e) => handleInputChange('notes', e.target.value)}
                  placeholder="Any specific concerns or requirements..."
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    fontFamily: 'inherit',
                    fontSize: 'inherit',
                    resize: 'vertical'
                  }}
                />
              </Box>

              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                sx={{ py: 2 }}
                startIcon={<CalendarToday />}
              >
                Book Appointment
              </Button>
            </form>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default AppointmentBooking;
