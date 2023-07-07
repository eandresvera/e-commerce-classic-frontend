import React from 'react'

export const HamburgerButton = ({ setMobileMenu, mobileMenu }) => {
  return (
    <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
      <button
          type="button"
          className="inline-flex items-center justify-center p-2  hover:text-primary-main focus:outline-none"
          aria-controls="mobile-menu"
          aria-expanded="false"
          onClick={() => setMobileMenu(!mobileMenu)}
      >
          <span className="sr-only">Abrir menú</span>
          <svg
          className={`${mobileMenu ? 'hidden' : 'block'} h-6 w-6`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
          >
          <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
          />
          </svg>
          <svg
          className={`${mobileMenu ? 'block' : 'hidden'} h-6 w-6`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
          >
          <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
          />
          </svg>
      </button>
  </div>
  )
}
