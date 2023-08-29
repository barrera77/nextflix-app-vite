// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbaq7U4sF3qPVqK_ItVg-7tyPLTsW-ygc",
  authDomain: "nextflix-app-5af2d.firebaseapp.com",
  projectId: "nextflix-app-5af2d",
  storageBucket: "nextflix-app-5af2d.appspot.com",
  messagingSenderId: "1043594517725",
  appId: "1:1043594517725:web:7b32bd517dac2572900f34",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
