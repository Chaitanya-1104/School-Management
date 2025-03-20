# **School Management API** 🏫  

## **🚀 Overview**  
The **School Management API** allows users to **add schools**, **list schools**, and **retrieve schools sorted by distance** based on latitude and longitude. It is built with **Node.js, Express, and MySQL** and deployed on **Railway**.  

<br>

## **🌐 Live API URL**  
📌 **Base URL:**  
https://school-management-production-efe5.up.railway.app/


<br>

## **📌 Features**  
✅ Add a new school  
✅ List all schools sorted by distance  
✅ Simple health check endpoint  

<br>

## **📖 API Endpoints**  

### **1️⃣ Health Check ✅**  
- **Endpoint:** `GET /`  
- **Description:** Checks if the API is running.  
- **Response:**  
  ```json
  {
    "message": "School Management API is running!"
  }

<br>
### **2️⃣ Add a School 🏫**  
- **Endpoint:** `POST /addSchool`  
- **Description:** Adds a new school to the database. 
- **Request:** 
  ```json
  {
    "name": "Aryabhatta Veda Gurukul",
    "address": "Patna",
    "latitude": 85.9,
    "longitude": 45.7
  }
- **Response:**  
  ```json
  {
    "message": "School added successfully",
    "schoolId": 1
  }

  <br>

### **3️⃣ List Schools (Sorted by Distance) 📍**
- **Endpoint:** `GET /listSchools?latitude={user_lat}&longitude={user_lon}`
- **Description:** Fetches all schools sorted by distance from the user’s location.
- **Example Request:**
GET /listSchools?latitude=85.0&longitude=45.0
- **Response:**
  ```json
{
  "schools": [
    {
      "id": 1,
      "name": "Aryabhatta Veda Gurukul",
      "address": "Patna",
      "latitude": 85.9,
      "longitude": 45.7,
      "distance": 10.5
    }
  ]
}
<br>
