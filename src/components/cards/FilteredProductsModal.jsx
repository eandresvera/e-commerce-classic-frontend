import React from 'react'

export const FilteredProductsModal = ({ filteredProducts }) => {
    return(
        <div className='w-full bg-black h-[500px] absolute p-2 z-20 space-y-2 text-white'>
        {
            filteredProducts.map( (prod, i) => (
                (i <= 6) 
                ?
                    <a className='w-full appearance-none h-14 flex space-x-8 hover:text-primary-main' key={i} href={`/product/${prod.id}`} target="_blank" rel="noopener noreferrer">
                        <div className='w-14'>
                            <img src={prod.url} alt="" className='w-20 h-14'/>
                        </div>
                        <span>
                            {prod.name}
                        </span>
                    </a>
                : (i === 7) ?
                // TODO: Show "see all" button that contains the searched word
                    <div className='w-full h-14 text-center' key={i}>
                        {/* <button className=' hover:text-primary-main'>
                            Ver todos los productos {'->'}
                        </button> */}
                    </div> 
                : null
            ))
        }
    </div>
    )
}
