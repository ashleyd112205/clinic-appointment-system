let doctors = [];

let nextId = 1;

function createDoctor({ name, specialization, email }) {
  const doctor = {
    id: nextId++,
    name,
    specialization,
    email
  };

  doctors.push(doctor);

  return doctor;
}

function getAllDoctors() {
  return doctors;
}

function findDoctorByEmail(email) {
  return doctors.find((doctor) => doctor.email === email);
}

function findDoctorById(id) {
  return doctors.find((doctor) => doctor.id === Number(id));
}

module.exports = {
  createDoctor,
  getAllDoctors,
  findDoctorByEmail,
  findDoctorById
};