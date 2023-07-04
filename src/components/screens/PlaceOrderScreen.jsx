import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUSerId } from '../../helpers/authHelper';
import { BigSpinner } from '../ui/BigSpinner';
import { Navigate, useNavigate } from 'react-router-dom';


export const PlaceOrderScreen = (props) => {
    
    const dispatch = useDispatch();
    
    const cart = useSelector(state => state.cart); 
    const { shippingInfo, cartItems } = cart;
    let sanitizedAmount = 0; 
    const navigate = useNavigate();
    // Sanitized
    // return Qty*Price sanitized
    const getTotal = async( id, qty ) => {

        try {
            const {data} = await axios.get(`/api/products/${id}`); 
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
            <div className="min-h-screen space-y-8">
    
                <div className="flex flex-col">
                    <span>{shippingInfo.name}</span>
                    <span>{shippingInfo.lastName}</span>
                    <span>{shippingInfo.email}</span>
                    <span>{shippingInfo.phone}</span>
                    <span>{shippingInfo.address}</span>
                    <span>{shippingInfo.city} - {shippingInfo.region}</span>
                    <span>{shippingInfo.rut}</span>
    
                    Tipo de despacho
                    <span>
                        {
                            shippingInfo.delivery 
                                ? 'Delivery' 
                                : 'Retiro en tienda'
                        }
                    </span>
                    Metodo de pago 
                    <span>
                        {
                            shippingInfo.webpay ? 'WEBPAY' : 
                            shippingInfo.transfer ? 'transfer' : 
                            false
                        }
                    </span>
                </div>
    
                {
                    shippingInfo.webpay 
                        ? <button onClick={ webpayHandler }>Pagar</button> 
                        : <button onClick={ transferHandler }>Pagar</button> 
                }
    
                       
            
            
            </div>
        )
    }

}
