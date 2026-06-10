// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuVmk3TDPFCgYqyvxH-YToNFfOfxMA2pg",
  authDomain: "safetybay-ac342.firebaseapp.com",
  projectId: "safetybay-ac342",
  storageBucket: "safetybay-ac342.firebasestorage.app",
  messagingSenderId: "454076451753",
  appId: "1:454076451753:web:8ed3e6c2dfd380450012b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);