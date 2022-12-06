import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BigSpinner } from '../../ui/BigSpinner';

export const PointsScreen = () => {

    const dispatch = useDispatch();
    const { user } = useSelector(state => state.userAuth);

    if (user === undefined) {
        return <BigSpinner />
    }


    return (
        <div className="min-h-screen">
            puntos
        </div>
    )
}
