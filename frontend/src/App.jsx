import RegisterForm from "./pages/patient/RegisterForm";
import LoginForm from "./pages/patient/LoginForm";
import BookAppointmentForm from "./pages/patient/BookAppointmentForm";

function App() {
  return (
    <>
      <RegisterForm />
      <LoginForm />
      {/* TEMPORARY patientId for testing. Real value comes after login integration. */}
      <BookAppointmentForm patientId="test-patient-1" />
    </>
  );
}

export default App;