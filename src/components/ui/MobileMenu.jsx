import React from 'react'
import links from '../../menuData'
import { NavLink } from 'react-router-dom'

export const MobileMenu = ({ mobileMenu }) => {
  return (
    <div className={`${mobileMenu ? 'block': 'hidden'} bg-black h-screen w-screen`}>
        {
            links.map( link => (
                <div className="flex content-start" key={link.name}>
                    <NavLink 
                        to={link.path}
                        className={({ isActive }) => "hover:text-primary-light" + (isActive ? " text-primary-light" : "")}
                    >
                    {link.name}
                </NavLink>
                </div>
            ))
        }
    </div>
  )
}
