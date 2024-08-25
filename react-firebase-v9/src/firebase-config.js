// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHtdP8Z6n9Jri8YIkBeyDz4hvtnuxmgaQ",
  authDomain: "react-firebase-v9-28f2a.firebaseapp.com",
  projectId: "react-firebase-v9-28f2a",
  storageBucket: "react-firebase-v9-28f2a.appspot.com",
  messagingSenderId: "428224328531",
  appId: "1:428224328531:web:e445438512145758bd67a6",
  measurementId: "G-80KZ1LHX0C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);