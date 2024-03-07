import React, { useEffect } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

/* -------------------------------- component ------------------------------- */
import Header from './components/Header'

/* --------------------------------- section -------------------------------- */
import { Mainvisual, Overview, Dialogue } from './section'

// import styles from './jincup.module.scss'

const JincupPage = () => {
  useEffect(() => {
    let currentTheme = localStorage.getItem('data-theme')
    if (!currentTheme) currentTheme = 'dark'

    document.body.style.overflow = 'auto'
    document.documentElement.setAttribute('data-theme', currentTheme)
  }, [])

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Jincup Anew ｜ アニュウインク</title>
          <script src='https://use.typekit.net/sbn4zvv.js'></script>
        </Helmet>

        <Header />
        <Mainvisual />
        <Overview />
        <Dialogue />
      </HelmetProvider>
    </>
  )
}

export default JincupPage
