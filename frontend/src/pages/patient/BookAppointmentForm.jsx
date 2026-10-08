import { useState } from "react";
import "./BookAppointmentForm.css";

// TEMPORARY placeholder data. Will be replaced by GET /api/doctors.
const placeholderDoctors = [
  { doctorId: "1", name: "Dr. Maria Santos", specialization: "General Medicine" },
  { doctorId: "2", name: "Dr. Juan Reyes", specialization: "Pediatrics" },
  { doctorId: "3", name: "Dr. Ana Cruz", specialization: "Dermatology" },
];

function BookAppointmentForm({ patientId }) {
  const [doctorId, setDoctorId] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // stop the browser from reloading the page

    // The date/time input gives "2026-10-08T10:30" (no seconds).
    // The contract format is ISO 8601 like "2026-10-08T10:30:00", so add seconds.
    const appointmentDateTime = dateTime.length === 16 ? `${dateTime}:00` : dateTime;

    // Exactly the fields the contract expects for POST /api/appointments
    const requestBody = { patientId, doctorId, appointmentDateTime };

    // No API call yet. For now we only log the data.
    console.log("Book appointment request body:", requestBody);
    setMessage("Form submitted. Check the browser console.");
  };

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <h2>Book Appointment</h2>

      <label htmlFor="book-doctor">Doctor</label>
      <select
        id="book-doctor"
        value={doctorId}
        onChange={(e) => setDoctorId(e.target.value)}
        required
      >
        <option value="">-- Select a doctor --</option>
        {placeholderDoctors.map((doctor) => (
          <option key={doctor.doctorId} value={doctor.doctorId}>
            {doctor.name} ({doctor.specialization})
          </option>
        ))}
      </select>

      <label htmlFor="book-datetime">Date and Time</label>
      <input
        id="book-datetime"
        type="datetime-local"
        value={dateTime}
        onChange={(e) => setDateTime(e.target.value)}
        required
      />

      <button type="submit">Book</button>

      {message && <p className="book-message">{message}</p>}
    </form>
  );
}

export default BookAppointmentForm;