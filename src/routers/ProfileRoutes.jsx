import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

export const ProfileRoutes = ({ component: Component, ...rest }) => {

    const { user } = useSelector(state => state.userAuth);
    // console.log('<PrivateRoute>: ', user);

    return (

        <Route
            {...rest}
            
            component={(props) => (
                !user
                    ? <Redirect  to="/" />
                    : <Component  {...props} />
            )}
        />
    )
}

ProfileRoutes.propTypes = {
    component : PropTypes.func.isRequired,
}
