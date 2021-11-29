import { useState, useEffect } from "react"
import { useRouter } from "next/router";
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import langs from '../langs/i18n'
// Components
import Header from '../components/Header'
// Resources
import stream_icon from '../public/img/stream_icon.png'
import stream_icon_purple from '../public/img/stream_icon_purple.png'
import wsr_logo from '../public/img/wsr_logo.png'
import place_1 from '../public/img/1_place.png'
import place_2 from '../public/img/2_place.png'
import place_3 from '../public/img/3_place.png'
import place_1_50 from '../public/img/1_place_50.png'
import place_2_20 from '../public/img/2_place_20.png'
import place_3_10 from '../public/img/3_place_10.png'

export default function Home() {
  const { locale, locales, defaultLocale } = useRouter();
  const l = langs[locale];

  return (
    <>
      <Head>
        <title>CryptoVegas World Stream Race</title>
        <meta name="description" content="CryptoVegas World Stream Race" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;0,900;1,400&display=swap" rel="stylesheet" />
      </Head>

      <Header locale={locale} />

      <section>
        <div className={styles.container_main}>
          <div className={styles.stages}>
            <div className={`${styles.stage} ${styles.pink_theme}`}>
              <div className={styles.stage_head}>
                <span className={styles.stage_h}>1</span>
                <span className={styles.stage_hd}>{l.stage}</span>
              </div>
              <Image src={stream_icon} objectFit="scale-down" className={styles.stage_img} />
              <span>01.12.21 - 31.12.21</span>
              <span className={styles.stage_deadline}>({l.inclusiveTill} 23:59 UTC+0)</span>
            </div>
            <div className={`${styles.stage} ${styles.purple_theme}`}>
              <div className={styles.stage_head}>
                <span className={styles.stage_h}>2</span>
                <span className={styles.stage_hd}>{l.stage}</span>
              </div>
              <Image src={stream_icon_purple} objectFit="scale-down" className={styles.stage_img} />
              <span>01.12.21 - 31.12.21</span>
              <span className={styles.stage_deadline}>({l.inclusiveTill} 23:59 UTC+0)</span>
            </div>
          </div>
          <div className={styles.btn_wrapper}>
            <a href="#rules" className={`${styles.btn} ${styles.button_primary}`}>{l.rules}</a>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.container_main}>
          <div className={styles.section_header_wrapper}>
            <span className={styles.section_header}>{l.topPlaces}</span>
          </div>
          <div className={`${styles.stage_head}  ${styles.pink_theme}`}>
            <span className={styles.stage_h}>1</span>
            <span className={styles.stage_hd}>{l.stage}</span>
          </div>
          
          <div className={styles.prizes}>
            <div className={styles.prize}><Image src={place_2} className={styles.prize_img} /></div>
            <div className={styles.prize}><Image src={place_1} className={styles.prize_img} /></div>
            <div className={styles.prize}><Image src={place_3} className={styles.prize_img} /></div>
          </div>

          <ol className={styles.prizes_table} start={4}>
            <li>1000$</li>
            <li>500$</li>
            <li>500$</li>
            <li>500$</li>
            <li>500$</li>
            <li>500$</li>
            <li>500$</li>
          </ol>

          <div className={`${styles.stage_head} ${styles.purple_theme}`}>
            <span className={styles.stage_h}>2</span>
            <span className={styles.stage_hd}>{l.stage}</span>
          </div>

          <div className={styles.prizes}>
            <div className={styles.prize}><Image src={place_2_20} className={styles.prize_img} /></div>
            <div className={styles.prize}><Image src={place_1_50} className={styles.prize_img} /></div>
            <div className={styles.prize}><Image src={place_3_10} className={styles.prize_img} /></div>
          </div>

          <ol className={`${styles.prizes_table} ${styles.purple_theme}`} start={4}>
            <li>1000$</li>
            <li>500$</li>
            <li>500$</li>
            <li>500$</li>
            <li>500$</li>
            <li>500$</li>
            <li>500$</li>
          </ol>
        </div>
      </section>
      <section id="rules" className={styles.rules}>
        <div className={styles.container}>
          <div className={styles.section_header_wrapper}>
            <span className={styles.section_header}>{l.rules}</span>
          </div>

          <ol className={styles.rules_text}>
            <li>
              {l.rulesList[1]}
              <h3>Система подсчета выглядит следующим образом:</h3>
              <span>0.40 - 1.99 USD</span> = 0.5 (x100=50) <br/>
              <span>2 - 6.99 USD</span> = 1 (x 100=100) <br/>
              <span>7 - 14.99 USD</span> = 2 x 100=200 <br/>
              <span>15 - 29.99 USD</span> = 3 (x 100=300) <br/>
              <span>30+ USD</span> = 4 (x 100=400) <br/>
            </li>
            <li>{l.rulesList[2]}</li>
            <li>{l.rulesList[3]}</li>
            <li>{l.rulesList[4]}</li>
            <li>{l.rulesList[5]}</li>
            <li>{l.rulesList[6]}</li>
            <li>{l.rulesList[7]}</li>
            <li>{l.rulesList[8]}</li>
            <li>{l.rulesList[9]}</li>
            <li>{l.rulesList[10]}</li>
            <li>{l.rulesList[11]}</li>
            <li>{l.rulesList[12]}</li>
            <li>{l.rulesList[13]}</li>
            <li>{l.rulesList[14]}</li>
            <li>{l.rulesList[15]} 
              <ul>
                <li>Стример обязан быть в кадре во время выигрыша.</li>
                <li>Важно добавлять лейбл КриптоВегас WSR 2021 в название стримов и на экран трансляции .</li>
                <li>Логотипы скачать тут &nbsp;&nbsp;<a href="/download/Logo_CV_WSR_2021.zip" className={styles.btn} download>{l.download}</a></li>
                <li>В случае блокировок или банов стримов, рекомендуем сохранять стримы так же через OBS, чтобы избежать долгих проверок.  </li>
                <li>Тайм коды , Видео или cсылку на видео , загружать СЮДА со своим Никнеймом. </li>
                <li>Администрация Крипто Вегаса оставляет за собой право изменять правила или остановить гонку в любой момент.</li>
              </ul>
            </li>
          </ol>
        </div>
      </section>
    </>
  )
}
