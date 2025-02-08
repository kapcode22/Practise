const express = require("express");
const {
  postPatientData,
  getAllPatients,
  getPatientById,
  updatePatient,
  deletePatient,
} = require("../controllers/patientController"); // Importing controller functions

const router = express.Router();

// ✅ 1. Create a new patient
router.post("/register", postPatientData);

// ✅ 2. Get all patients
router.get("/patients", getAllPatients);

// ✅ 3. Get a single patient by ID
router.get("/patients/:id", getPatientById);

// ✅ 4. Update patient details
router.put("/patients/:id", updatePatient);

// ✅ 5. Delete a patient
router.delete("/patients/:id", deletePatient);

module.exports = router; // Export the router
