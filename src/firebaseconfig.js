// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlefUd7T6Q-KmodAd6OWsf5EcxKLSAyW0",
  authDomain: "linked-in-clone-a7df6.firebaseapp.com",
  projectId: "linked-in-clone-a7df6",
  storageBucket: "linked-in-clone-a7df6.appspot.com",
  messagingSenderId: "972656413164",
  appId: "1:972656413164:web:10dea6c3c95fe84e1a58c9",
  measurementId: "G-RRWPV2MQBS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
