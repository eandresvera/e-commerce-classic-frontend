import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { RiShoppingCart2Line } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../../helpers/authHelper';
import { signOutAction } from '../../redux/ducks/userAuth';
import { SmallLoader } from './SmallLoader';

import { useNavigate } from "react-router-dom";

export const Navbar = (  ) => {

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const [ menu, setMenu ] = useState(false)

    const userAuth = useSelector(state => state.userAuth);
    const { loading, user } = userAuth;
        
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    const signOutHandler = () => {
        
        if (user) {
            signOut()
            dispatch( signOutAction() );
            
            cartItems.length>0 && alert("¡Tu carrito seguira activo!");

            navigate('/');

        }
    }

    const onMouseHandler = e => {
        e.type==='mouseenter' && setMenu(true);
        e.type==='mouseleave' && setMenu(false);
    }
    
    return (
        <div>

            <nav className="bg-gray-900 flex flex-col md:flex-row py-5 pl-2 md:pl-12 items-center text-white text-sm">

                {/* Mobile button */}   
                <div className="block md:hidden place-self-start">
                    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button>
                </div>

                <div className="hidden uppercase block place-self-start mt-5 md:mt-0 md:flex md:flex-row md:space-y-0 flex-col space-y-6 md:space-x-12">
                    <div className="flex content-start">
                        <NavLink 
                            to="/"
                            className={({ isActive }) => "hover:text-primary-light" + (isActive ? " text-primary-light" : "")}
                        >
                            Inicio
                        </NavLink>
                    </div>
                    <div className="flex content-start">
                        <NavLink 
                            to="/category/shoes"
                            className={({ isActive }) => "hover:text-primary-light" + (isActive ? " text-primary-light" : "")}
                        >
                            calzado
                        </NavLink>
                    </div>
                    <div className="flex content-start">
                        <NavLink 
                            to="/category/woman"
                            className={({ isActive }) => "hover:text-primary-light" + (isActive ? " text-primary-light" : "")}
                        >
                            mujer
                        </NavLink>
                    </div>
                    <div className="flex content-start">
                        <NavLink 
                            to="/category/accesories"
                            className={({ isActive }) => "hover:text-primary-light" + (isActive ? " text-primary-light" : "")}
                        >
                            accesorios
                        </NavLink>
                    </div>
                    <div className="flex content-start">
                        <NavLink 
                            to="/category/men"
                            className={({ isActive }) => "hover:text-primary-light" + (isActive ? " text-primary-light" : "")}
                        >
                            hombre
                        </NavLink>
                    </div>
                    <div className="flex content-start">
                        <NavLink 
                            to="/category/coats"
                            className={({ isActive }) => "hover:text-primary-light" + (isActive ? " text-primary-light" : "")}
                        >
                            abrigos
                        </NavLink>
                    </div>
                    <div className="flex content-start">
                        <NavLink 
                            to="/category/pants"
                            className={({ isActive }) => "hover:text-primary-light" + (isActive ? " text-primary-light" : "")}
                        >
                            pantalones
                        </NavLink>
                    </div>

                    <div className="absolute right-32 pb-4" onMouseEnter={ onMouseHandler } onMouseLeave={ onMouseHandler }>

                        {
                            // This orden validation is crucial
                            user === undefined
                                ? <SmallLoader/>
                                : user 
                                ? <Link to="/profile" className="flex flex-col text-xs normal-case" >{`Hola ${user.name}`}</Link>
                                : <Link to="/signin" className="flex flex-col text-xs" >Inicia sesión</Link>
                        }


                        {
                            (menu && user) &&
                                <div className="bg-gray-100 normal-case text-black absolute rounded-sm p-4 space-y-3 text-xs w-32 z-50">
                                    <Link to="/profile" className="block hover:text-primary-dark">Mi cuenta</Link>
                                    <Link to="/profile/personalinfo" className="block hover:text-primary-dark">Datos personales</Link>
                                    <Link to="/profile/orders" className="block hover:text-primary-dark">Ordenes</Link>
                                    <Link to="/profile/points" className="block hover:text-primary-dark">Puntos</Link>
                                    <button className="block hover:text-primary-dark focus:outline-none" onClick={ signOutHandler }>
                                        Cerrar sesión
                                    </button>
                                </div>
                        }

                    </div>
                </div>



                <div className="flex absolute right-9 space-x-10">
                    <div className="">

                        <Link to="/cart" className="flex" aria-label="Carrito">
                            <RiShoppingCart2Line size="2.6em" className="text-primary-main" aria-hidden="true"/>
                            <span className="vertical-align text-lg">
                                {
                                    cartItems.length>0 
                                        ? cartItems.reduce( ( a, x ) => a+x.qty, 0 )
                                        : 0
                                }
                            </span>
                        </Link>

                    </div>
                </div>

            </nav>
        </div>
    )
}