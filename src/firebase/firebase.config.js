// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDm9JgVYpzmX0AjSTbhThMmcMSpYmB7fL0",
  authDomain: "brisk-learning-site.firebaseapp.com",
  projectId: "brisk-learning-site",
  storageBucket: "brisk-learning-site.appspot.com",
  messagingSenderId: "13949559744",
  appId: "1:13949559744:web:a058f25df269259a171e25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;