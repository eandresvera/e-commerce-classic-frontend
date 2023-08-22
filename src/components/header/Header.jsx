import React, { useState } from 'react';
import { InputSearch } from '../ui/form-ui/InputSearch';
import { BannerSN } from '../banners/BannerSN';
import { useSelector } from 'react-redux';

export const Header = () => {

    const { products } = useSelector(state => state.productList);
    const [filteredProducts, setFilteredProducts] = useState([]);
    
    const handleFilteredProducts = ( e ) => {
        const searchInputValue = e.toLowerCase();
        const filteredProducts = products.filter( product => product.name.toLowerCase().includes(searchInputValue) )

        setFilteredProducts(filteredProducts)
    }

    console.log(filteredProducts);

    return (
        <div className="bg-white">

            {/* <Navbar /> */}

            {/* Input + Logo + Social media */}
            <div className="h-20 md:h-40 min-h-full">

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 min-h-full justify-items-center">

                    <div className="hidden md:flex">
                        <form className="form-focused relative focus-within:border-yellow-500">

                            <InputSearch handleFilteredProducts={handleFilteredProducts}/>
                            {
                                (filteredProducts.length !== 0) && 
                                <div className='w-full bg-black h-[500px] absolute z-20'>
                                </div>
                            }
                            
                        </form>
                    </div>

                    <div className="flex m-auto justify-center">
                        <img className="w-2/5 h-2/5 md:w-2/3" src="../assets/logo.png" alt=""/>
                    </div>

                    <BannerSN socialNetwork={{ facebook: 1, twitter: 1, instagram: 1, youtube: 1 }}/>

                </div>

            </div>

            {/* Mini Links */}

        </div>
    )
}
