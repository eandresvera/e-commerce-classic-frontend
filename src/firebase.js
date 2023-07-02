import firebase from 'firebase/compat/app';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
      apiKey: "AIzaSyAbBvKCXtiuFTgQMnFGE1vqyOYcuLpd7FQ",
      authDomain: "e-commerce-1efbb.firebaseapp.com",
      projectId: "e-commerce-1efbb",
      storageBucket: "e-commerce-1efbb.appspot.com",
      messagingSenderId: "384961300886",
      appId: "1:384961300886:web:49b4ea2ebc3dbed08cf5b7"
    }

    const app  = initializeApp(firebaseConfig);
    export const auth = getAuth(app);
    export const db = getFirestore(app);
    export const googleAuthProvider = new GoogleAuthProvider();
    export const ToGetCredential = firebase.auth;
    export default app;