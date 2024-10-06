import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB34kjfyesuhhW339O13uT_7p1PcXTSR1k",
  authDomain: "muahib-74ab8.firebaseapp.com",
  projectId: "muahib-74ab8",
  storageBucket: "muahib-74ab8.appspot.com",
  messagingSenderId: "594416690937",
  appId: "1:594416690937:web:111a0b1d72a713682e2428",
  measurementId: "G-2SCQDMQ2C0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);