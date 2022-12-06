import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";

const app = firebase.initializeApp({
      apiKey: "AIzaSyAbBvKCXtiuFTgQMnFGE1vqyOYcuLpd7FQ",
      authDomain: "e-commerce-1efbb.firebaseapp.com",
      projectId: "e-commerce-1efbb",
      storageBucket: "e-commerce-1efbb.appspot.com",
      messagingSenderId: "384961300886",
      appId: "1:384961300886:web:49b4ea2ebc3dbed08cf5b7"
    })

    export const auth = app.auth();
    export const db = firebase.firestore();
    export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    export const ToGetCredential = firebase.auth;
    export default app;