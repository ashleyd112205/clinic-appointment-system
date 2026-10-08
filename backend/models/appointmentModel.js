let appointments = [];
let nextId = 1;

function createAppointment({
  patientId,
  doctorId,
  appointmentDate,
  reason = ""
}) {
  const appointment = {
    id: nextId++,
    patientId: Number(patientId),
    doctorId: Number(doctorId),
    appointmentDate,
    reason,
    status: "scheduled"
  };

  appointments.push(appointment);

  return appointment;
}

function getAppointmentsByPatientId(patientId) {
  return appointments.filter(
    (appointment) => appointment.patientId === Number(patientId)
  );
}

function findAppointmentById(id) {
  return appointments.find((appointment) => appointment.id === Number(id));
}

function cancelAppointment(id) {
  const appointment = findAppointmentById(id);

  if (!appointment) {
    return undefined;
  }

  appointment.status = "cancelled";

  return appointment;
}

module.exports = {
  createAppointment,
  getAppointmentsByPatientId,
  findAppointmentById,
  cancelAppointment
};
