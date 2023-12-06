// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCTXmPV5I3eDpeHtL5VCPg8Ww6Bk9XMQQ",
  authDomain: "workspace-project-4f0fb.firebaseapp.com",
  projectId: "workspace-project-4f0fb",
  storageBucket: "workspace-project-4f0fb.appspot.com",
  messagingSenderId: "757991383814",
  appId: "1:757991383814:web:a90e35b9f314802b6f7487"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = new getAuth(app);