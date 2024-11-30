// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQvSoPSCQpFe-xcqxAAHh82WT2xp2jHsI",
  authDomain: "mongo-firebase-68b4d.firebaseapp.com",
  projectId: "mongo-firebase-68b4d",
  storageBucket: "mongo-firebase-68b4d.firebasestorage.app",
  messagingSenderId: "742652878390",
  appId: "1:742652878390:web:b1c517e6185a54cde64297"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);