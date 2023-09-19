import React, { useState } from 'react';
import { InputSearch } from '../ui/form-ui/InputSearch';
import { BannerSN } from '../banners/BannerSN';
import { useSelector } from 'react-redux';
import { FilteredProductsModal } from '../cards/FilteredProductsModal';

export const Header = () => {

    const { products } = useSelector(state => state.productList);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchInputFocus, setSearchInputFocus] = useState(false);
    
    const handleFilteredProducts = ( e ) => {
        if (e !== '') {
            const searchInputValue = e.toLowerCase();
            const filteredProducts = products.filter( product => product.name.toLowerCase().includes(searchInputValue) )
    
            setFilteredProducts(filteredProducts)
        }else{
            setFilteredProducts([])
        }
    }

console.log(searchInputFocus);

    return (
        <div className="bg-white">

            {/* <Navbar /> */}

            {/* Input + Logo + Social media */}
            <div className="h-20 md:h-40 min-h-full">

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 min-h-full justify-items-center">
                    <div className="flex">
                        <form className="form-focused relative focus-within:border-yellow-500">

                            <InputSearch handleFilteredProducts={handleFilteredProducts}/>
                            {
                                (filteredProducts.length !== 0) && 
                                    <FilteredProductsModal filteredProducts={filteredProducts} />
                            }
                            
                        </form>
                    </div>

                    <div className="hidden md:flex m-auto justify-center">
                        <img className="w-2/5 h-2/5 md:w-2/3" src="../assets/logo.png" alt=""/>
                    </div>

                    <BannerSN socialNetwork={{ facebook: 1, twitter: 1, instagram: 1, youtube: 1 }}/>

                </div>

            </div>

            {/* Mini Links */}

        </div>
    )
}
