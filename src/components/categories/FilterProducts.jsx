import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { SmallLoader } from '../ui/SmallLoader';
import { SignOutButton } from '../ui/buttons/SignOutButton';
import { RiShoppingCart2Line } from 'react-icons/ri';
import { HamburgerButton } from '../ui/buttons/HamburgerButton';
import links from '../../menuData';

export const FilterProducts = ({ filter, setFilter }) => {

    const filterHandler = (event) => {
        if (filter.includes(event)) {
            const updatedFilter = filter.filter(item => item !== event);
            setFilter(updatedFilter);
        }else{
            setFilter([...filter, event])
        }
    }
    const [rangeValue, setRangeValue] = useState(0);
    const [ menu, setMenu ] = useState(false)
    const [ mobileMenu, setMobileMenu ] = useState(false);

    const handleRangeChange = (event) => {
      setRangeValue(event.target.value);
    };
    
    return (
        <div className="flex-1 mr-4 border-r-2 h-3/4">
            <div className="hidden md:flex md:flex-col min-h-screen">
                <div className={`w-full ${filter?.includes('free_shipping') && 'text-primary-main'}`}><button onClick={() => filterHandler('free_shipping')}>Envío gratis</button></div>
                <div className={`w-full ${filter?.includes('reviews') && 'text-primary-main'}`}><button onClick={() => filterHandler('reviews')}>Con reseñas</button></div>
                <div className=" w-full">
                    Precio
                    <div className='flex flex-col text-center w-2/3'>
                        <input type="range" id="price_range" name="price_range" min="0" max="1000000" onChange={handleRangeChange}/>
                        <span id="range_value">{rangeValue}</span>
                    </div>
                </div>
            </div>

            <div className=" inset-x-0 z-[100]">
                <div className="max-w-7xl grid grid-cols-2 mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative  justify-between h-16">
                        <HamburgerButton setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} filter={true}/>
                    </div>
                </div>
        
                <div
                    className={`filter_drawer w-screen p-10 h-screen space-y-4 bg-white text-2xl ${mobileMenu && 'fadein'}`}
                id="mobile-menu"
                >
                    <div className="px-2 pt-2 pb-3 space-y-4">
                    <div className={`w-full ${filter?.includes('free_shipping') && 'text-primary-main'}`}><button onClick={() => filterHandler('free_shipping')}>Envío gratis</button></div>
                <div className={`w-full ${filter?.includes('reviews') && 'text-primary-main'}`}><button onClick={() => filterHandler('reviews')}>Con reseñas</button></div>
                <div className=" w-full">
                    Precio
                    <div className='flex flex-col text-center w-2/3'>
                        <input type="range" id="price_range" name="price_range" min="0" max="1000000" onChange={handleRangeChange}/>
                        <span id="range_value">{rangeValue}</span>
                    </div>
                </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
