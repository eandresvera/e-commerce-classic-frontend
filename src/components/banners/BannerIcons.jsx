import React from 'react';
import { FaTruckMoving, FaMoneyBill, FaStar } from 'react-icons/fa';
import { RiSecurePaymentFill } from 'react-icons/ri';

export const BannerIcons = () => {
    return (
        <div className="bg-white min-h-full">
            <div className="py-10 text-xs lg:text-base space-y-8 flex flex-col md:flex-row flex-wrap h-full content-center justify-center container mx-auto">

                <div className="flexflex-col md:flex-row justify-center flex-1 space-x-4">
                    <div className="flex flex-wrap content-center justify-center">
                        <FaTruckMoving className="text-primary-main h-2/3 sm:h-full" size="80"/>
                    </div>
                    <div className="flex text-center flex-col">
                        <span className=" font-semibold text-xl">Delivery gratis</span>
                        <span className=''>Compras sobre $30.000</span>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-center flex-1 space-x-4">
                    <div className="flex flex-wrap content-center justify-center">
                        <FaMoneyBill className="text-primary-main h-2/3 sm:h-full" size="80"/>
                    </div>
                    <div className="flex text-center flex-col">
                        <span className=" font-semibold text-xl">Garantía asegurada</span>
                        <span className=''>Problemas en producto</span>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-center flex-1 space-x-4">
                    <div className="flex flex-wrap content-center justify-center">
                        <FaStar className="text-primary-main h-2/3 sm:h-full" size="80"/>
                    </div>
                    <div className="flex text-center flex-col">
                        <span className=" font-semibold text-xl">Soporte online 24/7</span>
                        <span className=''>Soporte personalizado</span>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-center flex-1 space-x-4">
                    <div className="flex flex-wrap content-center justify-center">
                        <RiSecurePaymentFill className="text-primary-main h-2/3 sm:h-full" size="80"/>
                    </div>
                    <div className="flex text-center flex-col">
                        <span className=" font-semibold text-xl">Pago seguro</span>
                        <span className=''>Pago asegurado 100%</span>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
