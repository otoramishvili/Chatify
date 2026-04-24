💬 Chatify — Real-Time Chat Application

A full-stack real-time chat platform built with the MERN stack, featuring secure authentication, live messaging, and a modern, responsive UI.

👨‍💻 Author

Otar Ramishvili

🔗 GitHub: https://github.com/otoramishvili
🔗 LinkedIn: https://www.linkedin.com/in/oto-ramishvili-581b193a5

🚀 Live Demo

🔗 https://chatify-4nrp.onrender.com/login

📸 Preview

![Login screen page](<Screenshot 2026-03-22 222807.png>)
![Dashboard screen](<Screenshot 2026-03-22 222827.png>)

🧠 Overview

Chatify is a scalable real-time messaging platform designed to demonstrate modern backend and frontend architecture.

It includes:

Secure authentication & authorization
WebSocket-based real-time communication
Efficient global state management
Media uploads with cloud storage
Clean and structured API design

⚙️ Tech Stack

🖥️ Frontend

React.js
Zustand (state management)
Tailwind CSS + DaisyUI
Axios

🌐 Backend

Node.js
Express.js
TypeScript
MongoDB + Mongoose
Socket.IO

🔐 Authentication

JSON Web Tokens (JWT)
bcrypt (password hashing)

☁️ Services

Cloudinary (media storage)
Upstash (rate limiting & Redis)

✨ Features

🔐 Authentication & Authorization

Secure JWT-based authentication
HTTP-only cookies for improved security
Password hashing with bcrypt

💬 Real-Time Messaging

Instant messaging powered by Socket.IO
Live updates without refresh
Scalable real-time architecture

🟢 Online Presence

Track active users in real time
Dynamic user status updates

🧠 State Management

Lightweight global state using Zustand
Optimized client-side data flow

🖼️ Media Uploads

Image upload support via Cloudinary
Fast and reliable media delivery

👤 User System

User search functionality
Profile-based conversations

🛡️ Error Handling

Centralized backend error handling
Consistent API responses
Frontend error management

MONGODB_URI=
PORT=
JWT_SECRET=

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

NODE_ENV=

UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=

STREAM_API_KEY=
STREAM_API_SECRET=

Run the app

# backend
npm run dev

# frontend
npm run dev

📐 Architecture Highlights

RESTful API design with clear separation of concerns
WebSocket integration for real-time communication
Secure authentication using HTTP-only cookies
Scalable backend structure with middleware & controllers

📌 Future Improvements

📞 Video/voice calling
📨 Message read receipts
📱 Mobile optimization
🔔 Notifications system
