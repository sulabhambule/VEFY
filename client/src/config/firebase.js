// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDrs6coJt1-9TK25zFHHP0TuJMh1YGswk4",
  authDomain: "vefy-7f2bb.firebaseapp.com",
  projectId: "vefy-7f2bb",
  storageBucket: "vefy-7f2bb.appspot.com",
  messagingSenderId: "633617647392",
  appId: "1:633617647392:web:611eddc45a1a232e43f945",
  measurementId: "G-21F54L8G0E"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);

export default firebaseConfig;