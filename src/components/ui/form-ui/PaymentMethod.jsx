import React, { useState } from 'react'

export const PaymentMethod = ({ register }) => {

    const [isSelected, setIsSelected] = useState({ webpay: true, transfer: false });

    return (
        <>
            <span className="text-3xl">Método de pago</span>

            <label className="inline-flex items-center mt-3">
                <input
                    checked={ isSelected.webpay }
                    ref={register}
                    name="webpay" 
                    type="checkbox" 
                    className="h-4 w-4 border"  
                    onChange={ () => setIsSelected({ ...isSelected, webpay: !isSelected.webpay, transfer: !isSelected.transfer }) }  
                />
                <span className="ml-2 text-gray-700">Webpay</span>
            </label>
            <label className="inline-flex items-center mt-3">
                <input
                    checked={ isSelected.transfer }
                    ref={register} 
                    name="transfer"
                    type="checkbox" 
                    className="h-4 w-4"
                    onChange={ () => setIsSelected({ ...isSelected, webpay: !isSelected.webpay, transfer: !isSelected.transfer }) }  
                />
                <span className="ml-2 text-gray-700">Transferencia bancaria</span>
            </label>
        </>
    )
}
