import React from 'react';
// import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';


export const PrivateRoute = ({ component: Component, ...rest }) => {

    const { user } = useSelector(state => state.userAuth)
    // const { user } = useSelector(state => state.userAuth);
    const isLogged = JSON.parse( localStorage.getItem('logged') ) ;

    console.log('<PrivateRoute>: ', user);

    return (

        <Route
            {...rest}
            
            component={(props) => (
                isLogged
                    ? <Redirect  to="/" />
                    : <Component  {...props} />
            )}
        />
    )
}

PrivateRoute.propTypes = {
    component : PropTypes.func.isRequired,
}