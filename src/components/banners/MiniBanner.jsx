import React from 'react'
import { Link } from 'react-router-dom';
import { FaUser, FaStar, FaWhatsapp, FaRedhat } from 'react-icons/fa';

export const MiniBanner = () => {
    return (
        <div className="flex items-center justify-center bg-gray-900 p-2">
                <div className="flex justify-around flex-grow text-xs">

                    <div className="hidden md:flex flex-row">
                        <FaUser size="1.2em" className="text-primary-main mr-2"/>

                        <Link to="#" className="text-white inline-block hover:text-primary-light md:mr-8 lg:mr-14 xl:mr-20">
                            Hola, Inicia Sesión
                        </Link>
                    </div>
                    <div className="flex flex-row">
                        <FaStar size="1.2em" className="text-primary-main mr-2"/>

                        <Link to="#" className="text-white inline-block hover:text-primary-light md:mr-8 lg:mr-14 xl:mr-20">
                            Novedades
                        </Link>
                    </div>
                    <div className="flex flex-row">
                        <FaWhatsapp size="1.3em" className="text-primary-main mr-2"/>

                        <Link to="#" className="text-white inline-block hover:text-primary-light md:mr-8 lg:mr-14 xl:mr-20">
                            Contacto
                        </Link>
                    </div>
                    <div className="hidden md:flex flex-row">
                        <FaRedhat size="1.3em" className="text-primary-main mr-2"/>

                        <Link to="#" className="text-white inline-block hover:text-primary-light md:mr-8 lg:mr-14 xl:mr-20">
                            Privacidad
                        </Link>
                    </div>

                </div>
            </div>
    )
}
