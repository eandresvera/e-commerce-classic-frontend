import React from 'react'
import links from '../../menuData'
import { NavLink } from 'react-router-dom'
import { SmallLoader } from './SmallLoader'

export const MobileMenu = ({ mobileMenu, setMobileMenu, user }) => {
  return (
    <nav className={`${mobileMenu ? 'animate-mobile-translate': 'hidden'} fixed  text-white bg-black z-[51] overflow-hidden w-screen h-screen p-10 space-y-4 text-xl uppercase`}>
        {
            links.map( link => (
                <div className="flex content-start" key={link.name}>
                    <NavLink 
                        onClick={() => setMobileMenu(false)}
                        to={link.path}
                        className={({ isActive }) => "hover:text-primary-light" + (isActive ? " text-primary-light" : "")}
                    >
                    {link.name}
                </NavLink>
                </div>
            ))
        }
        {
            // Crucial order validation
            user === undefined
                ? <SmallLoader/>
                : user 
                ? <NavLink onClick={() => setMobileMenu(false)} to="/profile" className="flex flex-col text-xs normal-case text-primary-main" >{`Hola ${user.name}`}</NavLink>
                : <NavLink to="/signin" className="flex flex-col text-xs text-primary-main" >Inicia sesión</NavLink>
        }
    </nav>
  )
}
