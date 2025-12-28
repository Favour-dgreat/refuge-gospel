import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// TODO: Replace with your actual Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyADpScSB9jLqDaY51hMoMNNofGPWPX5za8",
  authDomain: "refuge-gospel.firebaseapp.com",
  databaseURL: "https://refuge-gospel.firebaseio.com",
  projectId: "refuge-gospel",
  storageBucket: "refuge-gospel.firebasestorage.app",
  messagingSenderId: "505352555667",
  appId: "1:505352555667:web:db4869333bf37e41609166",
  measurementId: "G-7K0SS860YW"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
