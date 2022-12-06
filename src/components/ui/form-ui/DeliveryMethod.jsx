import React, { useState } from 'react'

export const DeliveryMethod = ({ register }) => {

    const [isSelected, setIsSelected] = useState({ store: true, delivery: false });

    return (
        <>
            <span>Tipo de despacho</span>
            <label className="inline-flex items-center mt-3">
                <input
                    ref={register}
                    checked={ isSelected.store }
                    name="store"
                    type="checkbox" 
                    className="h-4 w-4" 
                    onChange={ () => setIsSelected({ ...isSelected, store: !isSelected.store, delivery: !isSelected.delivery }) } 
                />
                <span className="ml-2 text-gray-700">Retiro en tienda</span>
            </label>
            <label className="inline-flex items-center mt-3">
                <input
                    ref={register}
                    checked={ isSelected.delivery }
                    name="delivery"
                    type="checkbox" 
                    className="h-4 w-4"
                    onChange={ () => setIsSelected({ ...isSelected, store: !isSelected.store, delivery: !isSelected.delivery }) } 
                />
                <span className="ml-2 text-gray-700">Despacho a domicilio</span>
            </label>
        </>
    )
}
