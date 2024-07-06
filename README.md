# 🌟🌟🌟 Hospital Management System 🌟🌟🌟

This project is a Hospital Management System designed to streamline hospital operations with separate login pages for both patients and admins. The system features patient registration, appointment scheduling, messaging, and adding new doctors and admins with secure user authentication and authorization.

## 🔮 Features
- 🚀 **Responsive Website**: The system is designed to be responsive, providing a seamless experience on both desktop and mobile devices.
- 🩺 **Separate Login Pages**: Two distinct login pages for Patients and Admins ensure the right access control.
- ⚕️ **Patient Registration**: New patients can register themselves through the system.
- 🚑 **Appointment Scheduling**: Patients can schedule appointments with doctors.
- 💬 **Messaging**: Secure messaging system for communication between patients and hospital staff.
- 🎩 **Admin Features**: Admins can add new doctors, add new admins, and manage user roles.
- 🧠 **Authentication & Authorization**: Secure access control implemented to ensure data privacy and integrity.
- ⏱️ **API Testing with Postman**: APIs were tested using Postman to ensure accurate data posting and retrieval.
- 💻 **Optimized Database**: Designed and optimized database schemas in MongoDB for efficient data storage and retrieval.

## 🌍 Tech Stack

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![ExpressJS](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
![MongoDB Atlas](https://img.shields.io/badge/MongoDB%20Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)

## 🔧 API Testing
Use Postman to test the APIs. Ensure the backend server is running and use the endpoints as defined in the API documentation.

## 📊 Database
MongoDB is used for efficient data storage and retrieval.
Ensure your MongoDB server is running and the connection string is correctly set in the .env file.

## ⚙️ Installation

1. **Fork this repository:** Click the Fork button located in the top-right corner of this page to fork the repository.
2. **Clone the repository:**
    ```bash
    git clone https://github.com/<your-username>/MK_HOSPITAL_MANAGEMENT_SYSTEM.git
    ```
3. **Set .env file:**
   Inside backend directory create a file names as `config.env` and set the following environment variables:

    ```
       PORT=4000

        MONGO_URI= <your Database Link from Atlas>    

        FRONTEND_URL_ONE= http://localhost:5173

        FRONTEND_URL_TWO= http://localhost:5174

        JWT_SECRET_KEY=abcdefghijkl

        JWT_EXPIRES=7d

        COOKIE_EXPIRE=7

        CLOUDINARY_CLOUD_NAME= <Your Cloud Name >

        CLOUDINARY_API_SECRET= <Your Secret Key From Cloudinary>

        CLOUDINARY_API_KEY= <Your Api key>

    ```

4. **Install dependencies:**
   Navigate to the backend frontend and dashboard directories separately and run:
    ```bash
     npm run dev
    ```
5. **Start the frontend and backend servers:**  
   Frontend:
    ```bash
     cd backend 
     npm run dev

     cd frontend 
     npm run dev

     cd dashboard 
     npm run dev
    npm run dev
    ```
  
## 🤝 Contributing

We welcome contributions from the community! If you're interested in contributing to this project, please follow these guidelines:

- How to Contribute
- Fork the repository and clone it to your local machine.
- Create a new branch for your feature or bug fix.
- Make your changes and test thoroughly.
- Commit your changes following the commit message guidelines.
- Push your branch to your fork and submit a pull request against the main repository's develop branch.


## 🌟 Support Me

If you find this helpful or valuable, please consider 🌟 starring the repository. It helps us gain visibility and encourages further development. We appreciate your support!
