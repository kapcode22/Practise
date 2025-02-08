const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const patientRouter = require('./Routes/patientdataRouter');  // Ensure path is correct
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // Middleware to parse JSON bodies
app.use(cors({
    origin: 'http://localhost:3000', // Allow requests from React frontend
    methods: ['GET', 'POST', 'DELETE', 'PUT'], // Define allowed methods
    credentials: true, // Allow credentials (cookies, headers, etc.)
}));

// Use the patient router for the API routes
app.use("/api", patientRouter);

// Function to start the server and connect to the database
const startServer = async () => {
    try {
        // MongoDB connection options with environment variables
        const connect = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
             // Avoid deprecation warning
        });

        console.log("Database Connected:", connect.connection.host, connect.connection.name);

        // Start the server after successful database connection
        app.listen(port, () => {
            console.log(`Server is running at port: ${port}`);
        });
    } catch (err) {
        console.error("Database connection failed:", err);
        process.exit(1); // Exit if connection fails
    }
};

// Call the function to start the server
startServer();
