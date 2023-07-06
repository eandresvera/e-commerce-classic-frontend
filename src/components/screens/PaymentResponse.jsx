import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUSerId } from '../../helpers/authHelper';
import { BigSpinner } from '../ui/BigSpinner';
import { deleteShippingInfoAction, removeFromCart } from '../../redux/ducks/cart';

export const PaymentResponse = (props) => {

    const dispatch = useDispatch();
    const [paymentMethod, setPaymentMethod] = useState({})
    const {user} = useSelector(state => state.userAuth);

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;
    
    useEffect(() => {

        // Empty cart
        cartItems.map( e => 
            dispatch( removeFromCart(e.id) )
        )
        
        const webpayResponse = async() => {

            if (user) {
                
                try {
                    
                    const currentUserId = getCurrentUSerId();
    
                    const buyOrderResponse = await axios.post('/api/cart/getBuyOrder', { currentUserId });
                    buyOrderResponse.data === 'no such document' && props.history.push('/');
    
                    const {buy_order} = buyOrderResponse.data;
    
                    const response = await axios.post('/api/payment/', { buy_order });
                    const {payment_method} = response.data;
        
                    Object.keys(payment_method)[0]==="Webpay" && setPaymentMethod({ webpay: payment_method.Webpay.response }); 
                    Object.keys(payment_method)[0]==="Transferencia" && setPaymentMethod({ transfer: response.data });  
                    
                    // After get the buy order belong to current uid, delete active_cart from firestore
                    await axios.post('/api/cart/deleteActive', { currentUserId });

                    // Delete shipping info from localStorage, set "shippingInfo: []" in redux
                    dispatch( deleteShippingInfoAction() );
    
                } catch (error) {
                    console.log(error.message);
                }

            }
            
        }

        webpayResponse();

    }, [user])

    if ( user === undefined ) {
        return <BigSpinner />
    }

    if (paymentMethod.webpay) {
        console.log(paymentMethod);
    }
    
    
    // If there is info about payment, render... 
    if (!Object.entries(paymentMethod).length > 0) {
        return <div className="min-h-screen"></div>;
    }else{

        if (paymentMethod.webpay && paymentMethod.webpay.response_code !== 0) {
            return (<div className="min-h-screen">
                <div>
                Transacción rechazada <br/>
                Motivo: 
                { (paymentMethod.webpay.response_code === -1) && `Posible error en el ingreso de datos de la transacción` }
                { (paymentMethod.webpay.response_code === -2) && `Se produjo fallo al procesar la transacción` }
                { (paymentMethod.webpay.response_code === -3) && `Interno Transbank` }
                { (paymentMethod.webpay.response_code === -4) && `Rechazada por parte del emisor` }
                { (paymentMethod.webpay.response_code === -5) && `Transacción con riesgo de posible fraude` }
                </div>
            </div>)
        }

        return (
            <div className="min-h-screen">
                <div className="flex flex-col text-center centrar py-14">


                        <span className="text-3xl pb-5">¡Compra exitosa!</span>
                        <span className="">Recibiras un correo electrónico con los detalles a seguir.</span>
                        <span className="">Si no lo recibes en 5 minutos, revisa la carpeta "spam".</span>

    
                    <div className="flex flex-col py-10 space-y-5 bg-gray-100">
    
                        {
                            paymentMethod.webpay && 
                            <div className="flex flex-col space-y-5">
                                    <span>Detalles del pago</span>
    
                                    <div className="grid grid-cols-2 space-x-14">
                                        <span className=" font-semibold">Orden de compra</span>
                                        <span>{paymentMethod.webpay.buy_order}</span>
                                    </div>
                                    <div className="grid grid-cols-2 space-x-14">
                                        <span className=" font-semibold">Código de autorización</span>
                                        <span>{paymentMethod.webpay.authorization_code}</span>
                                    </div>
                                    <div className="grid grid-cols-2 space-x-14">
                                        <span className=" font-semibold">Tarjeta {paymentMethod.webpay.payment_type_code}</span>
                                        <span>{paymentMethod.webpay.card_detail.card_number}</span>
                                    </div>
                                    <div className="grid grid-cols-2 space-x-14">
                                        <span className=" font-semibold">Número de cuotas</span>
                                        <span>{paymentMethod.webpay.installments_number}</span>
                                    </div>
                                    <div className="grid grid-cols-2 space-x-14">
                                        <span className=" font-semibold">Fecha transacción</span>
                                        <span>{paymentMethod.webpay.transaction_date.slice(0,10)}</span>
                                    </div>
                                    <div className="grid grid-cols-2 space-x-14">
                                        <span className=" font-semibold">Hora transacción</span>
                                        <span>{new Date(paymentMethod.webpay.transaction_date).toTimeString().slice(0, 8)}</span>
                                    </div>
                                    <div className="grid grid-cols-2 space-x-14">
                                        <span className=" font-semibold">Total</span>
                                        <span>$ {paymentMethod.webpay.amount}</span>
                                    </div>
    
                                </div>
                        }
                        
                        {
                            paymentMethod.transfer && 
                                <div className="flex flex-col space-y-5">
                                    <span>Datos transferencia bancaria</span>
    
                                    <div className="grid grid-cols-2 space-x-14">
                                        <span className=" font-semibold">Orden de compra</span>
                                        <span>{paymentMethod.transfer.buyOrder}</span>
                                    </div>
                                    <div className="grid grid-cols-2 space-x-14">
                                        <span className=" font-semibold">Cuenta Banco de Chile</span>
                                        <span>123123</span>
                                    </div>
                                    <div className="grid grid-cols-2 space-x-14">
                                        <span className=" font-semibold">Fecha</span>
                                        <span>{paymentMethod.transfer.date.slice(0,10)}</span>
                                    </div>
                                    <div className="grid grid-cols-2 space-x-14">
                                        <span className=" font-semibold">Hora</span>
                                        <span>{paymentMethod.transfer.date.slice(11)}</span>
                                    </div>
                                    <div className="grid grid-cols-2 space-x-14">
                                        <span className=" font-semibold">Total</span>
                                        <span>$ {paymentMethod.transfer.total}</span>
                                    </div>
                                </div>
                        }
    
    
                    </div>

                    {
                        paymentMethod.transfer && 
                            <div className="text-justify">
                                &bull; Los productos estarán disponibles para ser entregados o despachados una vez que se liberen los fondos en nuestra cuenta corriente. <br/>
                                &bull; Una vez transcurridas 12 horas, si no ha realizado el pago, se cancelará el pedido. <br/>
                                &bull; Los productos que no ofrezcan entrega inmediata, estarán disponibles para ser entregados 24 a 48 horas hábiles después de liberarse el depósito o transferencia bancaria. <br/>
                            </div>
                    }
    
                </div>
            </div>
        )
    }

}
