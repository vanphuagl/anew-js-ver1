import React from 'react'
import { Link } from 'react-router-dom'

/* ---------------------------------- image --------------------------------- */
import jincupImg from 'src/pages/Home/img/jincup.webp'

const Projects = () => {
  return (
    <div className='projects' id='projects'>
      <div className='projects__container'>
        <div className='projects__img'>
          <figure>
            <img src={jincupImg} alt='Jincup Anew' loading='lazy' width={606} height={539} />
          </figure>
        </div>

        <div className='projects__title'>
          <p>Project 001</p>
          <div className='title'>
            <h2>
              jincup <span>anew</span>
            </h2>
          </div>
        </div>

        <div className='projects__detail'>
          <Link to='/projects/jincup-anew' className='link'>detail</Link>
        </div>
      </div>
    </div>
  )
}

export default Projects
