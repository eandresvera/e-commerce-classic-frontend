import React from 'react'

export const PrevPaginationButton = ({ handlePrevNext }) => {
    return (
        <>
            <span 
                onClick={ () => handlePrevNext("prev")} 
                className="hidden md:inline-block cursor-pointer text-xs md:text-base"
            >
                Previous
            </span>
            <span 
                onClick={ () => handlePrevNext("prev")} 
                className="md:hidden cursor-pointer text-lg md:text-base"
            >
                &#8592;
            </span>
        </>
    )
}
