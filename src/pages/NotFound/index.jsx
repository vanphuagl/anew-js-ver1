import React from 'react'

import LayoutDefault from 'src/components/Layout/layout'

import styles from './notfound.module.scss'

const NotFoundPage = () => {
  return (
    <LayoutDefault>
      <div className={styles.notfound}>
        <h2 className={styles['notfound-heading']}>404</h2>
        <div className={styles['notfound-sub']}>
          <h3>This page could not be found.</h3>
        </div>
      </div>
    </LayoutDefault>
  )
}

export default NotFoundPage
