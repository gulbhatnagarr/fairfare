# FairFare 💸

FairFare is a Splitwise-inspired full-stack MERN web app for splitting expenses among groups of friends, roommates, or colleagues. It allows users to create groups, add expenses, track balances, and settle up — all in a simple interface.

---

## 🌐 Live Links

- 🔗 **Frontend:** [https://fairfare-zajv.onrender.com](https://fairfare-zajv.onrender.com)
- 🔗 **Backend:** [https://fairfare-backend.onrender.com](https://fairfare-backend.onrender.com)

---

## 🛠️ Tech Stack

### Frontend:
- React.js
- Axios
- Plain CSS (no UI libraries)
- Hosted on Render

### Backend:
- Node.js + Express.js
- MongoDB + Mongoose
- dotenv for environment variables
- CORS configured for frontend domain
- Hosted on Render

---

## 📦 Folder Structure

fairfare/
├── splitwiseclone-frontend/ # React frontend
└── splitwiseclone/ # Node.js + Express backend

yaml
Copy
Edit

---

## ⚙️ Backend API Overview

Some key endpoints:

- `POST /register` – User registration
- `POST /login` – User login
- `POST /groups` – Create group
- `POST /expenses` – Add expense to group
- `GET /balances` – View balances within a group
- `POST /settle-up` – Settle balances between members

---

## 🔐 Environment Variables (Used on Render)

These are configured securely in Render's dashboard for the backend:

- `MONGO_URI` – MongoDB Atlas connection string
- `FRONTEND_URL` – `https://fairfare-zajv.onrender.com`
- `JWT_SECRET` – (If using authentication)

---

## 🚀 How to Run Locally

### Clone the frontend:

```bash
git clone https://github.com/gulbhatnagarr/fairfare-frontend.git
cd fairfare-frontend
npm install
npm start
