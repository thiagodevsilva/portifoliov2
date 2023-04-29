import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDHS8NaWglMahg_nBIILnSdc43_UksmnmY",
  authDomain: "devthiagosilva-94943.firebaseapp.com",
  projectId: "devthiagosilva-94943",
  storageBucket: "devthiagosilva-94943.appspot.com",
  messagingSenderId: "476430344506",
  appId: "1:476430344506:web:8369f3d6f5331a709db003",
  measurementId: "G-4K7Q290E6N"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
