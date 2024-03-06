import React, { useRef, useEffect } from 'react'

/* ---------------------------------- gsap ---------------------------------- */
import { gsap } from 'gsap'
import { ScrollTrigger, ScrollToPlugin } from 'gsap/all'

/* --------------------------------- section -------------------------------- */
import { FirstView, Intro, Projects, Philosophy, Company } from './section'

/* ------------------------------- components ------------------------------- */
import Header from 'src/components/Header'
import Footer from 'src/components/Footer'

import './home.scss'

const HomePage = () => {
  const refIntro = useRef(null)
  const refProjects = useRef(null)
  const refNormal = useRef(null)

  useEffect(() => {
    let mm = gsap.matchMedia(),
      breakPoint = 1024

    gsap.registerPlugin(ScrollTrigger)
    gsap.registerPlugin(ScrollToPlugin)
    ScrollTrigger.defaults({
      toggleActions: 'restart pause resume pause',
      scroller: '.fullpage'
    })

    // query
    const refScroll = document.querySelector('.c-scroll')
    const fullpage = document.querySelector('.fullpage')
    const scrollSnap = document.querySelectorAll('.scroll-snap')

    // timeline
    const loadFirstView = gsap.timeline({
      paused: 'true',
      defaults: { duration: 0.5 },
      scrollTrigger: {
        trigger: '.intro',
        toggleActions: 'play none none reverse'
      }
    })
    const loadIntro = gsap.timeline({
      paused: 'true',
      defaults: { duration: 0.5 },
      scrollTrigger: {
        trigger: '.intro',
        toggleActions: 'play none none reset'
      }
    })
    mm.add(
      {
        // set up any number of arbitrarily-named conditions. The function below will be called when ANY of them match.
        isDesktop: `(min-width: ${breakPoint}px)`,
        isMobile: `(max-width: ${breakPoint - 1}px)`
      },
      (context) => {
        // context.conditions has a boolean property for each condition defined above indicating if it's matched or not.
        let { isDesktop } = context.conditions

        loadFirstView.fromTo(
          '.firstview__heading',
          {
            opacity: 1
          },
          {
            opacity: 0
          }
        )

        if (isDesktop) {
          loadIntro
            .to('.intro__left', {
              opacity: 1,
              delay: 1
            })
            .to('.intro__left .omoty', {
              x: 0,
              delay: 0.5
            })
            .to('.intro__right', {
              opacity: 1,
              onComplete: () => {
                refScroll.classList.add('fade')
              }
            })
        } else {
          loadIntro
            .to('.intro__left', {
              opacity: 1,
              delay: 1
            })
            .to('.intro__left .omoty', {
              opacity: 0,
              duration: 0.5,
              delay: 0.5
            })
            .to('.intro__right', {
              opacity: 1,
              onComplete: () => {
                refScroll.classList.add('fade')
              }
            })
        }

        return () => {
          // optionally return a cleanup function that will be called when none of the conditions match anymore (after having matched)
          // it'll automatically call context.revert() - do NOT do that here . Only put custom cleanup code here.
        }
      }
    )

    // action sections
    const sections = document.querySelectorAll('.vertical-scrolling')
    sections.forEach((section, i) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top bottom-=1',
        end: 'bottom top+=1',
        onEnter: () => goToSection(section, i),
        onEnterBack: () => goToSection(section, i)
      })
    })
    const goToSection = (section, i) => {
      fullpage.classList.remove('snap-scroll')

      if (i === 0) {
        refScroll.classList.remove('fade')
      }

      if (i === 1) {
        loadFirstView.play()
        loadIntro.play()

        gsap.to('.intro', {
          opacity: 1,
          delay: 1,
          duration: 0.5
        })
        gsap.to('.projects__container', {
          opacity: 0,
          duration: 0.5
        })
      }

      if (i === 2) {
        refScroll.classList.add('fade')

        gsap.to('.intro', {
          opacity: 0,
          duration: 0.5
        })
        gsap.to('.projects__container', {
          opacity: 1,
          delay: 0.5,
          duration: 0.5
        })
      }

      if (i === 3) {
        gsap.to('.projects__container', {
          opacity: 0,
          duration: 0.3
        })

        setTimeout(() => {
          refNormal.current.classList.add('fade')
          // fullpage.classList.add('snap-scroll')
        }, 500)
        refScroll.classList.remove('fade')
      } else {
        fullpage.classList.remove('snap-scroll')
      }
    }

    // smooth scroll snap
    scrollSnap.forEach((scroll, i) => {
      scroll.addEventListener('wheel', function (event) {
        if (event.deltaY === 100 || event.deltaY === -100) {
          event.preventDefault()
          fullpage.scrollBy({
            top: event.deltaY,
            behavior: 'smooth'
          })
        }
      })
    })

    // anchor section projects click
    let links = document.querySelectorAll('.anchor-projects')
    links.forEach((anchor, i) => {
      anchor.addEventListener('click', (e) => {
        fullpage.style.setProperty('scroll-snap-type', 'none')
      })
    })
  }, [])

  useEffect(() => {
    const refFullpage = document.querySelector('.fullpage')
    const refScroll = document.querySelector('.c-scroll')

    const onScroll = (e) => {
      if (e.currentTarget.scrollTop > refNormal.current.offsetTop) {
        refFullpage.classList.add('snap-scroll')
      } else if (e.currentTarget.scrollTop === refNormal.current.offsetTop) {
        refFullpage.classList.remove('snap-scroll')
      }

      if (e.currentTarget.scrollTop >= refNormal.current.offsetTop) {
        refScroll.classList.remove('fade')
        gsap.to('.projects__container', {
          opacity: 0,
          duration: 0.3
        })
        refNormal.current.classList.add('fade')
      }

      if (e.currentTarget.scrollTop === refIntro.current.offsetTop) {
        gsap.to('.intro', {
          opacity: 1,
          delay: 0.5,
          duration: 0.5
        })
      }

      if (Math.round(e.currentTarget.scrollTop) === refProjects.current.offsetTop) {
        refFullpage.style.setProperty('scroll-snap-type', '')

        refScroll.classList.add('fade')
        gsap.to('.intro', {
          opacity: 0,
          duration: 0.5
        })
        gsap.to('.projects__container', {
          opacity: 1,
          delay: 0.5,
          duration: 0.5
        })
      }
    }
    // clean up code
    refFullpage.removeEventListener('scroll', onScroll)
    refFullpage.addEventListener('scroll', onScroll, { passive: true })
    return () => refFullpage.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <Header />

      <div className='homepage fullpage'>
        <div className='c-scroll'>
          <div className='line'>
            <span></span>
          </div>
        </div>

        <section className='vertical-scrolling scroll-snap vertical-firstview'>
          <FirstView />
        </section>

        <section className='vertical-scrolling scroll-snap vertical-intro' ref={refIntro}>
          <Intro />
        </section>

        <section className='vertical-scrolling scroll-snap vertical-projects' ref={refProjects}>
          <Projects />
        </section>

        <section className='vertical-scrolling vertical-normal' ref={refNormal}>
          <Philosophy />
          <Company />
          <Footer />
        </section>
      </div>
    </>
  )
}

export default HomePage
