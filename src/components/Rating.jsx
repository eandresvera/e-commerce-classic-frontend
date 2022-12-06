import React from 'react';
import { ImStarFull, ImStarHalf, ImStarEmpty  } from 'react-icons/im';
export const Rating = ({ rating, reviewsNum }) => {
    return (
        <div className="flex space-x-3">
            <div className="flex text-yellow-500">
                <span>
                    {
                        rating >= 1 
                            ? <ImStarFull/> 
                            : rating >= 0.5
                            ? <ImStarHalf/> 
                            : <ImStarEmpty/>
                    }
                </span>
                <span>
                    {
                        rating >= 2 
                            ? <ImStarFull/> 
                            : rating >= 1.5
                            ? <ImStarHalf/> 
                            : <ImStarEmpty/>
                    }
                </span>
                <span>
                    {
                        rating >= 3 
                            ? <ImStarFull/> 
                            : rating >= 2.5
                            ? <ImStarHalf/> 
                            : <ImStarEmpty/>
                    }
                </span>
                <span>
                    {
                        rating >= 4 
                            ? <ImStarFull/> 
                            : rating >= 3.5
                            ? <ImStarHalf/> 
                            : <ImStarEmpty/>
                    }
                </span>
                <span>
                    {
                        rating >= 5 
                            ? <ImStarFull/> 
                            : rating >= 4.5
                            ? <ImStarHalf/> 
                            : <ImStarEmpty/>
                    }
                </span>
            </div>
            <div className=" text-indigo-500">
                {reviewsNum}
            </div>
        </div>
    )
}
