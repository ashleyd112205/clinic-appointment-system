const express = require("express");

const {
  getAllDoctors
} = require("../models/doctorModel");

const router = express.Router();

router.get("/", (req, res) => {
  const doctors = getAllDoctors();

  res.status(200).json({
    message: "Doctors retrieved successfully.",
    doctors
  });
});

module.exports = router;