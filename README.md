
# 📝 Blogify – Node.js Blogging Platform

**Blogify** is a simple, full-stack blogging platform built using **Node.js**, **Express.js**, **MongoDB**, and **EJS**. It supports user authentication with **JWT cookies**, image upload via **Multer**, and conditional rendering based on user sessions.

---

## 🚀 Features

- ✅ User signup and login with JWT token stored in cookies
- ✅ Create, view, and manage blog posts
- ✅ Upload cover images for blogs
- ✅ EJS templating with Bootstrap 5 styling
- ✅ Show only logged-in user's blogs on home page
- ✅ Access control for creating blogs
- ✅ View a full blog via “Read More” page
- ✅ Secure password hashing using `crypto` HMAC

---

## 🧠 Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: EJS, Bootstrap 5
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (with cookies)
- **File Uploads**: Multer

---

## 🛠️ Installation

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/blogify.git
cd blogify

# 2. Install dependencies
npm install

# 3. Create a .env file
touch .env
````

### 🔐 .env file example

```env
PORT=8000
JWT_KEY=your_jwt_secret_key
```

---

## ▶️ Run the Application

```bash
node app.js
```

Visit: [http://localhost:8000](http://localhost:8000)

---

## ✨ Future Enhancements

* [ ] Blog editing and deletion
* [ ] User profile page
* [ ] Comment system
* [ ] Flash messages (e.g. login/signup errors)
* [ ] Search or filter blogs

---

## 👨‍💻 Author

**Muhammad Arslan**
Backend Developer | MERN Stack Enthusiast | Competitive Programmer
📧 [arslanarsal455@gmail.com](mailto:arslanarsal455@gmail.com)
🌐 [GitHub](https://github.com/arslanarsal)
🔗 [LinkedIn](https://www.linkedin.com/in/m-arslan-aa21a0246/)

