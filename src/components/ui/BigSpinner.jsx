import React from 'react'

export const BigSpinner = () => {
    return (
        <div className="relative flex justify-center items-center h-screen">
            <div className="inline-block animate-spin ease duration-300 w-12 h-12 bg-primary-dark mx-2"></div>
        </div>
    )
}
