// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9-wHuM2ja5QWOH55bfq6Ju9kZyM-nPm4",
  authDomain: "todo-app-179c0.firebaseapp.com",
  projectId: "todo-app-179c0",
  storageBucket: "todo-app-179c0.firebasestorage.app",
  messagingSenderId: "1064005355933",
  appId: "1:1064005355933:web:c9e2e89e8768cc276f8774",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
