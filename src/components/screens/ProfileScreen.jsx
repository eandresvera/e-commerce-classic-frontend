import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { BigSpinner } from '../ui/BigSpinner';
import { ProfileCard } from '../cards/ProfileCard';
import { SignOutButton } from '../ui/buttons/SignOutButton';

export const ProfileScreen = ( props ) => {

    const dispatch = useDispatch();
    const { user } = useSelector(state => state.userAuth);

    if (user === undefined) {
        return <BigSpinner />
    }

    return (
        <div >
            <div className="min-h-screen centrar">

                <div className="flex text-3xl py-6">
                    { user.photoURL && <img className="rounded-full mr-5" src={user.photoURL} alt=""/> }
                    <span>Mi cuenta</span>
                </div>

                <div className="grid grid-cols-3 gap-6">
                    <ProfileCard 
                        icon="user" 
                        tittle="Mis datos" 
                        subTittle="Nombre, apellido, teléfono, contraseña" 
                        url="personalinfo"
                    />
                    <ProfileCard 
                        icon="address" 
                        tittle="Mis direcciones" 
                        subTittle="Agrega y/o edita alguna dirección" 
                        url="address"
                    />
                    <ProfileCard 
                        icon="box" 
                        tittle="Mis Ordenes" 
                        subTittle="Revisa, sigue o descarga tus ordenes" 
                        url="orders"
                    />
                    <ProfileCard 
                        icon="star" 
                        tittle="Mis puntos" 
                        subTittle="Revisa tus puntos y canjéalos" 
                        url="points"
                    />
                    <SignOutButton user={user}/>
                </div>

            </div>
        </div>
    )
}
