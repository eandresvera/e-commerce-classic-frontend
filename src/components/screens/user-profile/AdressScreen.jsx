import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BigSpinner } from '../../ui/BigSpinner';
import { TiPlus } from 'react-icons/ti';
import { AddAddressModal } from '../../modals/AddAddressModal';

export const AdressScreen = () => {

    const dispatch = useDispatch();
    const { user } = useSelector(state => state.userAuth);

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(!showModal);
    }

    if (user === undefined) {
        return <BigSpinner />
    }

    return (
        <>
            <AddAddressModal showModal={showModal} setShowModal={setShowModal} />

            <div className="min-h-screen centrar px-5">

                <div className="text-3xl py-6">
                    Mis direcciones
                </div>

                <div className="grid  md:grid-cols-4 gap-6">
                    
                    <button 
                        className="border-dashed flex flex-col items-center pt-14 border-4 h-52 border-gray-300"
                        onClick={ openModal }
                    >
                        <TiPlus className="h-12 w-12 text-gray-400"/>
                        Agregar o reemplazar dirección
                    </button>

                    { !user.address && <div>Sin direcciones</div> }

                    {
                        user.address &&
                        <div className="border flex flex-col h-52 border-gray-500">
                            <span className="p-2">
                                Principal
                            </span>

                            <hr className="border-solid w-full border-gray-200"/>

                            <div className="space-y-2 pt-2 grid grid-cols-1 px-2 overflow-hidden">
                                <span className="text-sm font-light">{user.address.address}</span>
                                <span className="text-sm font-light">{user.address.region}, {user.address.city}</span>
                            </div>

                            <div className="flex flex-1 relative">
                                <div className="bottom-0 absolute space-x-2 left-1/3">
                                    <button className="text-xs text-indigo-500">Editar</button>
                                    <span>|</span>
                                    <button className="text-xs text-indigo-500">Eliminar</button>
                                </div>
                            </div>
                        </div>
                    }

                </div>
            </div>
        </>
    )
}
