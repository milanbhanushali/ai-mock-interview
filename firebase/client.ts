// Import the functions you need from the SDKs you need
import { initializeApp, getApp , getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC4m1gY5HLIV2pXSmtCUyvyBLLh-mbZtEU",
  authDomain: "prepwise-d688e.firebaseapp.com",
  projectId: "prepwise-d688e",
  storageBucket: "prepwise-d688e.firebasestorage.app",
  messagingSenderId: "1062014699215",
  appId: "1:1062014699215:web:96bf3ac8bb9c86f475d9ba",
  measurementId: "G-J8S2QXDXLD"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);