import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getCurrentUSerId } from '../helpers/authHelper';
import { BigSpinner } from './ui/BigSpinner';

export const WebpayPayment = () => {
    
    const endpoint = process.env.REACT_APP_SERVER_ENDPOINT; 
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
                const {data} = await axios.get(`${endpoint}/api/products/${id}`); 
                
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
                    
                const response = await axios.post(`${endpoint}/api/payment/webpay`, { sanitizedAmount, currentUserId, shippingInfo, arrayIdsQty });
                const { webpayResponse, buyOrder } = response.data;

                const { token, url } = webpayResponse;

                await axios.post(`${endpoint}/api/cart/active`, { buyOrder, currentUserId });

                setWebpay({ token, url });
            } catch (error) {        
                if (error.response) {
                    console.log(error.response);
                } else if (error.request) {
                    console.log("network error");
                } else {
                    console.log(error);
                }
            }
        }
 
        // Create an array of promises for each API request
        const allPromises = cartItems.map((e) => getTotal(e.id, e.qty));

        // Wait for all API requests to finish and then call webpayHandler()
        Promise.all(allPromises)
        .then((results) => {
            // results will be an array containing the results of each API request
            // Update sanitizedAmount and arrayIdsQty accordingly
            results.forEach((result, index) => {
                sanitizedAmount += result;
                arrayIdsQty.push({ id: cartItems[index].id, qty: result / cartItems[index].price });
            });

            // Now call webpayHandler()
            webpayHandler();
        })
        .catch((error) => {
            console.log(error.message);
        });

    }, [])

    useEffect(() => {

        (Object.entries(webpay).length > 0) && document.getElementById("webpayUrlAndTokenForm").submit();
    }, [webpay])


    return (
        <div className='h-screen'>
            <BigSpinner text={"Redireccionando a Transbank..."}/>
            <form id="webpayUrlAndTokenForm" method="post" action={webpay.url}>
                <input type="hidden" name="token_ws" defaultValue={webpay.token} />
            </form>
        </div>
    )
}
