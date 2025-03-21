## School Management API 🏫

### Overview

The School Management API allows users to add schools, list schools, and retrieve schools sorted by distance based on latitude and longitude. It is built with Node.js, Express, and MySQL and deployed on Railway.

🌐 Live API URL

📌 Base URL: 
https://school-management-production-efe5.up.railway.app/

📌 Features

✅ Add a new school <br>
✅ List all schools sorted by distance <br>
✅ Simple health check endpoint<br>

📖 API Endpoints

1️⃣ Health Check ✅

Endpoint: `GET /`

Description: Checks if the API is running.

Response:
```
{
  "message": "School Management API is running!"
} 
```
2️⃣ Add a School 🏫

Endpoint: `POST /addSchool`

Description: Adds a new school to the database.

Request Body (JSON):
```
{
    "name": "Bengal Veda Gurukul", 
    "address": "kolkata",
    "latitude": 85.90,
    "longitude": 75.70
}
```
Response:
```
{
    "message": "School added successfully",
    "schoolId": 3
}
```

3️⃣ List Schools (Sorted by Distance) 📍

Endpoint: `GET /listSchools?latitude={user_lat}&longitude={user_lon}`

Description: Fetches all schools sorted by distance from the user’s location.

Example Request:
`GET /listSchools?latitude=85.0&longitude=45.0`
Response:
```
{
    "schools": [
        {
            "id": 2,
            "name": "Valmiki Veda Gurukul",
            "address": "kaasi",
            "latitude": 55.9,
            "longitude": "65.7",
            "distance": 2493.7383192051034
        },
        {
            "id": 1,
            "name": "Aryabhatta Veda Gurukul",
            "address": "Patna",
            "latitude": 85.9,
            "longitude": "45.7",
            "distance": 5821.577261002246
        }
    ]
}
```

🛠️ Tech Stack

Backend: Node.js, Express.js

Database: MySQL (hosted on Railway)

Hosting: Railway

🚀 Getting Started

🔹 Prerequisites

Node.js installed

MySQL Database

🔹 Installation

1.Clone the repository <br>

2.Install dependencies <br>

3.Set up .env file: <br>

Run the server: node server.js

or

API is now running on: http://localhost:3000 🎉
