import React from 'react'

/* ---------------------------------- image --------------------------------- */
import dialogueImg from 'src/pages/Projects/Jincup/img/dialogue.webp'
import dialogueSpImg from 'src/pages/Projects/Jincup/img/dialogue_sp.webp'

import styles from './dialogue.module.scss'

const Dialogue = () => {
  return (
    <div className={styles.dialogue} id='dialogue'>
      <div className={styles.dialogueContainer}>
        <div className={styles.dialogueImg}>
          <picture>
            <source media='(max-width:1023px)' srcSet={dialogueSpImg} />
            <img src={dialogueImg} alt='jinAKIHIRO × Yuichi Murakami' loading='lazy' />
          </picture>
        </div>
      </div>
    </div>
  )
}

export default Dialogue
