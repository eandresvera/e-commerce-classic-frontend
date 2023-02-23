import axios from 'axios';
const serverEndpoint = 'https://e-commerce-classic-backend-q3ia.vercel.app'; 

//Consts
//Initial state: empty array if cart is empty, otherwise the localstorage items
const initialState = {
    cartItems:  
        (localStorage.getItem('cartItems') 
            ? JSON.parse( localStorage.getItem('cartItems') ) 
            : []),
    shippingInfo: 
        (localStorage.getItem('shippingInfo') 
        ? JSON.parse( localStorage.getItem('shippingInfo') ) 
        : []),
}

//Types
const CART_ADD_ITEM = 'CART_ADD_ITEM';
const CART_REMOVE_ITEM = 'REMOVE_ITEM_CART';
const CART_SHIPPING_INFO = 'CART_SHIPPING_INFO';
const CART_DELETE_SHIPPING_INFO = 'CART_DELETE_SHIPPING_INFO';

//Reducer
export default function reducer( state = initialState, action ){

    let item, existItem;

    switch ( action.type ) {
        
        case CART_ADD_ITEM:
            item = action.payload; //This item is going to be added to the cart
            existItem = state.cartItems.find( x => x.id === item.id ) // Compare if the item id already exist in cart

            if ( existItem ) {

                return {
                    ...state, 
                    cartItems: state.cartItems.map( x => x.id === existItem.id ? item : x )
                };

            }else{

                return {
                    ...state, cartItems: [ ...state.cartItems, item]
                };
        }
    
        case CART_REMOVE_ITEM:

            return {
                ...state,
                cartItems: state.cartItems.filter( x => x.id !== action.payload )
            };
        
        case CART_SHIPPING_INFO:

            return {
                ...state,
                shippingInfo: action.payload
            };

        case CART_DELETE_SHIPPING_INFO:
            return { 
                ...state,
                shippingInfo: []
             }

        default:
            return state;
    }
}

//Actions
export const addToCart = ( productId, qty ) => async( dispatch, getState ) => {
 
    const { data } = await axios.get(`${serverEndpoint}/api/products/${productId}`);

    dispatch({
        type: CART_ADD_ITEM,
        payload: { 
            name: data.name,
            description: data.description,
            url: data.url,
            price: data.price,
            stock: data.stock,
            id: data.id,
            qty
         }
    });

    localStorage.setItem('cartItems', JSON.stringify( getState().cart.cartItems ));
}

export const removeFromCart = ( productId ) => async( dispatch, getState ) => {
 
    dispatch({ type: CART_REMOVE_ITEM, payload: productId });
    localStorage.setItem('cartItems', JSON.stringify( getState().cart.cartItems ))
}

export const saveShippingInfoAction = (data) => (dispatch) => {
 
    dispatch({ type: CART_SHIPPING_INFO, payload: data });
    localStorage.setItem('shippingInfo', JSON.stringify( data ))
}

export const deleteShippingInfoAction = () => (dispatch) => {

    const isShippingInfo = localStorage.getItem('shippingInfo');

    dispatch({ type: CART_DELETE_SHIPPING_INFO });
    isShippingInfo && localStorage.removeItem('shippingInfo');
}


