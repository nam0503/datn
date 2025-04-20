import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQLixlnvxnsQ5t-nV6D4CbVjZ902ObBWo",
  authDomain: "datn-55d00.firebaseapp.com",
  databaseURL: "https://datn-55d00-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "datn-55d00",
  storageBucket: "datn-55d00.firebasestorage.app",
  messagingSenderId: "471823881952",
  appId: "1:471823881952:web:437b827de90d1a4fb8e285",
  measurementId: "G-6M860GG1KV"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app); // Sử dụng getDatabase thay vì database
const auth = getAuth(app);
export { app, auth, db };
export const API_KEY = "AIzaSyDQLixlnvxnsQ5t-nV6D4CbVjZ902ObBWo";
