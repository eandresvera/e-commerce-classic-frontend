import { getUserInfo } from "../../helpers/dbHelper";

//Types
const USER_SIGNIN_REQUEST = 'USER_SIGNIN_REQUEST';
const USER_SIGNIN_SUCCESS = 'USER_SIGNIN_SUCCESS';
const USER_UPDATE_INFO = 'USER_UPDATE_INFO';
const USER_SIGNIN_FAIL = 'USER_SIGNIN_FAIL';
const USER_SIGNOUT = 'USER_SIGNOUT';

//Reducer
export default function reducer( state = {}, action ) {

    switch ( action.type ) {
        
        case USER_SIGNIN_REQUEST:
            return { loading: true }

        case USER_SIGNIN_SUCCESS:
            return { user: action.payload, loading: false };
        
        case USER_SIGNIN_FAIL:
            return { user: action.payload, loading: false }

        case USER_SIGNOUT:
            return { user: null }
        
        case USER_UPDATE_INFO:
            return { user: action.payload, loading: false };
    
        default:
            return state;
    }
}

//Actions
export const signInAction = ( user ) => ( dispatch ) => {

    dispatch ({ type: USER_SIGNIN_REQUEST });

    user 
        ? dispatch({ type: USER_SIGNIN_SUCCESS, payload: user })
        : dispatch({ type: USER_SIGNIN_FAIL, payload: null })
}

export const signOutAction = () => (dispatch) => {

    dispatch({ type: USER_SIGNOUT })
}

export const updateUserInfoAction = () => (dispatch) => {
    
    getUserInfo()
        .then(user => {
            dispatch({ type: USER_UPDATE_INFO, payload: user });
        })
        .catch(e => console.log(e))
}


