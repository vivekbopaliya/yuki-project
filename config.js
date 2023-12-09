// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKNJc4GXv1AsWTjjWWY2dlXyxOQ5HfnJg",
  authDomain: "yuki-project-8aac0.firebaseapp.com",
  projectId: "yuki-project-8aac0",
  storageBucket: "yuki-project-8aac0.appspot.com",
  messagingSenderId: "955873120630",
  appId: "1:955873120630:web:108b09505883647f15ea57",
  measurementId: "G-E4DVF7KE2W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
