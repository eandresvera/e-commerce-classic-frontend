import React from 'react'

export const PaginationNumberCard = ({ numb, handlePage, data }) => {
    return (
        <span 
            className={`${data.currentPage === numb && ' text-blue-500 border-blue-500'} 
                cursor-pointer md:text-sm font-semibold bg-gray-100 rounded-md border border-gray-400 
                py-1 px-2 md:py-2 md:px-3 m-2 hover:bg-gray-300 text-xs`} 
            onClick={ () => handlePage(numb)}
            >
            {numb}
        </span>
    )
}
