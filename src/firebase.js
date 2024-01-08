// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5cC3_cecHFySvuRWH8AqrwPBsqkbkMb4",
  authDomain: "nem-calculator.firebaseapp.com",
  databaseURL: "https://nem-calculator-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "nem-calculator",
  storageBucket: "nem-calculator.appspot.com",
  messagingSenderId: "733206851928",
  appId: "1:733206851928:web:5535541516608635de752d",
  measurementId: "G-DEB1LCQ9QX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getDatabase(app);
