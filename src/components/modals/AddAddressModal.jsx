import React from 'react'
import { useForm } from 'react-hook-form';
import { CommunesSelect } from '../ui/form-ui/CommunesSelect'
import { InputUnderline } from '../ui/form-ui/InputUnderline'
import { getUserInfo, updateUserInfo } from '../../helpers/dbHelper'
import { updateUserInfoAction } from '../../redux/ducks/userAuth';
import { useDispatch } from 'react-redux';

export const AddAddressModal = ({ showModal, setShowModal }) => {

    const dispatch = useDispatch();
    const {register, errors, handleSubmit} = useForm();

    const onSubmit = (data) => {
        const address = {"address": data}
        updateUserInfo(address);
        dispatch( updateUserInfoAction() );

        setShowModal(!showModal);
    }

    return (
        <>
            {showModal && 

                <div className="h-full w-full bg-black bg-opacity-50 py-6 flex flex-col fixed  sm:py-12 z-10">
                    <div className="py-3 sm:max-w-xl sm:mx-auto">
                        <div className="bg-white min-w-1xl flex flex-col rounded-xl shadow-lg mx-5">

                            <form onSubmit={ handleSubmit( onSubmit ) }>
                                <div className="px-12 py-5 relative">
                                    <h2 className="text-gray-800 text-3xl font-semibold text-center">Guarda una dirección</h2>

                                    <button className='absolute right-3 top-3' onClick={() => setShowModal(!showModal)} aria-label="Close modal">X</button>

                                    <div className="flex flex-col items-center py-6 space-y-3">

                                        <div className="flex justify-around space-x-4 w-3/4">
                                            <CommunesSelect register={register({ required: true })} errors={errors}/>
                                        </div>
                    
                                        <InputUnderline register={register({ required: true })} inputName='address' errors={errors} labelName='Dirección' placeholder='Calle, número, departamento/casa'/>

                                    </div>
                                </div>

                                <div className="bg-gray-200 w-full flex flex-col items-center">
                                    <div className="w-3/4 flex flex-col">
                                        <button 
                                            className="py-3 my-8 text-lg bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl text-white"
                                            type="submit"
                                            >
                                                Agregar dirección
                                        </button>
                                    </div>
                                </div>
                            </form>
                            
                        </div>

                    </div>
                </div>

            }
        </>

    )
}
