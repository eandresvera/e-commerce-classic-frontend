import React from 'react'
import Slider from 'react-slick';
import PropTypes from 'prop-types'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Carousel = ({ settings }) => {

  const { design, photos } = settings;
  const { imgHeight, tittle, divClasses } = design;

    return (
      <>

        { tittle && <h4 className="text-gray-600 text-2xl pl-4 pt-4"> { tittle } </h4> }

        <Slider {...settings}>

            { photos.map( photo => (

              <div key={ photo.url } className={ `${ divClasses ? divClasses : '' }` }>
                <div className="hidden sm:block object-cover">
                  <img className={ `hidden ${imgHeight}` }  src={ photo.url } alt={ photo.name }/>
                </div>
                <div className="block sm:hidden object-cover">
                  <img className={ ` ${imgHeight}` }  src={ photo.responsive_url } alt={ photo.name }/>
                </div>
              </div>

            ))}

        </Slider>
          
      </>
    )
}

Carousel.propTypes = {
  settings: PropTypes.object.isRequired,
}

