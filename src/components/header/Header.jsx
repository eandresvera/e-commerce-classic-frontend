import React from 'react';

import { InputSearch } from '../ui/form-ui/InputSearch';
import { MiniBanner } from '../banners/MiniBanner';
import { BannerSN } from '../banners/BannerSN';

export const Header = () => {

    return (
        <div className="bg-white">

            {/* <Navbar /> */}

            {/* Input + Logo + Social media */}
            <div className="h-20 md:h-40 min-h-full">

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 min-h-full justify-items-center">

                    <div className="hidden md:flex">
                        <form className="form-focused focus-within:border-yellow-500">

                            <InputSearch />
                            
                        </form>
                    </div>

                    <div className="flex m-auto justify-center">
                        <img className="w-2/5 h-2/5 md:w-2/3" src="../assets/logo.png" alt=""/>
                    </div>

                    <BannerSN socialNetwork={{ facebook: 1, twitter: 1, instagram: 1, youtube: 1 }}/>

                </div>

            </div>

            {/* Mini Links */}

            <MiniBanner />

        </div>
    )
}
