let patients = [];
let nextId = 1;

function createPatient({ name, email, password }) {
  const patient = {
    id: nextId++,
    name,
    email,
    password
  };

  patients.push(patient);

  return patient;
}

function getAllPatients() {
  return patients;
}

function findPatientByEmail(email) {
  return patients.find((patient) => patient.email === email);
}

function findPatientById(id) {
  return patients.find((patient) => patient.id === Number(id));
}

module.exports = {
  createPatient,
  getAllPatients,
  findPatientByEmail,
  findPatientById
};