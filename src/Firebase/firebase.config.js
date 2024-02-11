// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkCSnBlfWkgxpg67jA2Bhwk2QXUjsyn4U",
  authDomain: "auth-moha-milon-cb52f.firebaseapp.com",
  projectId: "auth-moha-milon-cb52f",
  storageBucket: "auth-moha-milon-cb52f.appspot.com",
  messagingSenderId: "330088040036",
  appId: "1:330088040036:web:7a245bc52e77fed2908171",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
