// src/lib/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Replace with your actual Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAjkNnshKTzitBBisbdNUqRptSebhVuyZk",
  authDomain: "authentication-a71c5.firebaseapp.com",
  projectId: "authentication-a71c5",
  storageBucket: "authentication-a71c5.appspot.com", // fix this line (should end with .appspot.com)
  messagingSenderId: "834468367270",
  appId: "1:834468367270:web:5b5c06d957e9e75c4a1d67"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Export auth and firestore instances
export const auth = getAuth(app);
export const db = getFirestore(app);
