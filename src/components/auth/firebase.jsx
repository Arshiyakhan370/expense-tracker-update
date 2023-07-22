// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {app} from "./firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXcVIOVTYP4MQZwzkEHgb-OgLvYj0Rl28",
  authDomain: "authentication-expense-tracker.firebaseapp.com",
  projectId: "authentication-expense-tracker",
  storageBucket: "authentication-expense-tracker.appspot.com",
  messagingSenderId: "579004352701",
  appId: "1:579004352701:web:95a9cd800a134e966d4fd4",
  measurementId: "G-RMMDQHQRQH",
  databaseURL:
    "https://authentication-expense-tracker-default-rtdb.firebaseio.com",
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);

