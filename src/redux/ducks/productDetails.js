import axios from "axios";
const serverEndpoint = 'https://e-commerce-classic-backend-q3ia.vercel.app';

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
        const { data } = await axios.get(`${serverEndpoint}/api/products/${productId}`);
        console.log(data);
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