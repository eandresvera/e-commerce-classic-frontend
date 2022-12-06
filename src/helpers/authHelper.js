import { auth, googleAuthProvider } from '../firebase';

export const signUp = ( email, pass ) => {
    return auth.createUserWithEmailAndPassword( email, pass );
}

export const signIn = ( email, pass ) => {
    return auth.signInWithEmailAndPassword( email, pass );
}

export const signOut = () => {
    auth.signOut();
}

export const googleSignIn = ( ) => {
    return auth.signInWithPopup( googleAuthProvider );
}

export const getCurrentUSerId = () => {
    const uid = auth.currentUser.uid;
    return uid;
}

