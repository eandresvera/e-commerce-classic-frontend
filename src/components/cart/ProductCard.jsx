import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FaTrashAlt } from 'react-icons/fa';

import { addToCart, removeFromCart } from '../../redux/ducks/cart';

export const ProductCard = ({ productId, qty, url, description, price, item }) => {

    // console.log('<ProductCard> Renderizado');

    const dispatch = useDispatch();

    const removeFromCartHandler = () => {
        dispatch( removeFromCart( productId ) );
    }
    

    return (
        <div className="flex">
            <div className="flex flex-col flex-shrink-0 mr-2 sm:mr-0 items-center h-20 w-20 sm:h-44 sm:w-44">
                <img className="h-16 w-16 sm:h-40 sm:w-40 bg-blue-500" src={ url } alt=""/>
            </div>
            
            <div className="flex flex-col flex-shrink mb-3 sm:mb-0">
                <div className="font-bold pb-2  sm:w-4/6">
                    <Link to={`/product/${productId}`} className="text-primary-darkest hover:text-yellow-700">
                        { description }
                    </Link>
                </div>
                <div className="sm:hidden text-yellow-800">
                    ${ price }
                </div>
                <div className=" text-green-800 text-xs">
                    En Stock
                </div>
                <div className="">
                    <select 
                        value={ qty }
                        onChange={ e => dispatch( addToCart( productId, Number(e.target.value) ) )}
                    >
                        {
                            [ ...Array( item.stock ).keys() ].map( x => (
                                <option key={ x+1 } value={ x+1 }>{ x+1 }</option>
                            ))
                        }
                    </select>
                </div>
            </div>

            <div className="hidden sm:flex flex-1 justify-end font-semibold" onClick={ removeFromCartHandler }>
                <FaTrashAlt className="text-red-700 cursor-pointer" size="25"/>
            </div>
            <div className="hidden sm:flex flex-auto justify-end font-semibold">
                ${ price }
            </div>

        </div>
    )
}
