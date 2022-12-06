import React, { useState } from 'react'
import { data } from '../data';
import { PaginationNumberCard } from './cards/PaginationNumberCard';
import { PrevPaginationButton } from './ui/buttons/PrevPaginationButton';
import { NextPaginationButton } from './ui/buttons/NextPaginationButton';

export const Pagination = ({ productsLength, productsPerPage, setData, data }) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(productsLength/productsPerPage); i++) {
        pageNumbers.push(i)
    }

    if (productsLength === undefined) {
        return <p></p>
    }

    const handlePage = (numb) => {
        setData(prev => {
            return {...prev, currentPage: numb}
        })
    }

    const handlePrevNext = (param) => {
        param === "prev" && 
            setData(prev => {
                return {...prev, currentPage: prev.currentPage-1}
            })
        param === "next" && 
            setData(prev => {
                return {...prev, currentPage: prev.currentPage+1}
            })
    }

    return (
        <div className="border-t-2 border-b-2 pt-4 pb-4">
            <PrevPaginationButton handlePrevNext={handlePrevNext} />

            {
                pageNumbers.map(numb => (
                    numb <= 3 && 
                        <PaginationNumberCard key={numb} data={data} numb={numb} handlePage={handlePage}/>
                ))
            }
            {
                pageNumbers.length > 3 && 
                    <span className="mx-2">...</span>
            }
            {
                pageNumbers.length > 3 && 
                    <PaginationNumberCard data={data} numb={pageNumbers[pageNumbers.length-1]} handlePage={handlePage}/>
            }
            
             <NextPaginationButton handlePrevNext={handlePrevNext} />
        </div>
    )
}
