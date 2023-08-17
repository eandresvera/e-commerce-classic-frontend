import React, { useEffect } from 'react';

import { Header } from '../header/Header';
import { BannerCards } from '../banners/BannerCards';
import { BannerIcons } from '../banners/BannerIcons';
import { BannerProducts } from '../banners/BannerProducts';
import { Carousel } from '../carousels/Carousel';
import { Parallaxx } from '../Parallaxx';
import { useDispatch, useSelector } from 'react-redux';
import { productListAction } from '../../redux/ducks/productsList';
import { addProduct, getProducts } from '../../helpers/dbHelper';

import { ToastContainer } from 'react-toastify';
import { MarqueeText } from '../carousels/MarqueeText';
import { Qr } from '../cards/Qr';


const mainCarousel = {
    slidesToShow: 1,
    slidesToScroll: 1, 
    infinite: true, 
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    dots: false,
    fade: true,
    className: 'slides',
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            dots: false
          }
        }
      ],
    design: {
        divClasses: 'h-20v md:h-50v lg:h-70v',
    },
    photos: [
        {
            name: 'photo 1',
            url: '../assets/slider/1.jpg',
            responsive_url: '../assets/slider/1_w470.jpg',
        },
        
        {
            name: 'photo 2',
            url: '../assets/slider/2.jpg',
            responsive_url: '../assets/slider/2_w470.jpg',
        },
        
        {
            name: 'photo 3',
            url: '../assets/slider/3.jpg',
            responsive_url: '../assets/slider/3_w470.jpg',
        },
        
        {
            name: 'photo 4',
            url: '../assets/slider/4.jpg',
            responsive_url: '../assets/slider/4_w470.jpg',
        },
    ]
}
const topProductsCarousel = {
    slidesToShow:6,
    slidesToScroll: 6, 
    infinite: false, 
    speed:800,
    className: 'slides',
    responsive: [
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4
          }
        }
      ],
    design: {
        imgHeight:"h-28 sm:h-48",
        tittle:"Los zapatos más vendidos",
        margin: 'mt-5',
    },
    photos: [
        {
            name: 'photo 1',
            url: '../assets/dev/shoes-man/1.jpg',
            responsive_url: '../assets/dev/shoes-man/1.jpg',
        },
        {
            name: 'photo 2',
            url: '../assets/dev/shoes-man/2.jpg',
            responsive_url: '../assets/dev/shoes-man/2.jpg',
        },
        {
            name: 'photo 3',
            url: '../assets/dev/shoes-man/3.jpg',
            responsive_url: '../assets/dev/shoes-man/3.jpg',
        },
        {
            name: 'photo 4',
            url: '../assets/dev/shoes-man/4.jpg',
            responsive_url: '../assets/dev/shoes-man/4.jpg',
        },
        {
            name: 'photo 5',
            url: '../assets/dev/shoes-man/5.jpg',
            responsive_url: '../assets/dev/shoes-man/5.jpg',
        },
        {
            name: 'photo 6',
            url: '../assets/dev/shoes-man/6.jpg',
            responsive_url: '../assets/dev/shoes-man/6.jpg',
        },
        {
            name: 'photo 7',
            url: '../assets/dev/shoes-man/7.jpg',
            responsive_url: '../assets/dev/shoes-man/7.jpg',
        },
    ],
}
const bottomProductsCarousel = {
    slidesToShow:6,
    slidesToScroll: 6, 
    infinite: false, 
    speed:800,
    className: 'slides',
    responsive: [
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4
          }
        }
      ],
    design: {
        imgHeight:"h-28 sm:h-48",
        tittle:"No te lo puedes perder",
        margin: 'mt-5',
    },
    photos: [
        {
            name: 'photo 1',
            url: '../assets/dev/shoes-man/1.jpg',
            responsive_url: '../assets/dev/shoes-man/1.jpg',
        },
        {
            name: 'photo 2',
            url: '../assets/dev/shoes-man/2.jpg',
            responsive_url: '../assets/dev/shoes-man/2.jpg',
        },
        {
            name: 'photo 3',
            url: '../assets/dev/shoes-man/3.jpg',
            responsive_url: '../assets/dev/shoes-man/3.jpg',
        },
        {
            name: 'photo 4',
            url: '../assets/dev/shoes-man/4.jpg',
            responsive_url: '../assets/dev/shoes-man/4.jpg',
        },
        {
            name: 'photo 5',
            url: '../assets/dev/shoes-man/5.jpg',
            responsive_url: '../assets/dev/shoes-man/5.jpg',
        },
        {
            name: 'photo 6',
            url: '../assets/dev/shoes-man/6.jpg',
            responsive_url: '../assets/dev/shoes-man/6.jpg',
        },
        {
            name: 'photo 7',
            url: '../assets/dev/shoes-man/7.jpg',
            responsive_url: '../assets/dev/shoes-man/7.jpg',
        },
    ],
}
// console.log(addProduct());
export const HomeScreen = () => {

    // console.log('Componente HomeScreen Renderizado');

    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList)
    const { loading, products, error  } = productList;
    
    useEffect( () => {

        dispatch( productListAction() );

    }, [dispatch])

    // addProduct()

    return (
        <div className="min-h-full" style={{ backgroundColor: 'rgb(234,237,237)' }}>

            { error && console.log('error: ', error ) }

            <ToastContainer />

            <Header />

            
            <Carousel settings={ mainCarousel }/>
            <MarqueeText />

            {/* Body */}
            <div className="sm:mx-5">

                {/* Banner product1 */}
                { products && 
                    <div className="main-banner-products">
                        { products.filter( product => product.category.includes('woman/shirt')).slice(0,4).map( woman => (
                            <BannerProducts 
                                id= { woman.id }
                                url={ woman.url } 
                                mobile_url={ woman.mobile_url }
                                name={ woman.name } 
                                price={ woman.price } 
                                key={ woman.id }
                            /> 
                        ))}
                    </div>
                }
                
                <div className="bg-white mt-5">
                    <Carousel settings={ topProductsCarousel }/>
                </div>

                <BannerCards />

                <div className="mt-5">
                    <Parallaxx />
                </div>

                <Qr />

                <div className="bg-white mt-5">
                    <Carousel settings={ bottomProductsCarousel }/>
                </div>

                {/* Banner product2 */}
                { products && 
                    <div className="main-banner-products sm:ml-2 sm:mr-2">
                        { products.filter( product => product.category.includes('men/shirt')).slice(0,4).map( men => (
                            <BannerProducts 
                                id= { men.id }
                                url={ men.url } 
                                mobile_url={ men.mobile_url } 
                                name={ men.name } 
                                price={ men.price } 
                                key={ men.id }
                            /> 
                        ))}
                    </div>
                }

            </div>

            <div className="mt-5">
                <BannerIcons />
            </div>
        
        </div>
    )
}
