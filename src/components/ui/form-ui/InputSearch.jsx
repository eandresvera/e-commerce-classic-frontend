import React from 'react';
import { IconSearch } from '../../snippets/IconSearch';

export const InputSearch = ({ handleFilteredProducts, setSearchInputFocus }) => {
    
    const handleInputChange = (e) => {
        const value = e.target.value;
        handleFilteredProducts(value);
    }

    return (
        <div className='flex'>
            <input 
                id="search"
                type="search" 
                className="input-search"
                onChange={handleInputChange}
                onBlur={() => setSearchInputFocus(false)}
                onFocus={() => setSearchInputFocus(true)}
            />
            <button 
                className="search-input-btn"
            >
             O
            </button>
        </div>
    )
}
