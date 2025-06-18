import React, { useEffect, useState } from "react";
import {
  Card, CardContent, CardHeader, Typography, Button, Chip,
  Box, Grid, Avatar, Divider, CircularProgress, Alert
} from "@mui/material";
import {
  CalendarToday, AccessTime, Email, LocationOn,
  Phone, Edit, Delete, EventAvailable, Schedule, People
} from "@mui/icons-material";
import { format } from "date-fns";

const AppointmentView = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const patientEmail = "john.doe@email.com";

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await fetch(
          `http://localhost:3045/api/auth/appointments?email=${encodeURIComponent(patientEmail)}`
        );
        if (!res.ok) throw new Error("Failed to fetch appointments");
        const data = await res.json();
        setAppointments(data);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    fetchAppointments();
  }, []);

  const handleCancelAppointment = async (id) => {
    try {
      await fetch(`http://localhost:3045/auth/appointments/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "cancelled" }),
      });

      setAppointments((prev) =>
        prev.map((apt) =>
          apt.id === id ? { ...apt, status: "cancelled" } : apt
        )
      );

      window.alert("Appointment cancelled successfully");
    } catch (err) {
      console.error("Cancel failed:", err);
      window.alert("Failed to cancel appointment");
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "confirmed":
        return "success";
      case "pending":
        return "warning";
      case "cancelled":
        return "error";
      default:
        return "default";
    }
  };

  const sortedAppointments = [...appointments].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box my={4}>
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  return (
    <Box sx={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #eff6ff 0%, #ffffff 50%, #f3e8ff 100%)",
      p: 2,
    }}>
      <Box sx={{ maxWidth: 1200, mx: "auto", pt: 4 }}>
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            My Appointments
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Manage and view your scheduled appointments
          </Typography>
        </Box>

        {/* Summary Cards */}
        <Grid container spacing={3} mb={4}>
          {[
            { label: "Total", value: appointments.length, icon: <EventAvailable />, color: "primary" },
            {
              label: "Confirmed",
              value: appointments.filter((a) => a.status === "confirmed").length,
              icon: <Schedule />, color: "success"
            },
            {
              label: "Pending",
              value: appointments.filter((a) => a.status === "pending").length,
              icon: <People />, color: "warning"
            },
          ].map((card, idx) => (
            <Grid item xs={12} md={4} key={idx}>
              <Card>
                <CardContent>
                  <Box display="flex" justifyContent="space-between">
                    <Box>
                      <Typography variant="body2" color="text.secondary">{card.label}</Typography>
                      <Typography variant="h4" fontWeight="bold" color={`${card.color}.main`}>
                        {card.value}
                      </Typography>
                    </Box>
                    <Avatar sx={{ bgcolor: `${card.color}.light` }}>
                      {React.cloneElement(card.icon, { sx: { color: `${card.color}.main` } })}
                    </Avatar>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Appointment Cards */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {sortedAppointments.map((apt) => (
            <Card key={apt.id} sx={{ transition: "0.3s", "&:hover": { boxShadow: 3 } }}>
              <CardHeader
                title={
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="h6">{apt.patientName}</Typography>
                    <Chip label={apt.status.charAt(0).toUpperCase() + apt.status.slice(1)} color={getStatusColor(apt.status)} />
                  </Box>
                }
                subheader={
                  <Box display="flex" alignItems="center" gap={1}>
                    <Email fontSize="small" />
                    <Typography variant="body2">{apt.email}</Typography>
                  </Box>
                }
              />
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6} md={3}>
                    <Box display="flex" alignItems="center" gap={1}>
                      <CalendarToday fontSize="small" />
                      <Typography variant="body2">
                        {format(new Date(apt.date), "MMM dd, yyyy")}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <Box display="flex" alignItems="center" gap={1}>
                      <AccessTime fontSize="small" />
                      <Typography variant="body2">{apt.time}</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <Box display="flex" alignItems="center" gap={1}>
                      <LocationOn fontSize="small" />
                      <Typography variant="body2">{apt.department}</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} md={3}>
                    <Box display="flex" alignItems="center" gap={1}>
                      <Phone fontSize="small" />
                      <Typography variant="body2">{apt.phone}</Typography>
                    </Box>
                  </Grid>
                </Grid>

                <Divider sx={{ my: 2 }} />

                <Box display="flex" flexDirection={{ xs: "column", sm: "row" }} justifyContent="space-between" gap={2}>
                  <Box>
                    <Typography variant="body2"><strong>Doctor:</strong> {apt.doctor}</Typography>
                    <Typography variant="body2"><strong>Type:</strong> {apt.type}</Typography>
                    {apt.notes && (
                      <Typography variant="body2" mt={1}><strong>Notes:</strong> {apt.notes}</Typography>
                    )}
                  </Box>
                  <Box display="flex" gap={1}>
                    <Button variant="outlined" size="small" startIcon={<Edit />}>
                      Edit
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      color="error"
                      startIcon={<Delete />}
                      onClick={() => handleCancelAppointment(apt.id)}
                      disabled={apt.status === "cancelled"}
                    >
                      Cancel
                    </Button>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>

        {appointments.length === 0 && !loading && (
          <Card sx={{ textAlign: "center", py: 6, mt: 4 }}>
            <CardContent>
              <CalendarToday sx={{ fontSize: 48, color: "text.disabled", mb: 2 }} />
              <Typography variant="h5" gutterBottom>No appointments found</Typography>
              <Typography variant="body1" color="text.secondary" mb={3}>
                You don't have any appointments scheduled yet.
              </Typography>
              <Button variant="contained">Book Your First Appointment</Button>
            </CardContent>
          </Card>
        )}
      </Box>
    </Box>
  );
};

export default AppointmentView;
