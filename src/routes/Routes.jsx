import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import { AnimatePresence } from 'framer-motion'

/* ---------------------------------- page ---------------------------------- */
import { HomePage, JincupPage, NotFoundPage } from 'src/pages/page'

const RoutesApp = () => {
  const location = useLocation()

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route index element={<HomePage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/projects/jincup-anew' element={<JincupPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </AnimatePresence>
  )
}

export default RoutesApp
