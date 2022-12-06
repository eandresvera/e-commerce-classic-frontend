import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BsFillLockFill } from 'react-icons/bs';
import { addToCart } from '../../redux/ducks/cart';
import { productDetailsAction } from '../../redux/ducks/productDetails';
import { Rating } from '../Rating';

export const ProductScreen = ( props ) => {

    // console.log('<ProductScreen> Renderizado');

    const toastId = React.useRef(null);
    const notify = () => {
        if( !toast.isActive(toastId.current) ) {
            toastId.current = toast.success("Producto agregado al carrito!", { position: toast.POSITION.TOP_CENTER, });
          }
      };

    const dispatch = useDispatch();
    const [ qty, setQty ] = useState(1);

    const productId = props.match.params.id;
    const productDetails = useSelector( state => state.productDetails );
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;
    const{ loading, product, error } = productDetails;

    useEffect(() => {

        dispatch( productDetailsAction(productId) );
    
    }, [dispatch, productId]);

    let qtyAvailable = null;
    const cartItemData = cartItems.filter( x => x.id === productId);
    if ( product && (cartItemData.length > 0) ) {
        qtyAvailable = product.stock-cartItemData[0].qty;
    }
    // console.log('<ProductScreen>: ', qtyAvailable);

    const addToCartRedirectHandler = () => {
        props.history.push(`/cart/${productId}?qty=${qty}`);
    }


    const addToCartNoRedirectHandler = () => {
        dispatch( addToCart(productId, Number(qty)) );
        notify();
    }

    if ( !product ) {
        return <div>{error}</div>
    }
    
    return (
        <div>
            <ToastContainer />

            <div className="min-h-screen pt-14 mb-36 text-sm pr-5 md:pr-0">
                <div className="flex flex-col text-xs lg:text-lg md:flex-row centrar space-x-6  max-h-screen">

                    {/* Mobile */}
                    <div className="md:hidden flex flex-col">
                        <div className="flex justify-center sm:text-lg font-semibold tracking-wider mb-5">
                            {product.title}
                        </div>
                        
                        <div className="flex justify-center mb-5">
                            <Rating rating={product.rating} reviewsNum={product.reviews_number}/>
                        </div>
                    </div>


                    <div className="flex justify-center">
                        <img className="max-h-70v lg:max-h-550 lg:max-w-550" src={product.url} alt=""/>
                    </div>
                    
                    <div className="flex flex-col flex-1 space-y-4 min-h-screen">

                        <div className="text-md  md:flex font-semibold tracking-wider">
                            {product.name}
                        </div>

                        <hr className="border-gray-300"/>

                        <div className="font-normal tracking-wider">
                            {product.description} 
                        </div>

                        <hr/>

                        <div className="hidden md:flex">
                            <Rating rating={product.rating} reviewsNum={product.reviews_number}/>
                        </div>

                        <hr className="border-gray-300 hidden md:flex"/>

                        {/* Especifications */}
                        <div className="font-light">
                            {
                                product.price &&
                                    <div>
                                        <span className="font-medium">Price:</span> 
                                        <span className="text-red-700">${product.price}</span> 
                                    </div>
                            }
                            {
                                product.colors && 
                                    <div className="flex">
                                        <span className="font-medium">Color:</span> 
                                        {product.colors.map(color => (
                                            <div className="border border-gray-800 rounded-full h-6 w-6 m-2 cursor-pointer" style={{backgroundColor: color}}></div>
                                        ))}
                                    </div>
                            }
                            {
                                product.sizes && 
                                    <div>
                                        <span className="font-medium">Size:</span>
                                        <select name="size">
                                            {product.sizes.map(size => (
                                                <option value={size}>{size}</option>
                                            ))}
                                        </select>
                                    </div>
                            }
                            {
                                product.vendor &&
                                    <div>
                                        <span className="font-medium">Vendor:</span> {product.vendor} 
                                    </div>
                            }
                        </div>

                    </div>

                    <div className="options-right-card ">

                        <div className="text-red-700">
                            ${product.price}
                        </div>

                        <div className="">
                            <Rating rating={product.rating} reviewsNum={product.reviews_number}/>
                        </div>

                        <div className="font-semibold">
                            { product.stock===0 && <span className="text-red-600">Producto no disponible</span> }
                            { (qtyAvailable===null && product.stock>0) && <span className="text-green-800">En stock</span> }
                            { qtyAvailable===0 && <span className="text-red-600">Quedan 0 disponibles</span> }
                            { (qtyAvailable>0&&qtyAvailable<5) && <span className="text-red-600">Quedan {qtyAvailable} disponibles</span> }
                            { (qtyAvailable>5||qtyAvailable===5) && <span className="text-green-800">En stock</span> }
                        </div>

                        <div className="">
                            Cantidad:
                            <select value={qty} onChange={ e => setQty( e.target.value ) }>
                                {
                                    [...Array( product.stock ).keys() ].map( x => (
                                        <option key={x+1} value={x+1}>{x+1}</option>
                                    ))
                                }
                            </select>
                        </div>

                        <div className="">
                            <button 
                                type="button"
                                disabled={ product.stock===0 || qtyAvailable===0 } 
                                className={ `btn-turquoise ${(product.stock===0 || qtyAvailable===0) && 'cursor-not-allowed'}`   } 
                                onClick={ addToCartNoRedirectHandler }
                            >
                                Agregar al carrito
                            </button>
                        </div>

                        <div className="">
                            <button 
                                type="button"
                                disabled={ product.stock===0 || qtyAvailable===0 }
                                className={ `btn-turquoise ${(product.stock===0 || qtyAvailable===0) && 'cursor-not-allowed'}`   } 
                                onClick={ () => addToCartRedirectHandler() }
                            >
                                    Comprar ahora
                            </button>
                        </div>

                        <div className="flex space-x-3">
                            <BsFillLockFill/>
                            <span className="text-indigo-600">Transaccion segura</span>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}
