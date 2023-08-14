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

    const handleGoogleSignIn = async(e) => {
        e.preventDefault();

        try {
            const { user: userIsLogged } = await googleSignIn();
            console.log('asdasd');

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
        <button
            className="px-4 w-full flex justify-center py-2 border gap-2 border-slate-200 rounded-sm text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150"
            onClick={ handleGoogleSignIn }
        >
            <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" />
            <span>Iniciar sesión con Google</span>
        </button>
    )
}
