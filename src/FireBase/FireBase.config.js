import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANAR8muBNM2NGQtE_TRE8D7FuTgaiRyss",
  authDomain: "auth-moha-milon-1d7a0.firebaseapp.com",
  projectId: "auth-moha-milon-1d7a0",
  storageBucket: "auth-moha-milon-1d7a0.appspot.com",
  messagingSenderId: "534114325725",
  appId: "1:534114325725:web:4b5b7b0889f711fd2cf734",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
