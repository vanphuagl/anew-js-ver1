import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

/* ---------------------------------- image --------------------------------- */
import jincupImg from 'src/pages/Home/img/projects_jincup.webp'

const Projects = () => {
  // lazy loading image
  useEffect(() => {
    //   let observer = new IntersectionObserver((entries, observer) => {
    //     entries.forEach(function (entry) {
    //       if (entry.intersectionRatio > 0 || entry.isIntersecting) {
    //         const image = entry.target
    //         observer.unobserve(image)
    //         const sourceUrl = image.getAttribute('data-img')
    //         image.setAttribute('src', sourceUrl)
    //         image.onload = () => {
    //           image.classList.add('loaded')
    //         }
    //         observer.unobserve(image)
    //       }
    //     })
    //   })
    //   document.querySelectorAll('img').forEach((el) => {
    //     observer.observe(el)
    //   })
  }, [])

  return (
    <div className='projects'>
      <div className='projects__container'>
        <Link to='/projects/jincup-anew' className='projects__img'>
          <figure>
            <img data-img={jincupImg} src={jincupImg} alt='Jincup Anew' loading='lazy' width={606} height={539} />
          </figure>
        </Link>

        <Link to='/projects/jincup-anew' className='projects__title'>
          <p>Project 001</p>
          <div className='title'>
            <h2>
              jincup <sup>anew</sup>
            </h2>
          </div>
        </Link>

        <div className='projects__detail'>
          <Link to='/projects/jincup-anew' className='link'>
            detail
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Projects
