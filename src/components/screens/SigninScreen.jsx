import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { InputUnderline } from '../ui/form-ui/InputUnderline';
import { signUp, signIn } from '../../helpers/authHelper';
import { createUser } from '../../helpers/dbHelper';
import { GoogleSignInButton } from '../ui/buttons/GoogleSignInButton';
import { Navigate, useNavigate } from 'react-router-dom';
import { BigSpinner } from '../ui/BigSpinner';
import { useSelector } from 'react-redux';

export const SigninScreen = ( props ) => {

    const [ createAccountBtn, setCreateAccountBtn ] = useState( false );
    const [ error, setError ] = useState( null );
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const {user} = useSelector(state => state.userAuth)

    const { register, errors, handleSubmit } = useForm();
    const { register: register2, errors: errors2, handleSubmit: handleSubmit2 } = useForm();

    if (user) {
        navigate('/')
    }

    if (loading || user === undefined) {
        return <BigSpinner />
    }

    const signInHandler = (data) => {
        setLoading(true);

        signIn( data.email, data.pass )
            .then( () => navigate('/') )
            .catch( (error) => {
                setLoading(false);
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

    return (
        <div className="min-h-screen pt-5">
            <h5 className="text-3xl text-center">
                { !createAccountBtn ? 'Inicia sesión' : 'Crea una cuenta' }
            </h5>

            <div className={`centrar flex justify-center mt-20 ${createAccountBtn && 'hidden'}`}>
                <form className=" w-9/12 space-y-4 lg:w-5/12" onSubmit={ handleSubmit( signInHandler ) } >

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

                    <div className='space-y-4'>
                        <button className="btn-turquoise border rounded-sm" type="submit">Iniciar sesión</button>
                        <GoogleSignInButton props={props}/>
                    </div>

                </form>
            </div>

            <div className={`${createAccountBtn && 'hidden'} flex justify-center text-indigo-500 text-sm mt-4`}>
                <button onClick={ ()  => {setCreateAccountBtn( true )} }>Crear cuenta</button>
            </div>

            <div className={`centrar flex justify-center mt-20 ${!createAccountBtn && 'hidden'}`}>
                <form className="w-9/12" onSubmit={ handleSubmit2( signUpHandler ) } >
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
