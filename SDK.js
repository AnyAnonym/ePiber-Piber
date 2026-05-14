// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-analytics.js";
import { getFunctions } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-functions.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCX8AAZXwPiWynMsK3exnnUD1QMfsZzy9c",
  authDomain: "piber-tennis-webapp.firebaseapp.com",
  projectId: "piber-tennis-webapp",
  storageBucket: "piber-tennis-webapp.firebasestorage.app",
  messagingSenderId: "392373350880",
  appId: "1:392373350880:web:cc551e363ea70a5113bb85",
  measurementId: "G-HTLNLEH1ZB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const functions = getFunctions(app);

// Export what other files may need
export { app, analytics, functions };