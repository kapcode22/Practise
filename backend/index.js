const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Function to start the server and connect to the database
const startServer = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("Database Connected:", connect.connection.host, connect.connection.name);

        app.listen(port, () => {
            console.log(`Server is running at port: ${port}`);
        });
    } catch (err) {
        console.error("Database connection failed:", err);
        process.exit(1);
    }
};

// Call the function to start the server
startServer();
