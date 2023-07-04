import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { InputUnderline } from '../ui/form-ui/InputUnderline';
import { signUp, signIn } from '../../helpers/authHelper';
import { createUser } from '../../helpers/dbHelper';
import { GoogleSignInButton } from '../ui/buttons/GoogleSignInButton';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BigSpinner } from '../ui/BigSpinner';

export const SigninScreen = ( props ) => {

    const [ createAccountBtn, setCreateAccountBtn ] = useState( false );
    const [ error, setError ] = useState( null );

    const { register, errors, handleSubmit } = useForm();
    const { register: register2, errors: errors2, handleSubmit: handleSubmit2 } = useForm();

    const { user, loading } = useSelector(state => state.userAuth)

    const signInHandler = (data) => {

        signIn( data.email, data.pass )
            .then( () => <Navigate to="/" /> )
            .catch( (error) => {
                setError( error.message );
                console.log(error);
            });
    }

    const signUpHandler = async(data) => {

        try {
            const userCred = await signUp( data.email, data.pass );
            const { pass, ...dataWithoutPass } = data;

            createUser( dataWithoutPass );
            <Navigate to="/"/>

        } catch (error) {
            setError( error.message )
        }
    }

    if (user) {
        return <Navigate to="/" />
    }

    return (
        <div className="min-h-screen">
            <h5 className="text-3xl text-center">
                { !createAccountBtn ? 'Inicia sesión' : 'Crea una cuenta' }
            </h5>

            <div className={`centrar flex justify-center mt-20 ${createAccountBtn && 'hidden'}`}>
                <form className=" w-3/12" onSubmit={ handleSubmit( signInHandler ) } >

                    { error && <span className='text-red-500 w-3/12'>{error}</span> }
                    
                    <InputUnderline 
                        inputName='email' 
                        labelName='Correo electrónico' 
                        register={register} 
                        errors={errors}
                    />
                    <InputUnderline 
                        inputName='pass' 
                        labelName='Contraseña' 
                        type='password' 
                        register={register} 
                        errors={errors}
                    />

                    <button className="btn-turquoise" type="submit">Iniciar sesión</button>
                    <GoogleSignInButton props={props}/>


                </form>
            </div>

            <div className={`${createAccountBtn && 'hidden'} flex justify-center text-indigo-500 text-sm mt-4`}>
                <button onClick={ ()  => {setCreateAccountBtn( true )} }>Crear cuenta</button>
            </div>

            <div className={`centrar flex justify-center mt-20 ${!createAccountBtn && 'hidden'}`}>
                <form className="w-3/12" onSubmit={ handleSubmit2( signUpHandler ) } >
                { error && <span className='text-red-500 w-3/12'>{error}</span> }
                    <InputUnderline 
                        inputName='email' 
                        labelName='Correo electrónico' 
                        register={register2} 
                        errors={errors2}
                    />
                    <InputUnderline 
                        inputName='name' 
                        labelName='Nombre' 
                        register={register2} 
                        errors={errors2}
                    />
                    <InputUnderline 
                        inputName='lastName' 
                        labelName='Apellido' 
                        register={register2} 
                        errors={errors2}
                    />
                    <InputUnderline 
                        inputName='rut' 
                        labelName='Rut' 
                        register={register2} 
                        errors={errors2}
                    />
                    <InputUnderline 
                        inputName='pass' 
                        labelName='Contraseña' 
                        type='password' 
                        register={register2} 
                        errors={errors2}
                    />

                    <button className="btn-turquoise" type="submit">
                        Crear cuenta
                    </button>


                </form>
            </div>
            
            <div className={`${!createAccountBtn && 'hidden'} flex justify-center text-indigo-500 text-sm mt-4`}>
                <button onClick={ ()  => {setCreateAccountBtn( false )} }>¿Tienés una cuenta?</button>
            </div>
        </div>
    )
}
