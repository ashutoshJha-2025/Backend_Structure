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
│   |── controllers/
│   |── middlewares/
│   |── routes/
│   |── utils/
│   │
│   └── app.js           # Post CRUD + routes connected to frontend
│
├── .env                 # Environment variables
├── server.js            # Entry point (server start + DB connection)
├── package.json
└── README.md
```

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

---

## 🚀 Setup Instructions

### 1. Initialize project

```bash
npm init -y
```

### 2. Install dependencies

```bash
npm i express mongoose dotenv cors multer @imagekit/nodejs
```

### 3. Run server

```bash
npx nodemon server.js
```

---

## 🔐 Environment Variables (.env)

```
PORT=3000
MONGODB_URI=your_mongodb_connection_string

IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_PRIVATE_KEY=your_private_key
IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_id

CORS_ORIGIN=*
```

---

## 📎 Frontend

* Built with **React + Tailwind CSS**
* Connected to backend APIs for post creation and display

