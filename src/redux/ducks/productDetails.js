import axios from "axios";
const endpoint = process.env.REACT_APP_SERVER_ENDPOINT;

//Types
const PRODUCT_DETAILS_REQUEST = 'PRODUCT_DETAILS_REQUEST';
const PRODUCT_DETAILS_SUCCESS = 'PRODUCT_DETAILS_SUCCESS';
const PRODUCT_DETAILS_FAIL = 'PRODUCT_DETAILS_FAIL';

//Reducer
export default function reducer( state = { product: [] }, action ){

    switch ( action.type ) {

        case PRODUCT_DETAILS_REQUEST:
            return { loading: true };
        
        case PRODUCT_DETAILS_SUCCESS:
            return { loading: false, product: action.payload };

        case PRODUCT_DETAILS_FAIL:
            return { loading: false, error: action.payload };
    
        default:
            return state;
    }
};

//Actions
export const productDetailsAction = ( productId ) => async( dispatch ) => {

    dispatch({ type: PRODUCT_DETAILS_REQUEST });

    try {
        const { data } = await axios.get(`${endpoint}/api/products/${productId}`);

        dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });

    } catch (error) {

        dispatch({ 
            type: PRODUCT_DETAILS_FAIL, 
            payload: 
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message     
        });
    }
}