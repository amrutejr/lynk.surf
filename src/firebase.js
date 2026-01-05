import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCEYe7WQl6M1w9wuwGfxZRA4wbVTHetpQ8",
    authDomain: "lynksurf-fc67d.firebaseapp.com",
    projectId: "lynksurf-fc67d",
    storageBucket: "lynksurf-fc67d.firebasestorage.app",
    messagingSenderId: "115547912250",
    appId: "1:115547912250:web:e6456f71c245df295a1d03",
    measurementId: "G-77SC66L79E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
export const analytics = getAnalytics(app);

export default app;
