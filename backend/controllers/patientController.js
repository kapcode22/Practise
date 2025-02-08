const PatientData = require("../models/patientSchema"); // Importing Patient Model

// ✅ 1. Create a new patient
const postPatientData = async (req, res) => {
  try {
    const patient = await PatientData.create(req.body);
    res.status(201).json({
      status: "success",
      message: "Patient data saved successfully",
      data: patient,
    });
  } catch (err) {
    console.error("Error in posting patient data:", err.message);
    res.status(500).json({
      status: "fail",
      message: "Internal Server Error",
    });
  }
};

// ✅ 2. Get all patients
const getAllPatients = async (req, res) => {
  try {
    const patients = await PatientData.find();
    res.status(200).json({
      status: "success",
      results: patients.length,
      data: patients,
    });
  } catch (err) {
    console.error("Error in fetching patients:", err.message);
    res.status(500).json({
      status: "fail",
      message: "Internal Server Error",
    });
  }
};

// ✅ 3. Get a single patient by ID
const getPatientById = async (req, res) => {
  try {
    const patient = await PatientData.findById(req.params.id);
    if (!patient) {
      return res.status(404).json({
        status: "fail",
        message: "Patient not found",
      });
    }
    res.status(200).json({
      status: "success",
      data: patient,
    });
  } catch (err) {
    console.error("Error in fetching patient by ID:", err.message);
    res.status(500).json({
      status: "fail",
      message: "Internal Server Error",
    });
  }
};

// ✅ 4. Update patient details
const updatePatient = async (req, res) => {
  try {
    const patient = await PatientData.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!patient) {
      return res.status(404).json({
        status: "fail",
        message: "Patient not found",
      });
    }

    res.status(200).json({
      status: "success",
      message: "Patient updated successfully",
      data: patient,
    });
  } catch (err) {
    console.error("Error in updating patient:", err.message);
    res.status(500).json({
      status: "fail",
      message: "Internal Server Error",
    });
  }
};

// ✅ 5. Delete a patient
const deletePatient = async (req, res) => {
  try {
    const patient = await PatientData.findByIdAndDelete(req.params.id);

    if (!patient) {
      return res.status(404).json({
        status: "fail",
        message: "Patient not found",
      });
    }

    res.status(200).json({
      status: "success",
      message: "Patient deleted successfully",
    });
  } catch (err) {
    console.error("Error in deleting patient:", err.message);
    res.status(500).json({
      status: "fail",
      message: "Internal Server Error",
    });
  }
};

// ✅ Export all functions
module.exports = {
  postPatientData,
  getAllPatients,
  getPatientById,
  updatePatient,
  deletePatient,
};
