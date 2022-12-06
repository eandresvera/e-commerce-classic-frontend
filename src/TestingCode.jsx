import React from 'react'

export const TestingCode = () => {

    // const paymentMethod = {webpay: {
    //     "amount": 13000,
    //     "session_id": "sesion1234564",
    //     "transaction_date": "2021-04-07T04:37:10.114Z",
    //     "payment_type_code": "VD",
    //     "status": "AUTHORIZED",
    //     "installments_number": 0,
    //     "vci": "TSY",
    //     "card_detail": {
    //         "card_number": "7763"
    //     },
    //     "buy_order": "BO4",
    //     "authorization_code": "1415",
    //     "accounting_date": "0407",
    //     "response_code": 0
    // }};
    const paymentMethod = {transfer: { buyOrder:"123", date:'2021-04-07T21:40:04', total:'123000'}};

    return (
        <div className="min-h-screen">
            <div className="flex flex-col text-center centrar py-14">


                    <span className="text-3xl pb-5">¡Compra exitosa!</span>
                    <span className="">Recibiras un correo electrónico con los detalles a seguir.</span>
                    <span className="">Si no lo recibes en 5 minutos, revisa la carpeta "spam".</span>


                <div className="flex flex-col py-10 my-5 space-y-5 bg-gray-100">

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
                                    <span className=" font-semibold">Cuenta banco dde chile</span>
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
