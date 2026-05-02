# Backend - CRUD + Image Upload (ImageKit)
 Live PREVIEW: https://posts-website.onrender.com/

This backend is built using **Node.js, Express, MongoDB**, and integrates **ImageKit** for image uploads. It is connected to a **React + Tailwind CSS frontend**.

---

## 📁 Folder Structure

```
Backend/
│
├── public/
│   ├── db_CRUD.js        # CRUD operations using MongoDB (notes model)
│   ├── REST_API.js       # REST API using local array (notes)
│
├── src/
│   ├── config/
│   │   └── env.js        # Environment configuration (dotenv setup)
│   │
│   ├── db/
│   │   └── db.js         # MongoDB connection
│   │
│   ├── models/
│   │   ├── note.model.js # Note schema 
│   │   └── post.model.js # Post schema 
│   │
│   ├── services/
│   │   └── storage.service.js  # ImageKit integration (image upload)
│   │
│   ├── controller/
│   ├── middleware/
│   ├── routes/
│   
│   └── app.js           # Post CRUD + routes connected to frontend
│
├── .env                 # Environment variables
├── server.js            # Entry point (server start + DB connection)
├── package.json
└── README.md
```
### 📁 Simple Analogy

- **db** - Connects your application to the database  
- **models** - Defines data structure (schemas, models, relationships)  
- **services** - Reusable helper functions and external integrations  
- **controller** - Handles requests and sends responses  
- **middleware** - Runs before controllers (auth, validation, logging, errors)  
- **routes** - Defines API endpoints and maps them to controllers

---

## 📌 Notes

* `public/` folder contains **reference files only**

  * `db_CRUD.js` → MongoDB CRUD examples (notes)
  * `REST_API.js` → Local array-based API examples

* `storage.service.js` handles:

  * Uploading images to ImageKit
  * Converting buffer → base64

* `app.js`:

  * Contains **Post CRUD operations**
  * Handles routes used by frontend

* `.env.text_sample` provides a sample environment configuration.

---

## 🚀 Setup Instructions

### 1. Initialize project

```bash
npm init -y
```

### 2. Install dependencies

```bash
npm i express mongoose dotenv cors multer @imagekit/nodejs jsonwebtoken cookie-parser bcryptjs express-validator
```

### 3. Run server

```bash
npx nodemon server.js
```
---

## 📎 Frontend

* Built with **React + Tailwind CSS**
* Connected to backend APIs for post creation and display

---

## 📂 API Endpoints

| Method | Endpoint                                         | Description           |
| ------ | ------------------------------------------------ | --------------------- |
| POST   | `/api/user/authentication/register`              | Register a new user   |
| POST   | `/api/user/authentication/login`                 | Login an existing user|
| GET    | `/api/posts`                                     | Get all posts         |
| GET    | `/api/posts/my-posts`                            | Get posts for logged-in user |
| POST   | `/api/posts/create-post`                         | Create a new post     |
| DELETE | `/api/posts/delete-post/:id`                     | Delete a post         |

