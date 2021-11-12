import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCr-FpsnE2qPfgqixmxErkvd5Q1GjSE94o",
  authDomain: "fir-tutorial-cfdce.firebaseapp.com",
  projectId: "fir-tutorial-cfdce",
  storageBucket: "fir-tutorial-cfdce.appspot.com",
  messagingSenderId: "331612845965",
  appId: "1:331612845965:web:993672d9e4521ef8c6efc4",
  measurementId: "G-PSQ2HYW6B4",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
