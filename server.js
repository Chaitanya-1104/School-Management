require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(bodyParser.json());
app.use(cors());

// Database connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect(err => {
    if (err) {
        console.error("Database connection failed:", err);
    } else {
        console.log("Connected to MySQL");
    }
});

app.get("/", (req, res) => {
    res.send("School Management API is running!");
  });
// Add School API
app.post("/addSchool", (req, res) => {
     console.log("in add schooll endpoint");
    const { name, address, latitude, longitude } = req.body;

    if (!name || !address || latitude == null || longitude == null) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const query = "INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)";
    db.query(query, [name, address, latitude, longitude], (err, result) => {
        if (err) {
            return res.status(500).json({ message: "Database error", error: err });
        }
        res.status(201).json({ message: "School added successfully", schoolId: result.insertId });
    });
});

// List Schools API
app.get("/listSchools", (req, res) => {

    const { latitude, longitude } = req.query;

    if (!latitude || !longitude) {
        return res.status(400).json({ message: "Latitude and longitude are required" });
    }

    const query = "SELECT * FROM schools";
    db.query(query, (err, schools) => {
        if (err) {
            return res.status(500).json({ message: "Database error", error: err });
        }

        const userLat = parseFloat(latitude);
        const userLon = parseFloat(longitude);

        // Function to calculate distance (Haversine formula)
        const calculateDistance = (lat1, lon1, lat2, lon2) => {
            const toRad = angle => (Math.PI / 180) * angle;
            const R = 6371; // Earth's radius in km
            const dLat = toRad(lat2 - lat1);
            const dLon = toRad(lon2 - lon1);
            const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
                      Math.sin(dLon / 2) * Math.sin(dLon / 2);
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            return R * c;
        };

        // Sort schools by distance
        schools.forEach(school => {
            school.distance = calculateDistance(userLat, userLon, school.latitude, school.longitude);
        });

        schools.sort((a, b) => a.distance - b.distance);

        res.json({ schools });
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
//module.exports = app;