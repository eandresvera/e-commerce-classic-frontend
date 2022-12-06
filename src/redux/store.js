import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import productList from './ducks/productsList';
import productDetails from './ducks/productDetails';
import cart from './ducks/cart';
import userAuth from './ducks/userAuth.js';


const rootReducer = combineReducers({
    productList: productList,
    productDetails: productDetails,
    cart: cart,
    userAuth: userAuth,
})

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore( 
    rootReducer,
    composeEnhancers( applyMiddleware( thunk ) )
);