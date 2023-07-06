import React from 'react'
import { useDispatch } from 'react-redux';
import { signOutAction } from '../../../redux/ducks/userAuth';
import { signOut } from '../../../helpers/authHelper';
import { useNavigate } from 'react-router-dom';

export const SignOutButton = ({ user }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const signOutHandler = () => {
        
        if (user) {
            signOut()
            dispatch( signOutAction() );
            
            // cartItems.length>0 && alert("¡Tu carrito seguira activo!");

            navigate('/');

        }
    }

  return (
    <button className="block hover:text-primary-dark focus:outline-none" onClick={ signOutHandler }>
        Cerrar sesión
    </button>
  )
}
