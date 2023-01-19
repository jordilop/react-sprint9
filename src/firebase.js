// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAeqV0m4Vz_PPc49QRCRR68k7sQuNog3Xc",
    authDomain: "react-sprint9.firebaseapp.com",
    projectId: "react-sprint9",
    storageBucket: "react-sprint9.appspot.com",
    messagingSenderId: "163676407402",
    appId: "1:163676407402:web:05f5288751199256446c13"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);