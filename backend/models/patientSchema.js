const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter patient name"],
  },
  email: {
    type: String,
    required: [true, "Please enter patient email"],
    unique: true,
  },
  phone: {
    type: String,
    required: [true, "Please enter patient contact number"],
  },
  address: {
    type: String,
    required: [true, "Please enter patient address"],
  },
  age: {
    type: String,
    required: [true, "Please enter patient age"],
  },
  consent: {
    type: Boolean,
    required: [true, "Consent is required"],
  },
});

const PatientData = mongoose.model("Patient", patientSchema);

module.exports = PatientData; // Correct CommonJS export
