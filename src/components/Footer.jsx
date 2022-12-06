import React from 'react';
import { Link } from 'react-router-dom';

import { IoHeart } from 'react-icons/io5';

export const Footer = () => {
    return (
        <div className="bg-black text-xs h-60v sm:h-50v flex flex-wrap content-center">
            <div className="grid grid-cols-4 border-b border-white text-white p-8 space-x-20 centrar h-3/4">

                <div className="flex flex-col space-y-6 h-full">
                    <img className=" h-50" src="../assets/logo-white.png" alt=""/>
                    <span>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit, sed do eiusmod tempor incididunt cilisis.</span>
                </div>

                <div className="flex flex-col place-items-center h-full">
                    <span className="pb-4 text-primary-main">Quick Links</span>
                    <Link to="/" className="hover:text-primary-main">About</Link>
                    <Link to="/" className="hover:text-primary-main">Blogs</Link>
                    <Link to="/" className="hover:text-primary-main">Contact</Link>
                    <Link to="/" className="hover:text-primary-main">FAQ</Link>
                </div>

                <div className="flex flex-col place-items-center  h-full">
                    <span className="pb-4 text-primary-main">Security</span>
                    <Link to="/" className="hover:text-primary-main">My Account</Link>
                    <Link to="/" className="hover:text-primary-main">Orders tracking</Link>
                    <Link to="/" className="hover:text-primary-main">Checkout</Link>
                    <Link to="/" className="hover:text-primary-main">Wallet</Link>
                </div>

                <div className="hidden sm:flex flex-col h-full">
                    <img className=" w-24" src="../assets/webpay/12_Cuotas_FB_300px.png" alt=""/>
                    <img className="w-full" src="../assets/webpay/WebpayPlus_FN_300px.png" alt=""/>
                </div>
            </div>

            <div className=" text-gray-300 text-md font-thin py-5 w-full flex justify-center">
                © 2021 Pure Beauty &nbsp;|&nbsp; Desarrollado con &nbsp; 
                <IoHeart className="text-white font-bold"/> &nbsp; por &nbsp; 
                <span className="text-white">eapp.cl</span>
            </div>

        </div>
    )
}
