# 📝 Dynamic Blog Platform (React)

A **React-based dynamic blog platform** that allows users to **browse blog posts, view detailed content, and create new blog entries** using a clean, component-driven frontend architecture.

This project focuses on **frontend development, reusable components, routing, and UI structuring**, making it suitable for academic submission, frontend practice, or integration with a backend API.

---

## 📌 Project Overview

Blogs are a common real-world web application use case.
This project demonstrates how to build a **dynamic blog frontend** using React, where content is displayed across multiple pages with reusable UI components.

The platform supports:

* Viewing a list of blogs
* Viewing detailed blog content
* Creating new blog posts
* Navigating using a consistent header and footer

---

## ✨ Features

* 📃 Blog listing page
* 🧾 Blog detail page
* ✍️ Blog creation page
* ♻️ Reusable blog card component
* 🧭 Header and footer layout
* 🎨 Modular CSS styling
* 🧩 Component-based React architecture
* 🚀 Ready for backend/API integration
* ☁️ Vercel deployment configuration included

---

## 🧩 Application Pages & Components

### Pages

* **BlogListPage** – Displays all blog posts
* **BlogDetailsPage** – Shows full content of a selected blog
* **BlogCreatePage** – Form to create a new blog post

### Reusable Components

* **BlogCard** – Displays blog preview
* **Header** – Top navigation
* **Footer** – Page footer
* **Button** – Reusable styled button

---

## 📂 Project Structure

```
dynamic_blog_platform/
│
├── src/
│   ├── App.js
│   ├── App.css
│   │
│   ├── components/
│   │   ├── BlogCard.js
│   │   ├── BlogCard.css
│   │   ├── Button.js
│   │   ├── Button.css
│   │   ├── Header.js
│   │   ├── Header.css
│   │   ├── Footer.js
│   │   ├── Footer.css
│   │
│   ├── pages/
│   │   ├── BlogListPage.js
│   │   ├── BlogListPage.css
│   │   ├── BlogDetailsPage.js
│   │   ├── BlogDetailsPage.css
│   │   ├── BlogCreatePage.js
│   │   ├── BlogCreatePage.css
│   │
│   ├── styles/
│   │   ├── global.css
│   │   ├── index.css
│   │   └── variable.css
│   │
│   ├── index.js
│
├── public/
│   └── index.html
│
├── package.json
├── package-lock.json
├── vercel.json
└── README.md
```

---

## ⚙️ Technologies Used

* **React**
* **JavaScript (ES6+)**
* **CSS**
* **React Router (if enabled in App.js)**
* **Create React App**
* **Vercel (deployment-ready)**

---

## 🚀 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/snxhx294/dynamic_blog_platform.git
cd dynamic_blog_platform
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Start the Development Server

```bash
npm start
```

The application will be available at:

```
http://localhost:3000
```

---

## 🧪 Testing

This project focuses on UI and frontend functionality.
Testing can be added using:

* Jest
* React Testing Library

---

## 🔌 Backend Integration (Optional)

Currently, the project functions as a **frontend-only blog platform**.
It can be extended by integrating:

* REST APIs (Node.js / Django / Flask)
* Firebase
* Headless CMS (Strapi, Sanity)

Suggested enhancement:

* Replace local/static data with API calls
* Add authentication for blog creation

---

## 🌱 Future Enhancements

* User authentication (login/register)
* Edit & delete blog posts
* Comments and likes
* Rich text editor (Markdown / WYSIWYG)
* Pagination and search
* Backend API integration
* Role-based access (admin/editor)
