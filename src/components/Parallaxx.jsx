import React from 'react'

import { Parallax } from 'react-parallax';

export const Parallaxx = () => {
    return (
        <div className="h-50v">
            <Parallax
                bgImage={ '../assets/slider/4.jpg'}
                bgImageAlt="the dog"
                strength={500}
            >

                <div className="text-white text-6xl absolute top-2/4 left-1/2" style={{ transform: 'translate(-50%,-50%)' }}>

                    <div className=" "> 
                        Descuento <span className="text-primary-main">Invierno</span> 
                    </div>

                    <div className="text-6xl text-center mt-6"> 
                        <span className="text-primary-main">
                            80%
                        </span> 
                    </div>

                </div>
                
            <div style={{ height: '50vh' }} />
                
            </Parallax>
        </div>

    )
}
