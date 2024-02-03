// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, RecaptchaVerifier,GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage, ref } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgr4sY-ucmJqJC3HWYjhx4UT6cEenRICg",
  authDomain: "financebro-34794.firebaseapp.com",
  databaseURL:"https://financebro-34794-default-rtdb.firebaseio.com",
  projectId: "financebro-34794",
  storageBucket: "financebro-34794.appspot.com",
  messagingSenderId: "82767821313",
  appId: "1:82767821313:web:73d4cad9f098f682b19e00",
  measurementId: "G-6HEKFELPX8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export const storage = getStorage(app);
export const database = getDatabase(app)
export const  googleProvider = new GoogleAuthProvider()

export{fireDB, auth}
