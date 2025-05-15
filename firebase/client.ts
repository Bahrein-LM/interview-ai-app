import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAETZ6jZSWmwPMvn1QyzeiyUmlcQtKNx6o",
  authDomain: "interviewapp-af7bb.firebaseapp.com",
  projectId: "interviewapp-af7bb",
  storageBucket: "interviewapp-af7bb.firebasestorage.app",
  messagingSenderId: "31894507587",
  appId: "1:31894507587:web:cb114f06f846ddc57744f6",
  measurementId: "G-JSCL1ZBVYZ"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);