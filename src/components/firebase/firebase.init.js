// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD2V49OFrlHOqPk3CEMKEgoJMUWqJVoklQ",
    authDomain: "freshharvest-f0847.firebaseapp.com",
    projectId: "freshharvest-f0847",
    storageBucket: "freshharvest-f0847.firebasestorage.app",
    messagingSenderId: "426626995845",
    appId: "1:426626995845:web:8921246e598b92010a3bec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth= getAuth(app);
export default app;