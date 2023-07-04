import React from 'react';
import { useNavigate } from 'react-router-dom';

export const SubTotal = ({ cartItems, history }) => {

    // console.log('<SubTotal> Renderizado');

    const navigate = useNavigate();
    const checkoutHandler = () => {
        navigate('/checkout');
    }
    

    return (
        <div>
            <h2 className="pb-2">                                                                      
                Subtotal ({ cartItems.reduce( ( a, x ) => a + x.qty, 0 ) }): ${ cartItems.reduce( ( a, x ) => a + ( x.price * x.qty ) , 0 ) }
                </h2>
            <button className="btn-turquoise focus:outline-none" onClick={ checkoutHandler }>
                Avanzar al pago
            </button>
        </div>
    )
}
