const express = require("express");
const {
  createPatient,
  findPatientByEmail
} = require("../models/patientModel");

const router = express.Router();

router.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      message: "Name, email, and password are required."
    });
  }

  const existingPatient = findPatientByEmail(email);

  if (existingPatient) {
    return res.status(409).json({
      message: "Patient email already exists."
    });
  }

  const patient = createPatient({
    name,
    email,
    password
  });

  res.status(201).json({
    message: "Patient registered successfully.",
    patient: {
      id: patient.id,
      name: patient.name,
      email: patient.email
    }
  });
});

module.exports = router;