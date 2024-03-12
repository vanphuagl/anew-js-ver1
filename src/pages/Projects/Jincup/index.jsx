import React, { useEffect } from 'react'
import { MetaTags } from 'react-meta-tags'

// import { Helmet, HelmetProvider } from 'react-helmet-async'

/* -------------------------------- component ------------------------------- */
import Header from './components/Header'
import Footer from './components/Footer'
import Loading from './components/Loading'

/* --------------------------------- section -------------------------------- */
import { Mainvisual, Overview, Dialogue, Prototype } from './section'

import './jincup.scss'

const JincupPage = () => {
  useEffect(() => {
    let currentTheme = localStorage.getItem('data-theme')
    if (!currentTheme) currentTheme = 'light'
    if (currentTheme) currentTheme = 'light'

    document.documentElement.setAttribute('data-theme', currentTheme)

    // lazy load image
    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(function (entry) {
        if (entry.intersectionRatio > 0 || entry.isIntersecting) {
          const image = entry.target
          observer.unobserve(image)

          if (image.hasAttribute('src')) {
            // Image has been loaded already
            image.classList.add('loaded')
            return
          }

          // Image has not been loaded so load it
          const sourceUrl = image.getAttribute('data-src')
          image.setAttribute('src', sourceUrl)

          image.onload = () => {
            // Do stuff
          }

          // Removing the observer
          observer.unobserve(image)
        }
      })
    })

    document.querySelectorAll('img').forEach((el) => {
      observer.observe(el)
    })
  }, [])

  useEffect(() => {
    const appHeight = () => {
      const doc = document.documentElement
      doc.style.setProperty('--app-height', `${document.documentElement.clientHeight}px`)
    }
    appHeight()
    window.addEventListener('resize', appHeight)
    return () => window.removeEventListener('resize', appHeight)
  }, [])

  return (
    <>
      <MetaTags>
        <meta name='title' content='jincup anew ｜ PROJECTS ｜ anew inc.' />
        <meta
          name='description'
          content='未来のジンカップを考える。jincup anewは、土壌に埋めると約3ヶ月で分解されて土に還るジンカップのプロトタイプです。YOKOGAWAが取り扱うVASUジャパンの生分解性プラスチック原料をニッシリにてブロック状に成形し、鹿児島に届けてアキヒロジンが手彫りするというプロセスで生まれました。'
        />
        <meta property='og:url' content='https://anew-inc.com/projects/jincup-anew/' />
        <meta property='og:title' content='jincup anew ｜ PROJECTS ｜ anew inc.' />
        <meta
          property='og:description'
          content='未来のジンカップを考える。jincup anewは、土壌に埋めると約3ヶ月で分解されて土に還るジンカップのプロトタイプです。横河バイオフロンティアが取り扱うVASUジャパンの生分解性プラスチック原料をニッシリにてブロック状に成形し、鹿児島に届けてアキヒロジンが手彫りするというプロセスで生まれました。'
        />
        <meta property='og:image' content='https://anew-inc.com/ogp_jincup.jpg' />
        <meta name='twitter:title' content='jincup anew ｜ PROJECTS ｜ anew inc.' />
        <meta
          name='twitter:description'
          content='未来のジンカップを考える。jincup anewは、土壌に埋めると約3ヶ月で分解されて土に還るジンカップのプロトタイプです。横河バイオフロンティアが取り扱うVASUジャパンの生分解性プラスチック原料をニッシリにてブロック状に成形し、鹿児島に届けてアキヒロジンが手彫りするというプロセスで生まれました。'
        />
        <meta name='twitter:image:src' content='https://anew-inc.com/ogp_jincup.jpg' />
        <title>jincup anew ｜ PROJECTS ｜ anew inc.</title>
      </MetaTags>

      <Loading />

      <Header />
      <main className='jincuppage' id='jincuppage'>
        <Mainvisual />
        <Overview />
        <Dialogue />
        <Prototype />
      </main>
      <Footer />
    </>
  )
}

export default JincupPage
