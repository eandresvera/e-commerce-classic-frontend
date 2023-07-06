import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getCurrentUSerId } from '../helpers/authHelper';
import { BigSpinner } from './ui/BigSpinner';

export const WebpayPayment = () => {

    const [webpay, setWebpay] = useState({ });
    const cart = useSelector(state => state.cart)
    const { shippingInfo, cartItems } = cart;

    let sanitizedAmount = 0; 
    let arrayIdsQty = []; // Array that contains { id, qty }

    useEffect(() => {

        // Sanitized
        // return Qty*Price sanitized
        const getTotal = async( id, qty ) => {

            const qtyAbsolute = Math.abs(qty);
            
            try {
                const {data} = await axios.get(`/api/products/${id}`); 
                
                if ( qtyAbsolute <= data.stock ) {
                    
                    // Push each item id and qty to an array 
                    arrayIdsQty.push( {id, 'qty':qtyAbsolute} );
                    return data.price * qtyAbsolute;

                } else {

                    const maxQty = data.stock;
                    arrayIdsQty.push( {id, 'qty':maxQty} );
                    return data.price * data.stock;
                }

            } catch (error) {
                console.log(error.message);
            }
        }
    
        const webpayHandler = async() => {

            try {
                const currentUserId = getCurrentUSerId();
                    
                const response = await axios.post('/api/payment/webpay', { sanitizedAmount, currentUserId, shippingInfo, arrayIdsQty });
                const { webpayResponse, buyOrder } = response.data;
                console.log("Webpaypayment-webpay response", response.data);
                const { token, url } = webpayResponse;
                
                const activeCart = await axios.post('/api/cart/active', { buyOrder, currentUserId });
                console.log("Webpaypayment-activeCart: ", activeCart)

                alert("logsdata")
                setWebpay({ token, url });

            } catch (error) {
                console.log(error);
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
                        webpayHandler();
                    }
                })
        )

    }, [])

    useEffect(() => {

        (Object.entries(webpay).length > 0) && document.getElementById("webpayUrlAndTokenForm").submit();
    }, [webpay])


    return (
        <div className='h-screen'>
            <BigSpinner />
            <form id="webpayUrlAndTokenForm" method="post" action={webpay.url}>
                <input type="hidden" name="token_ws" defaultValue={webpay.token} />
            </form>
        </div>
    )
}
