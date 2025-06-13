// lib/firebaseConfig.js
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBm-oRNGIdngNkTxBOLrU3Gf8kyqedGT04",
  authDomain: "testapp-967e4.firebaseapp.com",
  projectId: "testapp-967e4",
  storageBucket: "testapp-967e4.appspot.com", // ✅ fixed
  messagingSenderId: "575446361764",
  appId: "1:575446361764:web:6aee84ff8b4cac2ebbe831",
  measurementId: "G-9C32MXSX7J",
};

// Prevent "app/duplicate-app" error
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Export Auth and Firestore
export const auth = getAuth(app);
export const db = getFirestore(app); // ✅ Make sure db is a valid Firestore instance
