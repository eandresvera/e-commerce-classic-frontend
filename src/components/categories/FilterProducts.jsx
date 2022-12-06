import React from 'react'

export const FilterProducts = () => {
    return (
        <div className="flex-1 mr-4 border-r-2 h-3/4">
            <div className="hidden md:flex md:flex-col min-h-screen">
                <div className=" w-full">Free Shipping</div>
                <div className=" w-full">Avg. customer review</div>
                <div className=" w-full">Brand</div>
                <div className=" w-full">Price</div>
                <div className="h-40 w-full">Color</div>
                <div className="h-40 w-full">Condition</div>
            </div>

            <div className="md:hidden text-center">
                <input className="shadow appearance-none border rounded w-4/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text"  placeholder="Filter"/>
            </div>
        </div>
    )
}
