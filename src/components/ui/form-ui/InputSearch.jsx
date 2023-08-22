import React from 'react';

export const InputSearch = ({ handleFilteredProducts }) => {
    const handleInputChange = (e) => {
        const value = e.target.value;
        handleFilteredProducts(value);
    }

    return (
        <>
            <input 
                id="search"
                type="search" 
                className="input-search"
                onChange={handleInputChange}
            />
            <button 
                className="search-input-btn"
            >
                O
            </button>
        </>
    );
}
