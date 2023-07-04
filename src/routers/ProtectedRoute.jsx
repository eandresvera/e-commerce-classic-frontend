import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';
import { BigSpinner } from '../components/ui/BigSpinner';

export const ProtectedRoute = ({ children }) => {

    const {user, loading} = useSelector(state => state.userAuth);
    console.log(`ProtectedRoute: ${loading}`)

    if (user === undefined) {
        return <Navigate to="/signin"/>
    }

    return (
        children
    )
}
