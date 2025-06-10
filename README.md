# 🔐 Password Manager (React + Tailwind + LocalStorage / MongoDB)
A modern, responsive password manager app built with React and Tailwind CSS, supporting two modes of data storage:

-LocalStorage Mode: Store data in the browser for quick and offline usage.

-MongoDB Mode: Store data securely in the cloud via a Node.js + Express backend.

---
## 🚀 Features
### Core Functionality
-Add, view, update, and delete saved passwords.

-Save website name, username/email, and password securely.

-Show/hide password functionality.

-Copy credentials to clipboard with feedback.

-Input validation for required fields.

-Responsive layout for all devices.

-Clean UI with animated icons and buttons.

-Notifications using react-toastify.

### Version-Specific
#### 🔸 LocalStorage Mode
-No backend required.

-Uses browser local storage to save credentials.

-Works completely offline.

-Simple and lightweight for demo/testing purposes.
#### 🔹 MongoDB Mode
-Full-stack with Node.js + Express + MongoDB.

-Stores passwords securely in a MongoDB collection.

-Uses REST API for CRUD operations.

-Persistent storage across devices.

---
## 🛠️ Tech Stack
| Frontend           | Backend            | Styling              | Utilities         |
| ------------------ | ------------------ | -------------------- | ----------------- |
| React              | Node.js            | Tailwind CSS         | UUID              |
| React Toastify     | Express.js         | Flexbox (Layout)     | Axios (API calls) |
| useState/useEffect | MongoDB / Mongoose | Animated Icons (SVG) | Dotenv (env vars) |

---
## 📂 Folder Structure
``` pgsql
password-manager/
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── index.css
│   └── tailwind.config.js
└── server/
    ├── routes/
    ├── models/
    ├── .env
    └── index.js
```

---

## ⚙️ Setup Instructions
### 🔸 LocalStorage Version (Frontend Only)
```bash
git clone <repo-url>
cd password-manager/client
npm install
npm run dev
```
### 🔹 MongoDB Version (Full Stack)
1. Clone and Install
``` bash
   git clone <repo-url>
   cd password-manager
```
2. Setup Backend
```bash
   cd server   npm install
   # Create .env file
   echo "MONGO_URI=<your_mongodb_uri>" > .env
   npm run start
```
3.Setup Frontend

```bash
Copy code
cd ../client
npm install
npm run dev
```
4.Start

->Backend on http://localhost:5000

->Frontend on http://localhost:5173

---

## 🔐 Password Storage & Security

| Feature              | LocalStorage         | MongoDB                |
| -------------------- | -------------------- | ---------------------- |
| Storage Type         | Browser LocalStorage | MongoDB Atlas/local DB |
| Data Loss on Refresh | ❌                    | ✅                      |
| Offline Access       | ✅                    | ❌                      |
| API-Based            | ❌                    | ✅                      |
| Authentication       | ❌ (basic)            | 🔒 Can be added (JWT)  |

⚠️ Note: This app does not hash or encrypt passwords. For production, add encryption and user auth.

---

##  📸 UI Highlights
🔹 Clean, animated interface using Tailwind.

🔹 Responsive form and table layout.

🔹 Flexbox-based alignment for modern layout.

🔹 Icons for copy, edit, delete using SVGs.

🔹 Toast notifications for feedback.

---

## 📌 Future Enhancements
✅ Add password encryption (e.g., CryptoJS).

✅ Add authentication (JWT).

✅ Use environment-specific configurations.

✅ Use dark mode toggle.

✅ Add categories/folders for saved passwords.

---

## 📜 License
MIT License
