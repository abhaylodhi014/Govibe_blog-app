# GoVibe Blog Application

Welcome to **GoVibe**, a dynamic full-stack blog application designed for both **Viewers** and **Authors**. This app allows seamless interaction with blog content, where viewers can read posts without signing in, while authors have the capability to create, edit, and manage their blogs and comments.

---

## 📄 **Features**

### For Viewers:
- 📰 **Browse Posts**: View all public blog posts without signing in.
- 📷 **Read Blog Posts**: Access detailed posts with images, titles, and descriptions.

### For Authors:
- 🖋️ **Create Posts**: Upload images via **Cloudinary**, add titles, descriptions, and location tags.
- 🔄 **Edit/Delete Posts**: Manage your own blog content.
- 💬 **Comment**: Leave comments on posts and manage your own.
- 🔒 **Role-Based Access**: Authors can view, comment, and interact with others' posts.

### General Features:
- 👥 **Authentication**: Sign in with **Google (via Firebase)** or traditional email/password.
- 🛋️ **About Page**: Learn more about GoVibe.
- 📩 **Contact Us**: Share feedback or suggestions via the contact form.

---

## 🚀 **Tech Stack**

- **Frontend:** [Next.js](https://nextjs.org/)
- **Backend:** [Node.js](https://nodejs.org/)
- **Database:** [MongoDB](https://www.mongodb.com/)
- **Image Storage:** [Cloudinary](https://cloudinary.com/)
- **Authentication:** [Firebase Authentication](https://firebase.google.com/products/auth)

---

## 📚 **Project Structure**

```
GoVibe/
|-- frontend/       # Next.js frontend
|   |-- pages/      # Next.js pages (Home, About, Contact, etc.)
|   |-- components/ # Reusable UI components
|   |-- public/     # Static assets and images
|   |-- .env        # Frontend environment variables (Not shared)
|
|-- backend/        # Node.js backend
|   |-- routes/     # API endpoints
|   |-- models/     # Mongoose models for MongoDB
|   |-- controllers/# Business logic
|   |-- .env        # Backend environment variables (Not shared)
|
|-- README.md       # Project documentation
|-- package.json    # Dependency management
```

---

## 📦 **Installation & Setup**

### 1. **Clone the Repository**
```bash
git clone https://github.com/your-username/govibe.git
cd govibe
```

### 2. **Setup Frontend (Next.js)**
```bash
cd frontend
npm install
```

#### 🛡️ **Environment Variables (Frontend)**
Create a `.env` file in the `frontend` directory:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
```

### 3. **Setup Backend (Node.js)**
```bash
cd ../backend
npm install
```

#### 🛡️ **Environment Variables (Backend)**
Create a `.env` file in the `backend` directory:
```env
MONGO_URI=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
FIREBASE_ADMIN_SDK=your_firebase_admin_credentials
```

---

## 💡 **Running the Application**

### 1. **Start Backend**
```bash
cd backend
npm start
```

### 2. **Start Frontend**
```bash
cd frontend
npm run dev
```

### 🔗 **Visit the App:**
- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend API: [http://localhost:5000](http://localhost:5000) *(or your configured port)*

---

## 📸 **Screenshots**

![Screenshot 2025-02-10 203527](https://github.com/user-attachments/assets/892f8cbf-88d0-48f1-80a0-b4f3ec4ce6ff)
![Screenshot 2025-02-10 203347](https://github.com/user-attachments/assets/2ac61986-ff2e-4704-9b3c-3fb305107615)
![Screenshot 2025-02-10 203010](https://github.com/user-attachments/assets/7cb75938-c52d-40c0-9f56-7d905983f6ec)
![Screenshot 2025-02-10 202941](https://github.com/user-attachments/assets/8bbaa38b-85d2-4278-b36d-f7006093ef2f)
![Screenshot 2025-02-10 202931](https://github.com/user-attachments/assets/b06bca3c-2196-41b0-abc5-eee8f965863e)
![Screenshot 2025-02-10 202913](https://github.com/user-attachments/assets/86ae2e2f-d4b1-4744-9c8a-215d6610ca94)
![Screenshot 2025-02-10 202851](https://github.com/user-attachments/assets/8e21f237-c9eb-45fb-8db6-88591f3a1dc0)
![Screenshot 2025-02-10 202756](https://github.com/user-attachments/assets/eb211cd1-b548-4177-8875-444ad0ee7d21)
![Screenshot 2025-02-10 202652](https://github.com/user-attachments/assets/aced5250-51d7-4313-99cd-e66403f584cb)
![Screenshot 2025-02-10 202608](https://github.com/user-attachments/assets/45c2fc89-702b-43b9-9536-8fe84be21633)


---

## 🛠️ **Troubleshooting**

1. **Environment Variables Not Working:**
   - Ensure you've set up `.env` files correctly in both frontend and backend directories.

2. **MongoDB Connection Issues:**
   - Check your `MONGO_URI` and ensure MongoDB is running.

3. **Firebase Authentication Errors:**
   - Make sure your Firebase project settings match the values in your `.env` file.

4. **Image Upload Issues:**
   - Verify your Cloudinary credentials and ensure your account is active.

---

## 🙌 **Contributing**

Contributions are welcome! Feel free to fork the repository, submit pull requests, or open issues for suggestions and improvements.

---

## 📅 **License**

This project is licensed under the [MIT License](LICENSE).

---

## 📢 **Feedback & Suggestions**

Have ideas or feedback? Reach out through the **Contact Us** page or create an issue in the repository.

---

**Happy Blogging with GoVibe!** 🚀📜📲

