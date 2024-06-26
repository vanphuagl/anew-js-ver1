import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './header.module.scss'

const Header = () => {
  const headerMenuRef = useRef(null)
  const toggleRef = useRef(null)
  const [checked, setChecked] = useState(true)
  const [openMenu, setOpenMenu] = useState(false)
  const [size, setSize] = useState({
    width: 0,
    height: 0
  })

  // ===== toggle theme =====

  useEffect(() => {
    let currentTheme = localStorage.getItem('data-theme')
    if (!currentTheme) currentTheme = 'dark'

    if (toggleRef.current) {
      toggleRef.current.checked = currentTheme === 'dark'
      setChecked(toggleRef.current.checked)
    }

    document.documentElement.setAttribute('data-theme', currentTheme)
  }, [])

  const handleChange = (e) => {
    setChecked(e.target.checked)

    if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark')
      localStorage.setItem('data-theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-theme', 'light')
      localStorage.setItem('data-theme', 'light')
    }
  }

  // ===== toggle menu =====

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (size.width > 1023 && openMenu) {
      setOpenMenu(false)
    }
  }, [size.width, openMenu])

  const toggleMenu = (e) => {
    // e.preventDefault()
    setOpenMenu(!openMenu)
  }

  // ====== height 100vh =====

  useEffect(() => {
    const appHeight = () => {
      const doc = document.documentElement
      doc.style.setProperty('--app-height', `${document.documentElement.clientHeight}px`)
      // height menu
      const windowHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
      headerMenuRef.current.style.height = windowHeight + 'px'
      if (document.getElementById('intro')) {
        document.getElementById('intro').style.height = windowHeight + 'px'
      }
    }
    appHeight()
    window.addEventListener('resize', appHeight)
    return () => window.removeEventListener('resize', appHeight)
  }, [])

  // ===== anchor link =====
  const anchorLink = (link) => {
    const normalScroll = document.querySelector('.scrollable-element')

    switch (link) {
      case 'projects':
        window.fullpage_api.moveTo(3, 0)
        normalScroll.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
        break
      case 'philosophy':
        window.fullpage_api.moveTo(4, 0)
        normalScroll.scrollTo({
          top: 10,
          behavior: 'smooth'
        })
        break
      case 'company':
        window.fullpage_api.moveTo(4, 0)
        normalScroll.scrollTo({
          top: document.querySelector('.homepage .company').offsetTop,
          behavior: 'smooth'
        })
        break
      default:
        break
    }
  }

  // ===== return =====
  return (
    <>
      <header className={styles.header}>
        <Link to='/' className={styles.headerLeft}>
          <h1>anew inc.</h1>
        </Link>

        <div className={styles.headerCenter}>
          <a href='#projects' className='header_anchor' onClick={() => anchorLink('projects')}>
            projects,
          </a>
          <a href='#philosophy' className='header_anchor' onClick={() => anchorLink('philosophy')}>
            philosophy,
          </a>
          <a href='#company' className='header_anchor' onClick={() => anchorLink('company')}>
            company
          </a>
        </div>

        <div className={styles.headerRight}>
          <p onClick={toggleMenu}>{!openMenu ? 'menu' : 'close'}</p>
          <label htmlFor='toggle'>
            <span>{checked ? 'dark' : 'light'}</span>
          </label>
          <input
            id='toggle'
            ref={toggleRef}
            className={styles.toggle}
            checked={checked}
            type='checkbox'
            onChange={handleChange}
          />
        </div>
      </header>

      <div
        className={` ${styles.headerMenu} ${openMenu && size.width < 1023 ? `${styles.active}` : ''} `}
        ref={headerMenuRef}
      >
        <div className={styles.top}>
          <a
            href='/#projects'
            className='header_anchor'
            onClick={() => {
              anchorLink('projects')
              toggleMenu()
            }}
          >
            projects
          </a>
          <a
            href='/#philosophy'
            className='header_anchor'
            onClick={() => {
              anchorLink('philosophy')
              toggleMenu()
            }}
          >
            philosophy
          </a>
          <a
            href='/#company'
            className='header_anchor'
            onClick={() => {
              anchorLink('company')
              toggleMenu()
            }}
          >
            company
          </a>
        </div>

        <div className={styles.bottom}>
          <Link to='https://instagram.com/anew__inc/' target='_blank' className={styles.instagram}>
            INSTAGRAM
          </Link>
          <Link to='https://www.websitecarbon.com/' target='_blank' className={styles.carbon}>
            * This website emits 0.03g of CO2 per view.
          </Link>
          <p>©︎ {new Date().getFullYear()} anew inc.</p>
        </div>
      </div>
    </>
  )
}

export default Header
