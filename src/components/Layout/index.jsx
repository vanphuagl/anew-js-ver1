import React from 'react'

/* --------------------------------- routes --------------------------------- */
import { BrowserRouter } from 'react-router-dom'
import RoutesApp from 'src/routes/routes'

const Layout = () => {
  return (
    <BrowserRouter>
      <RoutesApp />
    </BrowserRouter>
  )
}

export default Layout
