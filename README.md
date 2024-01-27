
# ReactJS File Sharing App

**App Purpose:**  
This ReactJS application is a simple file-sharing platform where you can upload files and share their links. Firebase database is used to store link and file details.

**How to Use:**

1.  **Firebase Configuration:**
    
    -   Create a new project for your Firebase project.
    -   Enable Authentication in the Firebase console.
    -   Create a Firebase database and set its rules to allow access only to authorized users.
    -   Replace the configuration details of your project in `src/firebase/firebase.js` from Firebase project settings.
2.  **App Setup:**
    
    -   Install dependencies by typing `npm install` in the terminal.
    -   Then run the application on a local server by typing `npm start`.
3.  **File Upload:**
    
    -   Click on the "Upload File" button to choose a file from your system.
    -   After the file is uploaded, you will receive a unique link.
4.  **File Share:**
    
    -   Copy the provided link and share it with any friend or client.
    -   Anyone who opens this link will be able to download the file.

**Tech Stack:**

-   ReactJS
-   Firebase (Authentication, Realtime Database, Storage)

**Contact Information:** If you encounter any issues, feel free to contact me.

**License:**  
This project is licensed under the MIT license.
