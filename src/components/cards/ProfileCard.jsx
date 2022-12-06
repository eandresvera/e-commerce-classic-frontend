import React from 'react';
import { Link } from 'react-router-dom';

import { FaUserCheck, FaAddressCard } from 'react-icons/fa';
import { GiJigsawBox, GiStarFormation } from 'react-icons/gi';

export const ProfileCard = ({ tittle, subTittle, url, icon }) => {
    return (
        <Link to={`/profile/${url}`} className="h-28 flex flex-wrap content-center border border-gray-300 space-x-6 px-6 cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-md">
            
            { (icon === 'user') && <FaUserCheck className="h-12 w-12 text-primary-dark"/> }
            { (icon === 'address') && <FaAddressCard className="h-12 w-12 text-primary-dark"/> }
            { (icon === 'star') && <GiStarFormation className="h-12 w-12 text-primary-dark"/> }
            { (icon === 'box') && <GiJigsawBox className="h-12 w-12 text-primary-dark"/> }
            
            <div className="flex flex-col">
                <span className="font-medium text-xl">{tittle}</span>
                <span className="text-sm">{subTittle}</span>
            </div>
            
        </Link>
    )
}
