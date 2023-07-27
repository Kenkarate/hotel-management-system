import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey:'AIzaSyBT6HHMCPARSqdK-qVM3M6JE2j6_LvzF5I',
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId:process.env.FIREBASE_MEASUREMENT_ID,
};

export const app = initializeApp(firebaseConfig);

