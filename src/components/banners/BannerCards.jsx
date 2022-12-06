import React from 'react'
import { SimpleCard } from '../cards/SimpleCard'

export const BannerCards = () => {
    return (
        <div className="mt-5 hidden md:flex flex-wrap space-x-5">

            <SimpleCard tittle='Compra por categorias' url='../assets/banner-cards/3.jpg'/>
            <SimpleCard tittle='Viste a la moda' url='../assets/banner-cards/1.jpg'/>
            <SimpleCard tittle='Date un gusto' url='../assets/banner-cards/2.jpg'/>
            <SimpleCard tittle='Invierte en ti' url='../assets/banner-cards/4.jpg'/>
            
        </div>
    )
}
