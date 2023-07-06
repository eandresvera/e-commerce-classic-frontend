import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { RiShoppingCart2Line } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { SmallLoader } from './SmallLoader';

import { useNavigate } from "react-router-dom";
import { MobileMenu } from './MobileMenu';
import { HamburgerButton } from './buttons/HamburgerButton';
import { SignOutButton } from './buttons/SignOutButton';
import links from '../../menuData'

export const Navbar = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const [ menu, setMenu ] = useState(false)
    const [ mobileMenu, setMobileMenu ] = useState(null);

    const userAuth = useSelector(state => state.userAuth);
    const { user } = userAuth;
        
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    const onMouseHandler = e => {
        e.type==='mouseenter' && setMenu(true);
        e.type==='mouseleave' && setMenu(false);
    }
    console.log(mobileMenu)
    
    return (
        <nav className="bg-black fixed inset-x-0 top-0 z-[100] text-white">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">

                    {/* BUTTONS */}
                    <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2  hover:text-primary-main focus:outline-none"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                            onClick={() => setMobileMenu(!mobileMenu)}
                        >
                            <span className="sr-only">Abrir menú</span>
                            <svg
                            className={`${mobileMenu ? 'hidden' : 'block'} h-6 w-6`}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                            </svg>
                            <svg
                            className={`${mobileMenu ? 'block' : 'hidden'} h-6 w-6`}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                            </svg>
                        </button>
                    </div>

                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                    {/* Logo */}
                    {/* <div className="flex-shrink-0 flex items-center">
                        <span className="text-white text-lg font-semibold">Logo</span>
                    </div> */}

                        {/* DESKTOP LINKS */}
                    <div className="hidden md:block sm:ml-6">
                        <div className="flex space-x-4">
                        {/* Enlaces de la barra de navegación */}
                                    {
                                links.map( link => (
                                    <div className="flex content-start" key={link.name}>
                                        <NavLink 
                                            to={link.path}
                                            className={({ isActive }) => "hover:text-primary-light" + (isActive ? " text-primary-light" : "")}
                                        >
                                        {link.name}
                                    </NavLink>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    </div>

                    <div className='flex items-center space-x-2 '>
                        <div onMouseEnter={ onMouseHandler } onMouseLeave={ onMouseHandler }>

                            {
                                // This orden validation is crucial
                                user === undefined
                                    ? <SmallLoader/>
                                    : user 
                                    ? <NavLink to="/profile" className="flex flex-col text-xs normal-case" >Hola <p className='text-primary-main'>{user.name}</p> </NavLink>
                                    : <NavLink to="/signin" className="flex flex-col text-xs" >Inicia sesión</NavLink>
                            }


                            {
                                (menu && user) &&
                                    <div className="hidden md:block bg-gray-100 normal-case text-black absolute rounded-sm p-4 space-y-3 text-xs w-32 z-50">
                                        <NavLink to="/profile" className="block hover:text-primary-dark">Mi cuenta</NavLink>
                                        <NavLink to="/profile/personalinfo" className="block hover:text-primary-dark">Datos personales</NavLink>
                                        <NavLink to="/profile/orders" className="block hover:text-primary-dark">Ordenes</NavLink>
                                        <NavLink to="/profile/points" className="block hover:text-primary-dark">Puntos</NavLink>
                                        <SignOutButton user={user}/>
                                    </div>
                            }

                        </div>

                        <Link to="/cart" className="flex" aria-label="Carrito">
                            <RiShoppingCart2Line size="2em" className="text-primary-main" aria-hidden="true"/>
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
            </div>
    
            <div
                className={`md:hidden opacity-0 absolute overflow-hidden w-screen p-10 h-screen space-y-4 bg-black ${mobileMenu && 'block animate-slideInLR'} ${mobileMenu===false && ' animate-slideOutLR'}`}
            id="mobile-menu"
            >
                <div className="px-2 pt-2 pb-3 space-y-4">
                {
                    links.map( link => (
                        <div className="flex content-start" key={link.name}>
                            <NavLink 
                                to={link.path}
                                className={({ isActive }) => "hover:text-primary-light" + (isActive ? " text-primary-light" : "")}
                                onClick={ ()=> setMobileMenu(!mobileMenu) }
                            >
                            {link.name}
                        </NavLink>
                        </div>
                    ))
                }
                </div>
            </div>
        </nav>
    )
}