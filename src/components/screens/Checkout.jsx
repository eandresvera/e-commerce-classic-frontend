import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import { InputUnderline } from '../ui/form-ui/InputUnderline';
import { CommunesSelect } from '../ui/form-ui/CommunesSelect';
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingInfoAction } from '../../redux/ducks/cart';
import { BigSpinner } from '../ui/BigSpinner';
import { signInAction } from '../../redux/ducks/userAuth';
import { createUser, getUserInfo } from '../../helpers/dbHelper';
import { googleSignIn, signIn } from '../../helpers/authHelper';
import { DeliveryMethod } from '../ui/form-ui/DeliveryMethod';
import { PaymentMethod } from '../ui/form-ui/PaymentMethod';
import { GoogleSignInButton } from '../ui/buttons/GoogleSignInButton';

import { getCurrentUSerId } from '../../helpers/authHelper';
import axios from 'axios';

export const Checkout = ( props ) => {

    const dispatch = useDispatch();

    const [ error, setError ] = useState( null );

    const { user } = useSelector(state => state.userAuth);
    const { cartItems } = useSelector(state => state.cart);
    const {register, errors, handleSubmit} = useForm();
    const {register: signinRegister, errors: signinErrors, handleSubmit: signinSubmit} = useForm();
    
    const onSubmit = (data) => {
        dispatch( saveShippingInfoAction(data) );
        props.history.push('/placeorder');
    }
    
    // console.log('Componente Checkout Renderizado');

    const signInHandler = (data) => {

        signIn( data.signInEmail, data.pass )
            .catch( (error) => setError( error.message ) );
    }

    
    if (user === undefined) {
        return <BigSpinner />
    }

    // If there is cart items, render... 
    if (cartItems.length === 0) {
        
        props.history.goBack();
        return <div className="min-h-screen"></div>;
    }else{

        return (
            <div className="min-h-screen mb-5">
                <div className="grid grid-cols-2 centrar mt-14 gap-10 font-semibold">
                    
                    {/* Guest form */}
                    <div className="flex flex-col">
                        <form className="flex space-y-5 flex-col w-8/12" onSubmit={ handleSubmit( onSubmit ) }>
    
                            {
                                user
                                    ? <span className="tittle-3xl">{`Hola ${user.name}`}</span>
                                    : <span className="tittle-3xl">{'Compra como invitado'}</span>
                            }
    
                            {
                                (user && user.name) 
                                    ? <InputUnderline register={register} inputName='name' errors={errors} labelName='Nombre' value={user.name} /> 
                                    : <InputUnderline 
                                        register={register({ required: true, minLength:3, maxLength:20 })} 
                                        inputName='name' 
                                        errors={errors} 
                                        labelName='Nombre'
                                    /> 
                            }
                            { errors?.name?.type === "maxLength" && <span className="text-red-500 text-xs">Máximo 20 caracteres</span> }
                            { errors?.name?.type === "minLength" && <span className="text-red-500 text-xs">Mínimo 3 caracteres</span> }
    
                            {
                                (user && user.lastName) 
                                    ? <InputUnderline register={register} inputName='lastName' errors={errors} labelName='Apellido' value={user.lastName}/>
                                    : <InputUnderline register={register({ required: true, minLength:3, maxLength:20 })} inputName='lastName' errors={errors} labelName='Apellido'/> 
                            }
                            { errors?.lastName?.type === "maxLength" && <span className="text-red-500 text-xs">Máximo 20 caracteres</span> }
                            { errors?.lastName?.type === "minLength" && <span className="text-red-500 text-xs">Mínimo 3 caracteres</span> }
    
                            {
                                (user && user.rut) 
                                    ? <InputUnderline register={register} inputName='rut' errors={errors} labelName='Rut' value={user.rut}/>
                                    : <InputUnderline register={register({ required: true })} inputName='rut' errors={errors} labelName='Rut' placeholder='X.XXX.XXX-X'/>
                            }
                            
                            {
                                (user && user.email) 
                                    ? <InputUnderline register={register} inputName='email' errors={errors} labelName='Correo electrónico' value={user.email}/> 
                                    : <InputUnderline register={register({ required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} inputName='email' errors={errors} labelName='Correo electrónico' placeholder='Ejemplo@dominio.cl'/>
                            }
                            { errors?.email?.type === "pattern" && <span className="text-red-500 text-xs">Formato inválido</span> }
                            
                            {
                                (user && user.phone) 
                                    ? <InputUnderline register={register} inputName='phone' errors={errors} labelName='Teléfono' value={user.phone}/>
                                    : <InputUnderline register={register({ required: true })} inputName='phone' errors={errors} labelName='Teléfono' placeholder='9-99999999 (8 dígitos)' type="number"/>
                            }
                            
                            {
                                (user && user.address) 
                                    ? <InputUnderline register={register} inputName='address' errors={errors} labelName='Dirección' value={user.address}/> 
                                    : 
                                    <>
                                        <div className="flex justify-around space-x-4">
                                            <CommunesSelect register={register({ required: true })} errors={errors}/>
                                        </div>
                
                                        <InputUnderline register={register({ required: true })} inputName='address' errors={errors} labelName='Dirección' placeholder='Calle, número, departamento/casa'/>
                                    </>
                            }
    
                            
                            {/* Checkbox */}
                            <div className="flex flex-col">
    
                                <DeliveryMethod register={register}/>
    
    
                                <div className="flex flex-col mt-14  space-y-8 border border-gray-300 p-8">
                                    
                                    <PaymentMethod register={register}/>
    
                                    <button className="btn-turquoise" type="submit">
                                        Pagar
                                    </button>
                                </div>
    
    
                            </div>
                        </form>
                    </div>
    
                    {/* Sign in */}
                    <div className="flex flex-col">
                        <div className={ user ? 'hidden' : 'flex' }>
                            <form className="flex flex-col space-y-5 w-8/12 border border-gray-300 p-8" onSubmit={ signinSubmit(signInHandler) }>
                                <span className="flex justify-center text-3xl font-semibold mb-2">¿Tiénes una cuenta?</span>
                                
                                <InputUnderline 
                                    register={signinRegister}
                                    errors={signinErrors}
                                    inputName='signInEmail' 
                                    labelName='Rut'
                                />
    
                                <InputUnderline 
                                    register={signinRegister}
                                    errors={signinErrors}
                                    inputName='pass' 
                                    labelName='Contraseña' 
                                    type='password'
                                />
    
                                <button className="btn-turquoise" type="submit" onClick={ signInHandler }>
                                    Iniciar sesión
                                </button>
                                
                                <GoogleSignInButton />
    
                            </form>
                        </div>
                    </div>
    
                </div>
            </div>
        )
    }
    
}
