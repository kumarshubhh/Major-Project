<h1 align="center">🚀 WanderNest — MERN Travel Web App</h1>

<p align="center">
  ✈️ A full-featured travel booking and exploration web app built with <strong>Node.js</strong>, <strong>Express.js</strong>, <strong>MongoDB</strong>, <strong>EJS</strong>, and <strong>Cloudinary</strong> — featuring dynamic UI, authentication, cloud image uploads, and MVC architecture.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-18.x-green?logo=node.js" />
  <img src="https://img.shields.io/badge/Express.js-4.x-black?logo=express" />
  <img src="https://img.shields.io/badge/MongoDB-%234EA94B.svg?logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/EJS-Templating-blue" />
  <img src="https://img.shields.io/badge/Cloudinary-Image%20Uploads-yellow?logo=cloudinary&logoColor=purple" />
  <img src="https://img.shields.io/badge/Passport.js-Authentication-orange" />
</p>

---

## 🔥 Features

- 🔐 Secure user authentication with **Passport.js**
- 🧾 Form validation using **Joi**
- ☁️ Cloud image uploads via **Cloudinary**
- 💬 Flash messages for real-time UI feedback
- 📦 Modular MVC architecture: **Controllers, Models, Routes, Views**
- 🌍 Dynamic pages rendered with **EJS**
- ⚙️ Deploy-ready with **Netlify** and `serverless-http`

---

## 📁 Project Structure

```
WanderNest/
│
├── controllers/       # Logic for each route
├── models/            # Mongoose schemas
├── routes/            # Express route files
├── views/             # EJS templates
├── public/            # Static assets (CSS, JS, images)
├── utils/             # Helper functions
│
├── app.js             # Main Express server
├── cloudConfig.js     # Cloudinary setup
├── middleware.js      # Auth & error handlers
├── schema.js          # Joi validation schemas
├── netlify.toml       # Netlify config
├── .env               # Environment variables
└── README.md          # You're here!
```

---

## 🚀 Getting Started

### 1️⃣ Clone the repo

```bash
git clone https://github.com/kumarshubhh/Major-Project.git
cd Major-Project
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Setup environment variables

Create a `.env` file in the root folder:

```env
DB_URL=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_KEY=your_api_key
CLOUDINARY_SECRET=your_api_secret
SESSION_SECRET=your_custom_secret
```

### 4️⃣ Start the development server

```bash
npm start
```

Go to 👉 [http://localhost:3000](http://localhost:3000)

---

## 🖼️ Screenshots

> _Make sure to place these images in the `/screenshots` folder_

<p align="center">
  <img src="./screenshots/home.png" width="600px" alt="Home Page" />
  <br /><br />
  <img src="./screenshots/dashboard.png" width="600px" alt="Dashboard Page" />
</p>

---

## 🧠 Concepts You'll Learn

- MVC pattern with Express.js
- EJS templating engine
- Passport.js authentication
- MongoDB with Mongoose ORM
- Cloudinary integration for image uploads
- Flash messaging system
- Middleware-based validation (Joi)
- RESTful routing and modular structure

---

## 👨‍💻 Developer

**Shubhanshu Kumar**  
🌐 [LinkedIn](https://www.linkedin.com/in/shubhanshu-kumar-6a961525a/)  
📫 Email: [subhanshukumar290@gmail.com](mailto:subhanshukumar290@gmail.com)  
💬 Discord: `shubhanshu0270_27600`

---

## 📄 License

This project is licensed under the **MIT License**.  
Feel free to use, fork, and contribute 💙

---

<p align="center">
  ⭐ If you found this project helpful or inspiring, please give it a star!
</p>
