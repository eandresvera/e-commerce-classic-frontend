import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/ducks/cart';
import { ProductCard } from '../cart/ProductCard';
import { SubTotal } from '../cart/SubTotal';
import { useLocation, useParams } from 'react-router-dom';

export const CartScreen = ( props ) => {

    // console.log('Componente CartScreen Renderizado');

    const dispatch = useDispatch();
    let location = useLocation();

    let { productId } = useParams();
    const qty = location.search
        ? Number( location.search.split('=')[1] )
        : 1;

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart;

    useEffect(() => {

        productId && dispatch( addToCart( productId, qty) );
        // console.log(productId);

    }, [ dispatch, productId, qty ])

    if ( cartItems.length === 0) {
        return <div className="min-h-screen text-2xl justify-center flex sm:pt-24">Carrito vacio :(</div>
    }

    return (
        <div className="flex-container min-h-[30vh]" style={{ backgroundColor: 'rgb(234,237,237)' }}>

            <div  className="flex flex-1 sm:px-5 pt-5">
                <div className="flex flex-col w-full px-5 py-5 bg-white">

                    <div className="flex justify-between">
                        <h2 className="tittle-2xl">Carrito de compras</h2>
                        <h2 className="tittle-2xl hidden sm:block">Precio</h2>
                    </div>

                    <hr/>

                    <div className="pt-2">
                        {
                            cartItems.map( item => (
                                <div key={ item.id }>
                                    <ProductCard 
                                        productId={ item.id } 
                                        qty={ item.qty } 
                                        url={ item.url } 
                                        description={ item.description }
                                        price={ item.price }
                                        item={ item }
                                    />
                                    <hr />
                                </div>
                            ))
                        }
                    </div>

                </div>
            </div>

            <div className="sm:pr-5 sm:pt-5 sm:w-80 ">
                <div className="flex flex-col px-5 py-5 bg-white">
                    <SubTotal cartItems={ cartItems } history={ props.history }/>
                </div>
            </div>

        </div>
    )
}
