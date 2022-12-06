import React from 'react'
import { Link } from 'react-router-dom'
import { Rating } from '../Rating'

export const ProductCard = ({ product }) => {

    return (
        <div className="overflow-hidden h-48 md:h-96 md:w-64">
            <Link to={`/product/${product.id}`} className="w-full flex md:flex-col space-x-2 md:space-x-0 h-full">
                <img className="h-48 w-2/5 md:w-full object-cover" src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" alt="asdasd" />
                <div className="w-full md:w-full space-y-1">
                    <p className="mt-2 text-sm">
                        {product.description}
                    </p>
                    <h1 className="font-semibold text-lg">
                        ${product.price}
                    </h1>
                    <div>
                        <Rating rating={product.rating} reviewsNum={product.reviews_number}/>
                    </div>
                </div>
            </Link>

        </div>
    )
}
