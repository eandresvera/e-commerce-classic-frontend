import React from 'react'

export const NextPaginationButton = ({ handlePrevNext }) => {
    return (
        <>
            <span 
                onClick={ () => handlePrevNext("next")} 
                className="hidden md:inline-block cursor-pointer text-xs md:text-base"
            >
                Next
            </span>
            <span 
                onClick={ () => handlePrevNext("next")} 
                className="md:hidden cursor-pointer text-lg md:text-base"
            >
                &#8594;
            </span>
        </>
    )
}
