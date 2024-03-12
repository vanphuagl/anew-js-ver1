import React from 'react'
import { MetaTags } from 'react-meta-tags'

import LayoutDefault from 'src/components/Layout/layout'

import styles from './notfound.module.scss'

const NotFoundPage = () => {
  return (
    <>
      <MetaTags>
        <meta name='prerender-status-code' content='404' />
      </MetaTags>

      <LayoutDefault>
        <div className={styles.notfound}>
          <h2 className={styles['notfound-heading']}>404</h2>
          <div className={styles['notfound-sub']}>
            <h3>This page could not be found.</h3>
          </div>
        </div>
      </LayoutDefault>
    </>
  )
}

export default NotFoundPage
