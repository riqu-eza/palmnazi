import { initializeApp } from "firebase/app";
import {getFirestore, } from "firebase/firestore";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDIDUqLUu6do5yOw80FOTXXs5wlZutmicg",
  authDomain: "palmnazi-598d7.firebaseapp.com",
  projectId: "palmnazi-598d7",
  storageBucket: "palmnazi-598d7.appspot.com",
  messagingSenderId: "78675878598",
  appId: "1:78675878598:web:7aa61f0cea98c48111adc7",
  measurementId: "G-776D4PDRR3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  const firestore = getFirestore(app);
  export const Auth = getAuth();

  export {firestore};