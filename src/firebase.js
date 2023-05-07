// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDriEdzw44xTcN9PyO73RMGpN2vZzmdm1E",
  authDomain: "todo-app-fire-c4ac8.firebaseapp.com",
  projectId: "todo-app-fire-c4ac8",
  storageBucket: "todo-app-fire-c4ac8.appspot.com",
  messagingSenderId: "823200549865",
  appId: "1:823200549865:web:0b1a19e3c2d46296b41978"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)