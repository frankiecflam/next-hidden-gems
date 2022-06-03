// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "react-hidden-gems.firebaseapp.com",
  databaseURL: process.env.DATABASE_URL,
  projectId: "react-hidden-gems",
  storageBucket: "react-hidden-gems.appspot.com",
  messagingSenderId: "97250549476",
  appId: "1:97250549476:web:3a6963d05d1dae0881d6f1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getDatabase(app);
export const { databaseURL } = firebaseConfig;
