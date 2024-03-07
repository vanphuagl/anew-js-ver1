import React from 'react'

/* ---------------------------------- image --------------------------------- */
import overviewImg from 'src/pages/Projects/Jincup/img/overview.webp'

import styles from './overview.module.scss'

const Overview = () => {
  return (
    <div className={styles.overview} id='overview'>
      <div className={styles.overviewContainer}>
        <div className={styles.overviewRight}>
          <figure>
            <img src={overviewImg} alt='OVERVIEW' width={628} height={557} loading='lazy' />
          </figure>
        </div>

        <div className={styles.overviewLeft}>
          <div className={styles.overviewTop}>
            <div className={styles.head}>
              <h2>overview</h2>
              <p className={styles.sub}>
                生分解性マテリアルを使った <br />
                土に還るジンカップ
              </p>
            </div>
            <div className={styles.desc}>
              <p>
                土壌に埋めると約３ヶ月で分解されて土に還るジンカップのプロトタイプ。横河バイオフロンティアが取り扱う
                VASU
                ジャパンの生分解性プラスチック原料をニッシリにてブロック状に成形し、鹿児島に届けてアキヒロジンが手彫りするというプロセスで生まれた。プラスチック製品の製造工程で必要なオリジナル金型が高額なため、サンプル第一号ということで、既存の型に流し込んで作ったブロックを木工のノミで彫って形にするという「プラスチックを
                DIY
                する」過去に例がない手法を選んだ。素材や金型の課題などを検証し、プロダクト化に向けて試行錯誤を進めている。
              </p>
            </div>
          </div>

          <div className={styles.overviewBottom}>
            <div className={styles.content}>
              <div className={styles.title}>
                <h2>jinAKIHIRO</h2>
                <p>アキヒロジン</p>
              </div>

              <p className={styles.desc}>
                鹿児島を拠点に活動する木工作家。直線から曲線へ、曲線から面へ。力強い立体構築で使う人を作品の中へ引きずり込む。2002
                年の活動開始以来、オーダー家具制作、オリジナルのプロダクト製品の展開、店舗、住宅内装から、インスタレーション作品の発表など、活動の幅を広げ続けている。
              </p>

              <div className={styles.link}>
                <a href='https://www.instagram.com/jinakihiro/' target='_blank' rel='noreferrer'>
                  https://www.instagram.com/jinakihiro/
                </a>
                <a href='https://akihirowoodworks.com/' rel='noreferrer' target='_blank'>
                  https://akihirowoodworks.com/
                </a>
              </div>
            </div>

            <div className={styles.content}>
              <div className={styles.title}>
                <h2>anew inc.</h2>
                <p>アニュウインク</p>
              </div>

              <p className={styles.desc}>
                プロダクトサステナビリティの観点から「私たちはいかにしてよき祖先となれるか」というグッドアンセスターとしての可能性を追求するプロジェクトチーム。環境危機・⽂化・経済といったコンテクストへの考察を起点に、ものにまつわるデザインやマテリアルのリサーチを進め、これからの社会にふさわしい低環境負荷のプロダクトを研究開発する。
              </p>

              <div className={styles.link}>
                <a href='https://anew-inc.com/' rel='noreferrer' target='_blank'>
                  https://anew-inc.com/
                </a>
                <a href='https://www.instagram.com/anew__inc/' rel='noreferrer' target='_blank'>
                  https://www.instagram.com/anew__inc/
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview
