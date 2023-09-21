// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD1mqjCWW-INxeS_BroSancSRiCj9bUsFQ",
    authDomain: "drag-drop-c5122.firebaseapp.com",
    projectId: "drag-drop-c5122",
    storageBucket: "drag-drop-c5122.appspot.com",
    messagingSenderId: "51205549629",
    appId: "1:51205549629:web:4b8c878c2674288f9d8454"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;