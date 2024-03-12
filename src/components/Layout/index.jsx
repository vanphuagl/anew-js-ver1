import React from 'react'

/* --------------------------------- routes --------------------------------- */
import { BrowserRouter } from 'react-router-dom'
import RoutesApp from 'src/routes/Routes'

const Layout = () => {
  return (
    <BrowserRouter>
      <RoutesApp />
    </BrowserRouter>
  )
}

export default Layout
