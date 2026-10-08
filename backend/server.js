const express = require("express");
const cors = require("cors");

const patientRoutes = require("./routes/patientRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Clinic Appointment System API is running."
  });
});

app.use("/api/patients", patientRoutes);

app.use((req, res) => {
  res.status(404).json({
    message: "Route not found."
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});