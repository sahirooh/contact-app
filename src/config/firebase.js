// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyClpbBkxnRC1V3VIV7rR7gDd0LLeAF0NO8",
  authDomain: "contact-app-976dd.firebaseapp.com",
  projectId: "contact-app-976dd",
  storageBucket: "contact-app-976dd.appspot.com",
  messagingSenderId: "780048110201",
  appId: "1:780048110201:web:524deb7b7c8dbb91eabaa8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
