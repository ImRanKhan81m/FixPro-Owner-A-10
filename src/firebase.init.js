// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMiU7Qm9nshFqNXXOYYULn549q6eh7aZI",
  authDomain: "fix-pro-service.firebaseapp.com",
  projectId: "fix-pro-service",
  storageBucket: "fix-pro-service.appspot.com",
  messagingSenderId: "588187698917",
  appId: "1:588187698917:web:3614b04390a9b44157760c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;