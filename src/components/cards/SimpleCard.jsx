import React from 'react'

export const SimpleCard = ({ tittle, bg, url }) => {


    return (
        <div className={ `flex-1 lg:h-420px overflow-hidden ${ bg ? bg : 'bg-white' }` }>

            <div className="px-4 py-2">
                <h1 className="text-gray-900 text-start font-bold text-xl">{ tittle }</h1>
            </div>

            <img className=" h-80 w-full object-cover mt-2" src={ url } alt={ url }/>
            
            <div className="flex items-center justify-center px-4 py-2">
                <button className="text-sm text-blue-600 hover:text-primary-main">Ver más</button>
            </div>

        </div>
    )
}
