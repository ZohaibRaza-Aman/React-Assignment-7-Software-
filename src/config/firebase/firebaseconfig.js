// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkqU3BgIGu2kOyqjuYyjqyEqjYoK3iagw",
  authDomain: "loginsignup-13d41.firebaseapp.com",
  databaseURL: "https://loginsignup-13d41-default-rtdb.firebaseio.com",
  projectId: "loginsignup-13d41",
  storageBucket: "loginsignup-13d41.appspot.com",
  messagingSenderId: "934981185870",
  appId: "1:934981185870:web:39ae914a43f7a1924fee1f",
  measurementId: "G-XXJPP3YWMV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;

