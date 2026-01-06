// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth  } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-dyq8yAs_GvIJA9HXWeyni5HNCwXhgYI",
  authDomain: "netflix-gpt-9b658.firebaseapp.com",
  projectId: "netflix-gpt-9b658",
  storageBucket: "netflix-gpt-9b658.firebasestorage.app",
  messagingSenderId: "522447275678",
  appId: "1:522447275678:web:c6ccc88d3d14184ca95d8f",
  measurementId: "G-F90REXESJN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();