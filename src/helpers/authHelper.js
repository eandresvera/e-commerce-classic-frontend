import { auth, googleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup } from '../firebase';

export const signUp = ( email, pass ) => {
    return createUserWithEmailAndPassword( auth, email, pass );
}

export const signIn = ( email, pass ) => {
    return signInWithEmailAndPassword( auth, email, pass );
}

export const signOut = () => {
    auth.signOut();
}

export const googleSignIn = ( ) => {
    return signInWithPopup( auth, googleAuthProvider );
}

export const getCurrentUSerId = () => {
    const uid = auth.currentUser.uid;
    return uid;
}

