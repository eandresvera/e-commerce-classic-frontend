import axios from "axios";
import { data } from '../../data';

//Types
const PRODUCT_LIST_REQUEST = 'PRODUCT_LIST_REQUEST';
const PRODUCT_LIST_SUCCESS = 'PRODUCT_LIST_SUCCESS';
const PRODUCT_LIST_FAIL = 'PRODUCT_LIST_FAIL';

//Reducer
export default function reducer( state = { products: [] }, action ){

    switch ( action.type ) {

        case PRODUCT_LIST_REQUEST:
            return { loading: true };
        
        case PRODUCT_LIST_SUCCESS:
            return { loading: false, products: action.payload };

        case PRODUCT_LIST_FAIL:
            return { loading: false, error: action.payload };
    
        default:
            return state;
    }
}

//Actions
export const productListAction = () => async( dispatch ) => {

    dispatch({ type: PRODUCT_LIST_REQUEST });

    try {
        const { data } = await axios.get('/api/products');
        console.log(data);
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message})
    }
}

