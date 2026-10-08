import "./AppointmentsTable.css";

function AppointmentsTable({ appointments }) {
  return (
    <div className="appointments-container">
      <h2>My Appointments</h2>

      {appointments.length === 0 ? (
        <p>No appointments found.</p>
      ) : (
        <table className="appointments-table">
          <thead>
            <tr>
              <th>Appointment ID</th>
              <th>Doctor ID</th>
              <th>Date and Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.appointmentId}>
                <td>{appointment.appointmentId}</td>
                <td>{appointment.doctorId}</td>
                <td>
                  {new Date(appointment.appointmentDateTime).toLocaleString()}
                </td>
                <td className={`status-${appointment.status}`}>
                  {appointment.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AppointmentsTable;