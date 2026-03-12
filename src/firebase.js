import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDrgyp0coKWb1CYxKt-Aqkc47Jl3XHzLbU",
  authDomain: "wedding-invitation-b3fe5.firebaseapp.com",
  projectId: "wedding-invitation-b3fe5",
  storageBucket: "wedding-invitation-b3fe5.firebasestorage.app",
  messagingSenderId: "787852308262",
  appId: "1:787852308262:web:6fde06f87d55c0424a1be7",
  measurementId: "G-K3C101MLW1"
};

// Inisialisasi Firebase & Firestore
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);