import React from 'react'

import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';

export const BannerSN = ({ socialNetwork }) => {

    const { facebook, twitter, instagram, youtube} = socialNetwork;

    return (
        <div className="hidden uppercase text-xs md:text-sm lg:text-base sm:flex m-auto">
            
            Siguenos
            { facebook && <FaFacebookF size="1.5em" className=" text-blue-500 ml-2" /> }
            { twitter && <FaTwitter size="1.5em" className=" text-blue-300 ml-4" /> }
            { instagram && <FaInstagram size="1.5em" className=" text-pink-600 ml-3" /> }
            { youtube && <IoLogoYoutube size="1.5em" className=" text-red-600 ml-4" /> }

        </div>
    )
}
