import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import './Footer.scss'

const Footer = () => {
  const location = useLocation()
  return (
    <>
      {location.pathname !== '/' && (
        <footer className='c-footer'>
          <Link to='https://instagram.com/anew__inc/' target='_blank' className='c-footer__left'>
            INSTAGRAM
          </Link>
          <Link to='https://www.websitecarbon.com/' target='_blank' className='c-footer__center'>
            * This website emits 0.03g of CO2 per view.
          </Link>
          <p className='c-footer__right'>©︎ {new Date().getFullYear()} anew inc.</p>
        </footer>
      )}
    </>
  )
}

export default Footer
