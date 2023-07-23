import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { updatePass, updateUserInfo } from '../../../helpers/dbHelper';
import { BigSpinner } from '../../ui/BigSpinner';
import { InputUnderline } from '../../ui/form-ui/InputUnderline';

import { ToastContainer } from 'react-toastify';
import { auth } from '../../../firebase';
import { updateUserInfoAction } from '../../../redux/ducks/userAuth';

export const PersonalInfoScreen = () => {

    const dispatch = useDispatch();

    const {register, errors, handleSubmit} = useForm();
    const {register: passRegister, errors: passErrors, handleSubmit: passHandleSubmit} = useForm();

    const { user } = useSelector(state => state.userAuth);

    const removeEmptyFields = (data) => {
        Object.keys(data).forEach( key => {
            if ( data[key]==='' ) {
                delete data[key]
            }
        })
    }
    
    const onSubmit = (data) => {

        removeEmptyFields(data);

        (Object.entries(data).length > 0) && updateUserInfo( data );

        dispatch( updateUserInfoAction() );

        // Input nodes transformed into an array, and each input value to ""
        Array.from(document.querySelectorAll("input")).forEach(input => (input.value = ""));
    }
    
    const onSubmitPass = (data) => {
        
        data.newPass===data.setNewPass  
            ? updatePass( data.newPass )
            : alert('Las contraseñas no coinciden')
    }
    

    if (user === undefined) {
        return <BigSpinner />
    }

    // console.log(auth.currentUser.uid);
    return (
        <div className="min-h-screen">
            <div className={`grid centrar place-items-center py-12 ${!user.googleProvider ? 'grid-cols-2':'grid-cols-1'}`}>

                <form className="flex space-y-5 flex-col w-8/12 font-semibold" onSubmit={ handleSubmit( onSubmit ) }>
                <ToastContainer position="top-center" />

                    <InputUnderline 
                        register={register} 
                        inputName='name' 
                        errors={errors} 
                        labelName='Nombre' 
                        placeholder={user.name} 
                        noasterix={true}
                    /> 
                    <InputUnderline 
                        register={register} 
                        inputName='lastName' 
                        errors={errors} 
                        labelName='Apellido' 
                        placeholder={user.lastName} 
                        noasterix={true}
                    /> 
                    <InputUnderline 
                        register={register} 
                        inputName='rut' 
                        errors={errors} 
                        labelName='Rut' 
                        placeholder={user.rut} 
                        noasterix={true}
                    /> 
                    <InputUnderline 
                        register={register} 
                        inputName='phone' 
                        errors={errors} 
                        labelName='Teléfono' 
                        placeholder={user.phone} 
                        noasterix={true}
                    /> 
                    <InputUnderline 
                        disabled
                        register={register} 
                        inputName='email' 
                        errors={errors} 
                        labelName='Correo electrónico' 
                        placeholder={user.email} 
                        noasterix={true}
                    /> 
                    <button className="btn-turquoise" type="submit">Actualizar</button>
                </form>

                {
                    !user.googleProvider &&
                        <form className="flex space-y-5 flex-col w-8/12 font-semibold" onSubmit={ passHandleSubmit(onSubmitPass) }>
                            <InputUnderline 
                                type="password"
                                register={passRegister({required:true})} 
                                inputName='currentPass' 
                                errors={passErrors} 
                                labelName='Contraseña Actual' 
                                placeholder='******'  
                                noasterix={true}
                            /> 
                            <InputUnderline 
                                type="password"
                                register={passRegister({required:true})} 
                                inputName='newPass' 
                                errors={passErrors} 
                                labelName='Nueva contraseña'  
                                noasterix={true}
                            /> 
                            <InputUnderline 
                                type="password"
                                register={passRegister({required:true})} 
                                inputName='setNewPass' 
                                errors={passErrors} 
                                labelName='Confirmar contraseña' 
                                noasterix={true}
                            /> 
                            <button className="btn-turquoise" type="submit">Actualizar</button>
                        </form>
                }

            </div>
        </div>
    )
}
