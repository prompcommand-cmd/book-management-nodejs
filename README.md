# 📚 Books Management API

A simple **Book Management API** built with **Node.js**, **Express**, **SQLite (Sequelize ORM)**, following **Clean Architecture principles**, with **JWT authentication**, **audit logging**, and **Swagger documentation**.

---

## 🚀 Features

- User registration & login with JWT authentication  
- CRUD operations for books (Create, Read, Update, Delete)  
- Input validation with **Joi**  
- Clean architecture (separated controllers, use cases, repositories)  
- Audit logging for API calls  
- API documentation with **Swagger UI**  

---

## 🛠️ Tech Stack

- [Node.js](https://nodejs.org/)  
- [Express](https://expressjs.com/)  
- [Sequelize](https://sequelize.org/) with **SQLite**  
- [JWT](https://jwt.io/) for authentication  
- [Swagger](https://swagger.io/) for API docs  
- [Joi](https://joi.dev/) for validation  

---

## 📦 Installation

1. **Clone this repository**
   ```bash
   git clone https://github.com/prompcommand-cmd/book-management-nodejs.git
   cd book-management-nodejs

2. **Install dependencies**
   ```bash
   npm install

3. **Setup environment variables**
   ```bash
   PORT=3000
   JWT_SECRET=GreatdayHRJWTSecret
   JWT_EXPIRES_IN=1h
   DATABASE_STORAGE=dbGreatdayHR.sqlite

4. **Start the app**
   ```bash
   npm start
   or for development with auto-restart:
   npm run dev

## 📖 API Documentation
   **After running the app, open:**
   http://localhost:3000/api-docs
   You will see interactive Swagger documentation.

## 🔑 Authentication
   **Register a user via /user/register**
   **Login via /user/login to get a JWT token**
   **Copy the token and use it as Bearer Token in the Authorization header for secured routes.**