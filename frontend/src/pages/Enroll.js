import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";

const Enroll = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    age: "",
    consent: false, // ✅ Added consent field (Boolean)
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value, // ✅ Handle checkbox change
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/register",
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      alert(res.data.message); // ✅ Alert instead of toast
    } catch (err) {
      alert(err.response?.data?.message || "An error occurred"); // ✅ Show alert on error
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center">Enter Details</h2>
      <Form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-light">
        
        {/* Name Input */}
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control 
            type="text" 
            name="name" 
            placeholder="Enter your name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </Form.Group>

        {/* Email Input */}
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control 
            type="email" 
            name="email" 
            placeholder="Enter your email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </Form.Group>

        {/* Contact Number */}
        <Form.Group className="mb-3">
          <Form.Label>Contact Number</Form.Label>
          <Form.Control 
            type="number" 
            name="phone" 
            placeholder="Enter your number" 
            value={formData.phone} 
            onChange={handleChange} 
            required 
          />
        </Form.Group>

        {/* Address Input */}
        <Form.Group className="mb-3">
          <Form.Label>Address</Form.Label>
          <Form.Control 
            type="text" 
            name="address" 
            placeholder="Enter your Address" 
            value={formData.address} 
            onChange={handleChange} 
            required 
          />
        </Form.Group>

        {/* Age Input */}
        <Form.Group className="mb-3">
          <Form.Label>Age</Form.Label>
          <Form.Control 
            type="number" 
            name="age" 
            placeholder="Enter your Age" 
            value={formData.age} 
            onChange={handleChange} 
            required 
          />
        </Form.Group>

        {/* ✅ Consent Checkbox */}
        <Form.Group className="mb-3">
          <Form.Check 
            type="checkbox" 
            name="consent" 
            label="I agree to participate in the trial" 
            checked={formData.consent} 
            onChange={handleChange} 
            required
          />
        </Form.Group>

        {/* Submit Button */}
        <Button variant="primary" type="submit">
          Submit
        </Button>

      </Form>
    </Container>
  );
};

export default Enroll;
