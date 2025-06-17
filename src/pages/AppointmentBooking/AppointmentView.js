// import React, { useEffect, useState } from "react";
// import {
//   Card, CardContent,CardHeader,Typography,Button,Chip,Box,Grid,Avatar,Divider,CircularProgress,Alert,} from "@mui/material";
// import {
//   CalendarToday,AccessTime,Email,LocationOn,Phone,Edit,Delete,EventAvailable,Schedule,People,} from "@mui/icons-material";
// import { format } from "date-fns";
// import { enqueueSnackbar } from "notistack";

// const AppointmentView = () => {
//   const [appointments, setAppointments] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const patientEmail = "john.doe@email.com";

//   useEffect(() => {
//     const fetchAppointments = async () => {
//       try {
//         const res = await fetch(
//           `http://localhost:3045/appointments?email=${encodeURIComponent(
//             patientEmail
//           )}`
//         );
//         if (!res.ok) throw new Error("Failed to fetch appointments");
//         const data = await res.json();
//         setAppointments(data);
//       } catch (err) {
//         setError(err.message || "Something went wrong");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAppointments();
//   }, []);

//   const handleCancelAppointment = async (id) => {
//     try {
//       await fetch(`http://localhost:3045/appointments/${id}`, {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ status: "cancelled" }),
//       });

//       setAppointments((prev) =>
//         prev.map((apt) =>
//           apt.id === id ? { ...apt, status: "cancelled" } : apt
//         )
//       );
//       enqueueSnackbar("Appointment cancelled successfully", {
//         variant: "success",
//       });
//     } catch (err) {
//       console.error("Cancel failed:", err);
//       enqueueSnackbar("Failed to cancel appointment", { variant: "error" });
//     }
//   };

//   const getStatusColor = (status) => {
//     switch (status) {
//       case "confirmed":
//         return "success";
//       case "pending":
//         return "warning";
//       case "cancelled":
//         return "error";
//       default:
//         return "default";
//     }
//   };

//   const sortedAppointments = [...appointments].sort(
//     (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
//   );

//   if (loading) {
//     return (
//       <Box
//         display="flex"
//         justifyContent="center"
//         alignItems="center"
//         minHeight="200px"
//       >
//         <CircularProgress />
//       </Box>
//     );
//   }

//   if (error) {
//     return (
//       <Box my={4}>
//         <Alert severity="error">{error}</Alert>
//       </Box>
//     );
//   }

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         background:
//           "linear-gradient(135deg, #eff6ff 0%, #ffffff 50%, #f3e8ff 100%)",
//         p: 2,
//       }}
//     >
//       <Box sx={{ maxWidth: 1200, mx: "auto", pt: 4 }}>
//         <Box sx={{ textAlign: "center", mb: 4 }}>
//           <Typography variant="h3" fontWeight="bold" gutterBottom>
//             My Appointments
//           </Typography>
//           <Typography variant="body1" color="text.secondary">
//             Manage and view your scheduled appointments
//           </Typography>
//         </Box>

//         {/* Summary Cards */}
//         <Grid container spacing={3} mb={4}>
//           <Grid item xs={12} md={4}>
//             <Card>
//               <CardContent>
//                 <Box
//                   display="flex"
//                   alignItems="center"
//                   justifyContent="space-between"
//                 >
//                   <Box>
//                     <Typography variant="body2" color="text.secondary">
//                       Total
//                     </Typography>
//                     <Typography variant="h4" fontWeight="bold">
//                       {appointments.length}
//                     </Typography>
//                   </Box>
//                   <Avatar sx={{ bgcolor: "primary.light" }}>
//                     <EventAvailable sx={{ color: "primary.main" }} />
//                   </Avatar>
//                 </Box>
//               </CardContent>
//             </Card>
//           </Grid>
//           <Grid item xs={12} md={4}>
//             <Card>
//               <CardContent>
//                 <Box
//                   display="flex"
//                   alignItems="center"
//                   justifyContent="space-between"
//                 >
//                   <Box>
//                     <Typography variant="body2" color="text.secondary">
//                       Confirmed
//                     </Typography>
//                     <Typography
//                       variant="h4"
//                       fontWeight="bold"
//                       color="success.main"
//                     >
//                       {
//                         appointments.filter((apt) => apt.status === "confirmed")
//                           .length
//                       }
//                     </Typography>
//                   </Box>
//                   <Avatar sx={{ bgcolor: "success.light" }}>
//                     <Schedule sx={{ color: "success.main" }} />
//                   </Avatar>
//                 </Box>
//               </CardContent>
//             </Card>
//           </Grid>
//           <Grid item xs={12} md={4}>
//             <Card>
//               <CardContent>
//                 <Box
//                   display="flex"
//                   alignItems="center"
//                   justifyContent="space-between"
//                 >
//                   <Box>
//                     <Typography variant="body2" color="text.secondary">
//                       Pending
//                     </Typography>
//                     <Typography
//                       variant="h4"
//                       fontWeight="bold"
//                       color="warning.main"
//                     >
//                       {
//                         appointments.filter((apt) => apt.status === "pending")
//                           .length
//                       }
//                     </Typography>
//                   </Box>
//                   <Avatar sx={{ bgcolor: "warning.light" }}>
//                     <People sx={{ color: "warning.main" }} />
//                   </Avatar>
//                 </Box>
//               </CardContent>
//             </Card>
//           </Grid>
//         </Grid>

