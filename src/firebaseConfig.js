import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCLFjA00AniE3s864AuZwXDEoLXcNHi8_8",
  authDomain: "react-login-form-eb24c.firebaseapp.com",
  projectId: "react-login-form-eb24c",
  storageBucket: "react-login-form-eb24c.appspot.com",
  messagingSenderId: "560320671330",
  appId: "1:560320671330:web:080a2e8ea266d66b286b3b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()

