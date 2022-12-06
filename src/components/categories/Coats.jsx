import React from 'react'
import { RiShoppingCart2Line } from 'react-icons/ri'
import { Link, NavLink } from 'react-router-dom'
import { ProductCard } from '../cards/ProductCard'
import { FilterProducts } from './FilterProducts'

export const Coats = () => {
    return (
        <div className="min-h-screen md:mx-8">
            <div className="h-10 p-2">34 resultados</div>

            <div className="min-h-screen flex flex-col md:flex-row space-y-4 md:space-y-0">
                
                <FilterProducts />

                <div className="m-2 md:m-0 md:grid md:grid-cols-4 gap-4 space-y-2 md:space-y-0">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>

            </div>
        </div>
    )
}
