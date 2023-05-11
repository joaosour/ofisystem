import firebase from "firebase/app"
import "firebase/storage"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgtEG4dFdiaX3ZyUNLijVYKAIVq0-nwLM",
  authDomain: "ofisystem.firebaseapp.com",
  projectId: "ofisystem",
  storageBucket: "ofisystem.appspot.com",
  messagingSenderId: "1012530921291",
  appId: "1:1012530921291:web:364c2ec8db4584a89e72ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);