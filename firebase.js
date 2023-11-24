// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMsgLAOsrUf5PjVOF-1hxe0UYK7QiviYc",
  authDomain: "multimedia-systems.firebaseapp.com",
  projectId: "multimedia-systems",
  storageBucket: "multimedia-systems.appspot.com",
  messagingSenderId: "694217068311",
  appId: "1:694217068311:web:8e21fac9bf8a0a42aa3152",
  measurementId: "G-Y2KDVJ0WK8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);