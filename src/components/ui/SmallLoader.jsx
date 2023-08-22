import React from 'react'

export const SmallLoader = () => {
    return (
        <span className="flex h-3 w-3">
            {/* <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span> */}
            <span className="absolute inline-flex animate-ping rounded-full h-3 w-3 bg-white"></span>
        </span>
    )
}
