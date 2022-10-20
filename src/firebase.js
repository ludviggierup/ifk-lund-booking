// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdrsQ6dS2PSuAuHCUeJP10oZCNjZrxS_k",
  authDomain: "ifk-lund-booking.firebaseapp.com",
  projectId: "ifk-lund-booking",
  storageBucket: "ifk-lund-booking.appspot.com",
  messagingSenderId: "228520133960",
  appId: "1:228520133960:web:0c12311ad3286784375f7d",
  measurementId: "G-T7B3HVQ2FW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);