// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-54493.firebaseapp.com",
  projectId: "mern-blog-54493",
  storageBucket: "mern-blog-54493.appspot.com",
  messagingSenderId: "538905937928",
  appId: "1:538905937928:web:4d20e20fbb110934c569bd"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);