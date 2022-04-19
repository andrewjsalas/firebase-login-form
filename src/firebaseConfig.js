import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  onAuthStateChanged, 
  signOut,
  signInWithEmailAndPassword
} from 'firebase/auth';

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
const auth = getAuth();

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

// Login functionality to firebase
export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

// Logout functionality to firebase
export function logout() {
  return signOut(auth)
}

// Signup functionality to firebase
export function useAuth() {
  const [currentUser, setCurrentUser] = useState()

  useEffect(() => {
    // Subscribe to listener everytime hook is mounted
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user))

    // Unsubscribe when hook is unmounted
    return unsub
  }, [])

  return currentUser
}