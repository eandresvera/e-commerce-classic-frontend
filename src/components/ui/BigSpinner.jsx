import React from 'react'

export const BigSpinner = ({ text=false }) => {
    return (
        <div className="relative flex flex-col space-y-4 justify-center items-center h-screen">
            <span>
                {text && text}
            </span>
            <div className="inline-block animate-spin ease duration-300 w-12 h-12 bg-primary-dark mx-2"></div>
        </div>
    )
}
