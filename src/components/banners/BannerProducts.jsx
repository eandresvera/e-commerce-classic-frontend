import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { addToCart } from '../../redux/ducks/cart';

export const BannerProducts = ({ id, url, price, name, mobile_url }) => {

    const dispatch = useDispatch();

    const toastId = React.useRef(null);
    const notify = () => {
        if( !toast.isActive(toastId.current) ) {
            toastId.current = toast.success("Producto agregado al carrito!", { position: toast.POSITION.TOP_CENTER, });
            }
    };

    const addToCartHandler = () => {
        dispatch( addToCart(id, 1) );
        notify();
    }
    
    // console.log('ID: ', id)

    return (
        <div className="flex flex-wrap shadow-md bg-white flex-col items-center">

            <div className="">                

                <Link to={ `/product/${id}` }>
                    <img className="hidden sm:block h-80 w-96 object-cover" src={ url } alt={ url } />
                </Link>

                {/* Mobile dimensions */}
                <img className="flex sm:hidden h-64 w-48 sm:h-80 object-cover" src={ url } alt={ name } />

                <div className="flex relative justify-center px-4 py-2">
                    <div className="text-center absolute w-full -bottom-2 sm:-bottom-2">
                        <button 
                            className="p-4 sm:p-4 bg-primary-dark hover:bg-primary-main rounded-full focus:outline-none" 
                            aria-label="Agregar al carrito"
                            onClick={ addToCartHandler }
                        >
                            <FaShoppingCart className="text-white w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true"/>
                        </button>
                    </div>
                </div>

            </div>

            <div className="mt-3">

                <div className="py-5 text-center">
                    <p className="text-xs sm:text-sm">{ name }</p>
                </div>
                <div className="flex mt-1 mb-1 font-semibold justify-center align-bottom">
                    <p className="text-xs sm:text-md">{ price }</p>
                </div>

            </div>
        </div>
    )
}

