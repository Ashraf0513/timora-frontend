import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAJp48222-QI6TKOHt3Zgej45xKB7clASA",
  authDomain: "e-commerce-56a9e.firebaseapp.com",
  projectId: "e-commerce-56a9e",
  storageBucket: "e-commerce-56a9e.firebasestorage.app",
  messagingSenderId: "1082977916403",
  appId: "1:1082977916403:web:7002f75b6015a20a29ae86",
  measurementId: "G-SP3CXTDLT4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
const googleProvider=new GoogleAuthProvider();

export {auth,googleProvider}