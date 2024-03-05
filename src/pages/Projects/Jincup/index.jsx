import React, { useEffect } from 'react'

import styles from './jincup.module.scss'

const JincupPage = () => {
  useEffect(() => {
    let currentTheme = localStorage.getItem('data-theme')
    if (!currentTheme) currentTheme = 'dark'

    document.body.style.overflow = 'auto'
    document.documentElement.setAttribute('data-theme', currentTheme)
  }, [])

  return <div>JincupPage</div>
}

export default JincupPage
