# Student & Course Management System

A full-stack **Student and Course Management System** built using **React**, **Node.js**, **Express**, and **MySQL**, implementing **role-based authentication** and **secure CRUD operations**.

This project was developed as part of a backend assessment to demonstrate database design, REST API development, authentication, and frontend integration.

---

## 🚀 Features

### 🔐 Authentication & Authorization
- JWT-based login system
- Role-based access control:
  - **Admin**: Full access
  - **Student**: View-only access to own data

---

### 👨‍💼 Admin Capabilities
- Add and manage courses
- Register students with course assignment
- View all students with course details
- Update a student’s enrolled course
- Delete students

---

### 👨‍🎓 Student Capabilities
- Secure login
- View own profile details
- View enrolled course information
- Cannot access other students’ data

---

## 🧱 Tech Stack

### Frontend
- React
- React Router
- Axios
- CSS

### Backend
- Node.js
- Express.js
- JWT Authentication
- Bcrypt (Password Hashing)

### Database
- MySQL

---

## 🗂️ Project Structure

student-course-management/
┣ backend/
┃ ┣ controllers/
┃ ┣ routes/
┃ ┣ middleware/
┃ ┣ db.js
┃ ┗ server.js
┣ frontend/
┃ ┣ src/
┃ ┃ ┣ pages/
┃ ┃ ┣ services/
┃ ┃ ┗ App.js
┣ README.md

pgsql
Copy code

---

## 🗄️ Database Schema

### Courses Table
| Field | Type | Description |
|------|-----|-------------|
| course_id | INT (PK) | Unique course ID |
| course_name | VARCHAR | Course name |
| course_code | VARCHAR (UNIQUE) | Course code |
| course_duration | INT | Duration (months) |

### Students Table
| Field | Type | Description |
|------|-----|-------------|
| student_id | INT (PK) | Unique student ID |
| name | VARCHAR | Student name |
| email | VARCHAR (UNIQUE) | Email |
| password | VARCHAR | Hashed password |
| role | ENUM | admin / student |
| course_id | INT (FK) | Linked course |

---

## 🔗 API Endpoints

### Auth
- `POST /api/auth/login` – Login (Admin / Student)

### Courses
- `POST /api/courses` – Add course (Admin)
- `GET /api/courses` – View courses

### Students
- `POST /api/students` – Add student (Admin)
- `GET /api/students` – View all students (Admin)
- `PUT /api/students/:id` – Update student course (Admin)
- `DELETE /api/students/:id` – Delete student (Admin)
- `GET /api/students/me` – View own profile (Student)

---

## 🧪 Testing

- Backend APIs tested using **Postman**
- Frontend tested via browser and network inspection
- JWT token validation tested for role-based access

---

## 🧠 Key Learnings

- Designing relational databases using foreign keys
- Implementing secure JWT authentication
- Role-based authorization (Admin vs Student)
- RESTful API design
- React + backend integration
- Handling real-world auth issues (stale tokens, role mismatch)

---

## 👨‍💻 Author

**Prem Suvarnkar**  
3rd Year Engineering Student  
Full Stack Developer (MERN, SQL, React, Node.js)

---

## 📌 Note

This project focuses on **backend logic, database design, and secure access**, with a simple yet function
