import React from 'react';

import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';


export const ProfileRoutes = ({ component: Component, ...rest }) => {

    // const { user } = useSelector(state => state.userAuth);
    const isLogged = JSON.parse( localStorage.getItem('logged') ) ;

    // console.log('<PrivateRoute>: ', isLogged);

    return (

        <Route
            {...rest}
            
            component={(props) => (
                !isLogged
                    ? <Redirect  to="/" />
                    : <Component  {...props} />
            )}
        />
    )
}

ProfileRoutes.propTypes = {
    component : PropTypes.func.isRequired,
}
