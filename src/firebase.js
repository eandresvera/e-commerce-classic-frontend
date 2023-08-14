import firebase from 'firebase/compat/app';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, setPersistence, browserSessionPersistence, onAuthStateChanged, updatePassword } from 'firebase/auth';
import { getFirestore, collection, doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';

const firebaseConfig = {
      apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
      authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
      storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.REACT_APP_FIREBASE_APP_ID
    }

    const app = initializeApp(firebaseConfig);
    const auth = getAuth();
    const db = getFirestore();
    const googleAuthProvider = new GoogleAuthProvider();

    export { auth, db, googleAuthProvider, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, collection, doc, setDoc, getDoc, updateDoc, updatePassword, setPersistence, browserSessionPersistence, onAuthStateChanged };
    export default app;