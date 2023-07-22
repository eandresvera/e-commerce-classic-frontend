import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUSerId } from '../../helpers/authHelper';
import { BigSpinner } from '../ui/BigSpinner';
import { Navigate, useNavigate } from 'react-router-dom';


export const PlaceOrderScreen = (props) => {
    
    const dispatch = useDispatch();
    const endpoint = process.env.REACT_APP_SERVER_ENDPOINT; 
    const cart = useSelector(state => state.cart); 
    const { shippingInfo, cartItems } = cart;
    let sanitizedAmount = 0; 
    const navigate = useNavigate();
    // Sanitized
    // return Qty*Price sanitized
    const getTotal = async( id, qty ) => {

        try {
            const {data} = await axios.get(`${endpoint}/api/products/${id}`); 
            const total = data.price*qty;
            return total;
        } catch (error) {
            console.log(error.message);
        }
    }
    
    const webpayHandler = () => {
        navigate('/webpayPayment')
    }
    
    const transferHandler = async() => {
        const currentUserId = getCurrentUSerId();
        const apiRequest = async( sanitizedAmount ) => {
            
            try {
                const res = await axios.post('/api/payment/transfer', {currentUserId, shippingInfo, sanitizedAmount});
                navigate('/paymentResponse')
            } catch (error) {
                console.log(error.message);
            }
        }
          
        // Sanitized
        // Send an api request for each product in cart
        // SanitizedAmount = sum of each api request  
        cartItems.map( (e,i) => 
            getTotal( e.id, e.qty )
                .then(e => {
                    sanitizedAmount+=e;

                    // If index belong to last element in array, do...
                    if (cartItems.length === i+1) {
                        apiRequest( sanitizedAmount );
                    }
                })
        )


    }

    // If there is shipping info in redux, render...
    if ( shippingInfo.length === 0 ) {
        props.history.goBack();
        return <div className="min-h-screen"></div>;
    }else{

        return (
            <div className="min-h-screen space-y-8 w-9/12 flex flex-col m-auto">
                <div>
                    <h2 className=" py-6 text-3xl m-auto text-center">                                                                      
                        Subtotal ({ cartItems.reduce( ( a, x ) => a + x.qty, 0 ) }): ${ cartItems.reduce( ( a, x ) => a + ( x.price * x.qty ) , 0 ) }
                    </h2>
                </div>
                <div class="overflow-x-auto w-full">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Nombre
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Apellido
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Email
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Teléfono
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Dirección
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Ciudad
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Rut
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {shippingInfo.name}
                                </th>
                                <td class="px-6 py-4">
                                    {shippingInfo.lastname}
                                </td>
                                <td class="px-6 py-4">
                                    {shippingInfo.email}
                                </td>
                                <td class="px-6 py-4">
                                    {shippingInfo.phone}
                                </td>
                                <td class="px-6 py-4">
                                    {shippingInfo.address}
                                </td>
                                <td class="px-6 py-4">
                                    {shippingInfo.city}
                                </td>
                                <td class="px-6 py-4">
                                    {shippingInfo.rut}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="flex flex-col items-center">
                    <span className='text-2xl'>Tipo de despacho</span>
                    <span class="text-primary-darkest">
                        {
                            shippingInfo.delivery 
                                ? 'Delivery' 
                                : 'Retiro en tienda'
                        }
                    </span>
                    <span className='text-2xl'>Método de pago</span>
                    <span class="text-primary-darkest">
                        {
                            shippingInfo.webpay ? 'WEBPAY' : 
                            shippingInfo.transfer ? 'transfer' : 
                            false
                        }
                    </span>
                </div>
    
                {
                    shippingInfo.webpay 
                        ? <div className='w-3/4 m-auto'><button className='btn-turquoise mt-2' onClick={ webpayHandler }>Pagar</button> </div>
                        : <div className='w-3/4 m-auto'><button className='btn-turquoise mt-2' onClick={ transferHandler }>Pagar</button></div> 
                }
    
                       
            
            
            </div>
        )
    }

}
