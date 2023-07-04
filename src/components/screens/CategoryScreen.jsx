import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Slide } from 'react-toastify'
import { getProducts } from '../../helpers/dbHelper'
import { productListAction } from '../../redux/ducks/productsList'
import { ProductCard } from '../cards/ProductCard'
import { Pagination } from '../Pagination'
import { FilterProducts } from '../categories/FilterProducts'
import { useParams } from 'react-router-dom'
import { BigSpinner } from '../ui/BigSpinner'

export const CategoryScreen = () => {

    const dispatch = useDispatch();
    const { products } = useSelector(state => state.productList);
    const [data, setData] = useState({ currentPage: 1, productsPerPage: 8 });
    const { category } = useParams();

    useEffect(() => {
        dispatch(productListAction(category))
    }, [dispatch, category]) 

    if (products === undefined) {
        return <BigSpinner />
    }

    // console.log('<CategoryScreen>: ', category);

    const lastProductIndex = data.currentPage * data.productsPerPage;
    const firstProductIndex = lastProductIndex - data.productsPerPage;
    const currentProducts = products.slice(firstProductIndex, lastProductIndex);

    return (
        <div>
            <div className="h-10 p-2 shadow-md pl-4 mb-4">{products && products.length} resultado/s</div>
            <div className="md:mx-8">

                <div className="flex justify-between flex-col md:flex-row space-y-4 md:space-y-0">
                    
                    <FilterProducts />

                    <div className="flex flex-col">
                        <div className="m-2 md:m-0 md:grid md:grid-cols-4 gap-4 space-y-2 md:space-y-0">
                            {
                                currentProducts &&
                                    currentProducts.map(product => (
                                        <ProductCard key={product.id} product={product}/>
                                    ))
                            }
                        </div>
                        <div className="w-full text-center">
                            <Pagination productsLength={products.length} productsPerPage={data.productsPerPage} setData={setData} data={data}/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