//         {/* Appointment List */}
//         <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
//           {sortedAppointments.map((appointment) => (
//             <Card
//               key={appointment.id}
//               sx={{
//                 "&:hover": { boxShadow: 3 },
//                 transition: "box-shadow 0.3s",
//               }}
//             >
//               <CardHeader
//                 title={
//                   <Box
//                     display="flex"
//                     alignItems="center"
//                     justifyContent="space-between"
//                   >
//                     <Typography variant="h6">
//                       {appointment.patientName}
//                     </Typography>
//                     <Chip
//                       label={
//                         appointment.status.charAt(0).toUpperCase() +
//                         appointment.status.slice(1)
//                       }
//                       color={getStatusColor(appointment.status)}
//                     />
//                   </Box>
//                 }
//                 subheader={
//                   <Box display="flex" alignItems="center" gap={1}>
//                     <Email fontSize="small" />
//                     <Typography variant="body2">{appointment.email}</Typography>
//                   </Box>
//                 }
//               />

//               <CardContent>
//                 <Grid container spacing={2} mb={2}>
//                   <Grid item xs={12} sm={6} md={3}>
//                     <Box display="flex" alignItems="center" gap={1}>
//                       <CalendarToday fontSize="small" color="action" />
//                       <Typography variant="body2">
//                         {format(new Date(appointment.date), "MMM dd, yyyy")}
//                       </Typography>
//                     </Box>
//                   </Grid>
//                   <Grid item xs={12} sm={6} md={3}>
//                     <Box display="flex" alignItems="center" gap={1}>
//                       <AccessTime fontSize="small" color="action" />
//                       <Typography variant="body2">
//                         {appointment.time}
//                       </Typography>
//                     </Box>
//                   </Grid>
//                   <Grid item xs={12} sm={6} md={3}>
//                     <Box display="flex" alignItems="center" gap={1}>
//                       <LocationOn fontSize="small" color="action" />
//                       <Typography variant="body2">
//                         {appointment.department}
//                       </Typography>
//                     </Box>
//                   </Grid>
//                   <Grid item xs={12} sm={6} md={3}>
//                     <Box display="flex" alignItems="center" gap={1}>
//                       <Phone fontSize="small" color="action" />
//                       <Typography variant="body2">
//                         {appointment.phone}
//                       </Typography>
//                     </Box>
//                   </Grid>
//                 </Grid>

//                 <Divider sx={{ my: 2 }} />

//                 <Box
//                   display="flex"
//                   flexDirection={{ xs: "column", sm: "row" }}
//                   justifyContent="space-between"
//                   gap={2}
//                 >
//                   <Box>
//                     <Typography variant="body2">
//                       <strong>Doctor:</strong> {appointment.doctor}
//                     </Typography>
//                     <Typography variant="body2">
//                       <strong>Type:</strong> {appointment.type}
//                     </Typography>
//                     {appointment.notes && (
//                       <Typography variant="body2" mt={1}>
//                         <strong>Notes:</strong> {appointment.notes}
//                       </Typography>
//                     )}
//                   </Box>

//                   <Box display="flex" gap={1}>
//                     <Button
//                       variant="outlined"
//                       size="small"
//                       startIcon={<Edit />}
//                     >
//                       Edit
//                     </Button>
//                     <Button
//                       variant="outlined"
//                       size="small"
//                       color="error"
//                       startIcon={<Delete />}
//                       onClick={() => handleCancelAppointment(appointment.id)}
//                       disabled={appointment.status === "cancelled"}
//                     >
//                       Cancel
//                     </Button>
//                   </Box>
//                 </Box>
//               </CardContent>
//             </Card>
//           ))}
//         </Box>

//         {appointments.length === 0 && !loading && (
//           <Card sx={{ textAlign: "center", py: 6, mt: 4 }}>
//             <CardContent>
//               <CalendarToday
//                 sx={{ fontSize: 48, color: "text.disabled", mb: 2 }}
//               />
//               <Typography variant="h5" gutterBottom>
//                 No appointments found
//               </Typography>
//               <Typography variant="body1" color="text.secondary" mb={3}>
//                 You don't have any appointments scheduled yet.
//               </Typography>
//               <Button variant="contained">Book Your First Appointment</Button>
//             </CardContent>
//           </Card>
//         )}
//       </Box>
//     </Box>
//   );
// };

// export default AppointmentView;
