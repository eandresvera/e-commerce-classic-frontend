import React from 'react';
import { FaTruckMoving, FaMoneyBill, FaStar } from 'react-icons/fa';
import { RiSecurePaymentFill } from 'react-icons/ri';

export const BannerIcons = () => {
    return (
        <div className="bg-white h-30v">
            <div className="text-xs lg:text-base flex flex-wrap h-full content-center justify-center container mx-auto">

                <div className="flex flex-col md:flex-row justify-center flex-1 space-x-4">
                    <div className="flex flex-wrap content-center justify-center">
                        <FaTruckMoving className="text-primary-main h-2/3 sm:h-full" size="50"/>
                    </div>
                    <div className="flex flex-col">
                        <span className=" font-semibold">Delivery gratis</span>
                        <span>Compras sobre $30.000</span>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-center flex-1 space-x-4">
                    <div className="flex flex-wrap content-center justify-center">
                        <FaMoneyBill className="text-primary-main h-2/3 sm:h-full" size="50"/>
                    </div>
                    <div className="flex flex-col">
                        <span className=" font-semibold">Garantía asegurada</span>
                        <span>Problemas en producto</span>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-center flex-1 space-x-4">
                    <div className="flex flex-wrap content-center justify-center">
                        <FaStar className="text-primary-main h-2/3 sm:h-full" size="50"/>
                    </div>
                    <div className="flex flex-col">
                        <span className=" font-semibold">Soporte online 24/7</span>
                        <span>Soporte personalizado</span>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-center flex-1 space-x-4">
                    <div className="flex flex-wrap content-center justify-center">
                        <RiSecurePaymentFill className="text-primary-main h-2/3 sm:h-full" size="50"/>
                    </div>
                    <div className="flex flex-col">
                        <span className=" font-semibold">Pago seguro</span>
                        <span>Pago asegurado 100%</span>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
