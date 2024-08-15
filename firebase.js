// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFi6eC2HXLRwNTUp6i8__u3CRuBVGYqQ4",
  authDomain: "flashcard-saas-901ef.firebaseapp.com",
  projectId: "flashcard-saas-901ef",
  storageBucket: "flashcard-saas-901ef.appspot.com",
  messagingSenderId: "434396865225",
  appId: "1:434396865225:web:a109b3283a9422a97a2318",
  measurementId: "G-C9PRDCBWSL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)

export {db}
