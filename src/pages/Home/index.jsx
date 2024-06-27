import React, { useEffect, useState } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import ReactFullpage from '@fullpage/react-fullpage'

/* ---------------------------------- gsap ---------------------------------- */
import { gsap } from 'gsap'

/* --------------------------------- section -------------------------------- */
import { FirstView, Intro, Projects, Philosophy, Company } from './section'

/* ------------------------------- components ------------------------------- */
import Header from 'src/components/Header'
import Footer from 'src/components/Footer'

import './home.scss'

const HomePage = () => {
  const [sectionIndex, setSectionIndex] = useState(0)
  const [isReady, setIsReady] = useState(false)

  // let ready = false
  // let animationTimeout, transitionTimeout

  // ===== hide element =====
  const hideElements = () => {
    const first = document.querySelector('.homepage .firstview__heading')
    const second = document.querySelector('.homepage .intro')
    const third = document.querySelector('.homepage .projects')
    const four = document.querySelector('.homepage .scrollable-element')

    gsap.to([first, second, third, four], {
      autoAlpha: 0,
      duration: 0.8
    })
  }

  // ===== animate in =====
  const animateIn = ({ currentIndex }) => {
    let mm = gsap.matchMedia(),
      breakPoint = 1024

    // section 1
    if (currentIndex === 0) {
      gsap.to('#refScroll', {
        autoAlpha: 0,
        duration: 0.5
      })
      gsap.to('.homepage .firstview__heading', {
        autoAlpha: 1,
        duration: 0.5,
        onComplete: () => {
          gsap.to(
            '#refScroll',
            {
              autoAlpha: 0
            },
            '-=0.2'
          )
        }
      })
    }
    // section 2
    if (currentIndex === 1) {
      mm.add(
        {
          isDesktop: `(min-width: ${breakPoint}px)`,
          isMobile: `(max-width: ${breakPoint - 1}px)`
        },
        (context) => {
          let { isDesktop } = context.conditions

          if (isDesktop) {
            gsap
              .timeline()
              .to('.homepage .intro', {
                autoAlpha: 1,
                duration: 0.5
              })
              .to(
                '.homepage .intro__left',
                {
                  autoAlpha: 1,
                  duration: 0.5
                },
                '-=0.3'
              )
              .to('.homepage .intro__left .omoty', {
                x: 0,
                autoAlpha: 1,
                duration: 0.5,
                delay: 0.5
              })
              .to('.homepage .intro__right', {
                autoAlpha: 1,
                duration: 0.5
              })
              .to('#refScroll', {
                autoAlpha: 1,
                duration: 0.5
              })
          } else {
            gsap
              .timeline()
              .to('.homepage .intro', {
                autoAlpha: 1,
                duration: 0.5
              })
              .to(
                '.homepage .intro__left',
                {
                  autoAlpha: 1,
                  duration: 0.5
                },
                '-=0.3'
              )
              .to('.homepage .intro__left .omoty', {
                autoAlpha: 0,
                duration: 0.5,
                delay: 0.5
              })
              .to('.homepage .intro__right', {
                autoAlpha: 1,
                duration: 0.5
              })
              .to('#refScroll', {
                autoAlpha: 1,
                duration: 0.5
              })
          }
          return () => {}
        }
      )
    }
    // section 3
    if (currentIndex === 2) {
      gsap.to('.homepage .projects, #refScroll', {
        autoAlpha: 1,
        duration: 0.5
      })
      gsap.to('.homepage .scrollable-element', {
        autoAlpha: 0
      })
    }
    // section 4
    if (currentIndex === 3) {
      gsap.to('#refScroll', {
        autoAlpha: 0,
        duration: 0.5
      })
      gsap.to('.homepage .scrollable-element', {
        autoAlpha: 1,
        duration: 1
      })
    }
  }

  // ===== animate out =====
  // const animateOut = ({ currentIndex, direction }) => {
  //   if (direction === 'down') {} else {}
  // }

  // ===== init fullpage.js =====
  useEffect(() => {
    const normalScroll = document.querySelector('.fullpage .scrollable-element')
    const fullpageInner = document.querySelectorAll('.fullpage .fullpage-inner')

    const init = () => {
      fullpageInner.forEach((items) => {
        items.style.height = window.innerHeight + 'px'
      })
      normalScroll.style.maxHeight = window.innerHeight + 'px'
    }

    ;['resize', 'orientationchange'].forEach((evt) => {
      window.addEventListener(evt, () => {
        init()
      })
    })
    init()
    ;['scroll', 'mousewheel', 'touchmove'].forEach((evt) => {
      normalScroll.addEventListener(evt, () => {
        let top = -1
        top = normalScroll.scrollTop

        if (top > 1) {
          window.fullpage_api.moveSectionDown()
        } else if (top === 0) {
          window.fullpage_api.moveTo(3)
        }
      })
    })

    // refresh page
    ;['pageshow', 'load'].forEach((evt) => {
      window.addEventListener(evt, () => {
        const hash = window.location.hash.substring(1)

        switch (hash) {
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
      })
    })
  }, [])

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta name='title' content='anew inc. ｜ アニュウインク' />
          <meta
            name='description'
            content='anew inc.はプロダクトサステナビリティの観点から「私たちはいかにしてよき祖先となれるか」というグッドアンセスターとしての可能性を追求するプロジェクトチームです。'
          />

          <meta property='og:url' content='https://anew-inc.com' />
          <meta property='og:title' content='anew inc. ｜ アニュウインク' />
          <meta property='og:site_name' content='anew inc. ｜ アニュウインク' />
          <meta
            property='og:description'
            content='anew inc.はプロダクトサステナビリティの観点から「私たちはいかにしてよき祖先となれるか」というグッドアンセスターとしての可能性を追求するプロジェクトチームです。'
          />
          <meta property='og:image' content='https://anew-inc.com/ogp.jpg' />

          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:site' content='anew inc. ｜ アニュウインク' />
          <meta name='twitter:title' content='anew inc. ｜ アニュウインク' />
          <meta
            name='twitter:description'
            content='anew inc.はプロダクトサステナビリティの観点から「私たちはいかにしてよき祖先となれるか」というグッドアンセスターとしての可能性を追求するプロジェクトチームです。'
          />
          <meta name='twitter:image:src' content='https://anew-inc.com/ogp.jpg' />

          <title>anew inc. ｜ アニュウインク</title>
        </Helmet>

        <Header />

        <div className='c-scroll' id='refScroll'>
          <div className='line'>
            <span></span>
          </div>
        </div>

        <ReactFullpage
          scrollOverflow={false}
          sectionSelector={'.vertical-scrolling'}
          easingcss3={'cubic-bezier(.5,.03,0,.99)'}
          normalScrollElements={'.scrollable-element'}
          controlArrows={false}
          scrollingSpeed={1200}
          scrollBar={false}
          autoScrolling={true}
          afterLoad={(origin, destination, direction) => {
            animateIn({ currentIndex: destination.index })
            setSectionIndex(destination.index)
            setIsReady(true)
          }}
          onLeave={(origin, nextIndex, direction) => {
            if (isReady && sectionIndex < 3) {
              hideElements()
            }

            // if (ready) return
            // clearTimeout(animationTimeout)
            // clearTimeout(transitionTimeout)

            // animateOut({ currentIndex: origin.index, direction })
            // animationTimeout = setTimeout(() => {
            //   ready = true
            //   if (direction === 'down') {
            //     window.fullpage_api.moveSectionDown()
            //   } else {
            //     window.fullpage_api.moveSectionUp()
            //   }
            // }, 0)

            // transitionTimeout = setTimeout(() => {
            //   ready = false
            // }, 0)

            // return ready
          }}
          render={({ state, fullpageApi }) => {
            return (
              <div className='homepage fullpage' id='fullpage-wrapper'>
                <section className='vertical-scrolling fp-auto-height-responsive'>
                  <div className='fullpage-inner'>
                    <FirstView />
                  </div>
                </section>
                <section className='vertical-scrolling fp-auto-height-responsive'>
                  <div className='fullpage-inner'>
                    <Intro />
                  </div>
                </section>
                <section className='vertical-scrolling fp-auto-height-responsive' data-anchor='projects'>
                  <div className='fullpage-inner'>
                    <Projects />
                  </div>
                </section>
                <section className='vertical-scrolling fp-auto-height' data-anchor='philosophy'>
                  <div className='scrollable-element'>
                    <Philosophy />
                    <Company />
                    <Footer />
                  </div>
                </section>
              </div>
            )
          }}
        />
      </HelmetProvider>
    </>
  )
}

export default HomePage
