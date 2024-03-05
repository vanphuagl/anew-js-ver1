import React from 'react'

/* ------------------------------- components ------------------------------- */
import Header from 'src/components/Header'
import Footer from 'src/components/Footer'

const LayoutDefault = ({ children }) => {
  return (
    <div className='layout'>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default LayoutDefault
