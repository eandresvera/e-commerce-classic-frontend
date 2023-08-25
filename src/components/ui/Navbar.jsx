import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { RiShoppingCart2Line } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { SmallLoader } from './SmallLoader';

import { useNavigate } from "react-router-dom";
import { MobileMenu } from './MobileMenu';
import { HamburgerButton } from './buttons/HamburgerButton';
import { SignOutButton } from './buttons/SignOutButton';
import links from '../../menuData';
import { IconUser } from '../snippets/IconUser';
import { IconCart } from '../snippets/IconCart';


export const Navbar = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const [ menu, setMenu ] = useState(false)
    const [ mobileMenu, setMobileMenu ] = useState(false);

    const userAuth = useSelector(state => state.userAuth);
    const { user } = userAuth;
        
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    const onMouseHandler = e => {
        e.type==='mouseenter' && setMenu(true);
        e.type==='mouseleave' && setMenu(false);
    }
    
    return (
        <nav className="bg-black fixed inset-x-0 top-0 z-[100] text-white">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">

                    <HamburgerButton setMobileMenu={setMobileMenu} mobileMenu={mobileMenu}/>

                    <div className="flex sm:items-stretch sm:justify-start">
                        {/* Logo */}
                        <a href="/" className='flex md:hidden'>
                            <div className="flex m-auto justify-center">
                                <img className="w-2/5 h-2/5 md:w-2/3" src="../assets/logo-white.png" alt="logo"/>
                            </div>
                        </a>
                        {/* DESKTOP LINKS */}
                        <div className="hidden md:block sm:ml-6">
                            <div className="flex space-x-4">
                            {/* Navbar links */}
                                {
                                    links.map( link => (
                                        <div className="flex content-start uppercase" key={link.name}>
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

                    <div className='flex items-center space-x-2 absolute right-0'>
                        <div onMouseEnter={ onMouseHandler } onMouseLeave={ onMouseHandler }>

                            {
                                // This orden validation is crucial
                                user === undefined
                                    ? <SmallLoader/>
                                    : user 
                                    ? <NavLink to="/profile" className="flex flex-col text-xs normal-case" >Hola <p className='text-primary-main'>{user.name}</p> </NavLink>
                                    : <NavLink to="/signin" className="flex flex-col text-xs" > <IconUser/> </NavLink>
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

                        <Link to="/cart" className="flex relative pr-3" aria-label="Carrito">
                            <IconCart />
                            {
                                cartItems.length>0 &&
                                <div className="absolute right-0 -top-2 text-xs  text-black bg-primary-main p-[3px] pr-2 pl-2 rounded-full" >
                                    {
                                        cartItems.reduce( ( a, x ) => a+x.qty, 0 )
                                    }
                                </div>
                            }
                        </Link>
                    </div>
                </div>
            </div>
    
            <div
                className={`navbar w-screen p-10 h-screen space-y-4 bg-black text-2xl ${mobileMenu && 'fadein'}`}
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