import 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCKpt6RBlvxqmwx6vETo8Me0mxYyXu7kV8",
  authDomain: "rubilink-website.firebaseapp.com",
  projectId: "rubilink-website",
  storageBucket: "rubilink-website.appspot.com",
  messagingSenderId: "478245385417",
  appId: "1:478245385417:web:d96fb7be2eeeeec201c918",
  measurementId: "G-9HV64JMWJT"
};

const firebase = initializeApp(firebaseConfig);
const firestore = getFirestore(firebase)
const db = getFirestore(firebase)

export { firebase, firestore, db }