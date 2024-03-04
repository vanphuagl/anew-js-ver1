import React from 'react'

import styles from './notfound.module.scss'

const NotFoundPage = () => {
  return (
    <div className={styles.notfound}>
      <h2 className={styles['notfound-heading']}>404</h2>
      <div className={styles['notfound-sub']}>
        <h3>This page could not be found.</h3>
      </div>
    </div>
  )
}

export default NotFoundPage
