// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLiKcFlKsgC-CI3GkKn8DgbVHFDsfZ3X8",
  authDomain: "todo-app-fb360.firebaseapp.com",
  databaseURL: "https://todo-app-fb360-default-rtdb.firebaseio.com",
  projectId: "todo-app-fb360",
  storageBucket: "todo-app-fb360.appspot.com",
  messagingSenderId: "873735616258",
  appId: "1:873735616258:web:cf46aae4a69a97316b341b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();
