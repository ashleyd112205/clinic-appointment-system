import RegisterForm from "./pages/patient/RegisterForm";
import LoginForm from "./pages/patient/LoginForm";
import BookAppointmentForm from "./pages/patient/BookAppointmentForm";
import AppointmentsTable from "./pages/patient/AppointmentsTable";

// TEMPORARY placeholder data. Will be replaced by
// GET /api/appointments/patient/:patientId
const placeholderAppointments = [
  {
    appointmentId: "1",
    patientId: "test-patient-1",
    doctorId: "1",
    appointmentDateTime: "2026-10-08T10:30:00",
    status: "booked",
  },
  {
    appointmentId: "2",
    patientId: "test-patient-1",
    doctorId: "3",
    appointmentDateTime: "2026-10-15T14:00:00",
    status: "cancelled",
  },
];

function App() {
  return (
    <>
      <RegisterForm />
      <LoginForm />
      {/* TEMPORARY patientId for testing. Real value comes after login integration. */}
      <BookAppointmentForm patientId="test-patient-1" />
      <AppointmentsTable appointments={placeholderAppointments} />
    </>
  );
}

export default App;