import React, { useState } from 'react'
import { signInAction } from '../../../redux/ducks/userAuth';
import { getUserInfo } from '../../../helpers/dbHelper';
import { googleSignIn } from '../../../helpers/authHelper';
import { createUser } from '../../../helpers/dbHelper';
import { useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';

export const GoogleSignInButton = ({props}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleGoogleSignIn = async() => {

        try {
            const { user: userIsLogged } = await googleSignIn();

            if ( userIsLogged ) {
                const userExist = await getUserInfo();

                if ( !userExist ) {
                    const userInfo = {
                        name: userIsLogged.displayName, 
                        email: userIsLogged.email, 
                        photoURL: userIsLogged.photoURL, 
                        // uid: userIsLogged.uid,
                        googleProvider: true,
                    };
                    
                    createUser( userInfo );
                    dispatch( signInAction(userInfo) );
                }
                navigate('/');
            }

        } catch (e) {
            console.log(e.message);;
        }
    }

    return (
        <button className="btn-turquoise mt-2" type="submit" onClick={ handleGoogleSignIn }>
            Sign in with google
        </button>
    )
}
