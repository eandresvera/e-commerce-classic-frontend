import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children }) => {

    const {user} = useSelector(state => state.userAuth);

    if (!user) {
        return <Navigate to="/signin"/>
    }

    return (
        children
    )
}
