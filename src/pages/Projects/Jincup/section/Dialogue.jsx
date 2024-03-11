import React from 'react'

/* ---------------------------------- image --------------------------------- */
import dialogueImg from 'src/pages/Projects/Jincup/img/dialogue.webp'
import dialogueSpImg from 'src/pages/Projects/Jincup/img/dialogue_sp.webp'

/* ---------------------------------- utils --------------------------------- */
import { dialogueData } from '../utils/dialogue-data'

import styles from '../styles/dialogue.module.scss'

const Dialogue = () => {
  return (
    <section className={styles.dialogue} id='dialogue'>
      <div className={styles.dialogueContainer}>
        <div className={styles.dialogueImg}>
          <picture>
            <source media='(max-width:1023px)' srcSet={dialogueSpImg} />
            <img src={dialogueImg} alt='jinAKIHIRO × Yuichi Murakami' loading='lazy' />
          </picture>
        </div>

        <div className={styles.dialogueTit}>
          <div className={styles.inner}>
            <div className={styles.sticky}>
              <h2>dialogue:</h2>
              <p className={styles.name}>
                <span>j</span>inAKIHIRO × <br />
                Yuichi Murakami
              </p>
              <p className={styles.founder}>anew inc. Founder</p>
            </div>
          </div>
        </div>

        <div className={styles.dialogueWrapper}>
          <div className={styles.dialogueDesc}>
            <div className={styles.top}>
              <p>
                木工作家であり、デザイナー、プロデューサーの視点からも、モノづくりを展開するアキヒロジンと、anew inc.
                ファウンダーの村上雄一による対話。より良い世界へ向けて、頭と手を動かし、未来のジンカップを考える。
              </p>
            </div>

            <div className={styles.bottom}>
              <span>Photo: Keishi Oku</span>

              <a href='https://www.instagram.com/kcpics_kagoshima/' target='_blank' rel='noreferrer'>
                @kcpics_kagoshima
              </a>
            </div>
          </div>

          <div className={styles.dialogueList}>
            {dialogueData.map((items, i) => (
              <div className={styles.items} key={i}>
                <h3>{items.title}</h3>
                <p>{items.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dialogue
