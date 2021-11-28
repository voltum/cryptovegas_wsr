
import { useRouter } from "next/router";
import langs from '../langs/i18n'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
// Resources
import wsr_logo from '../public/img/wsr_logo.png'

export default function Header({pathname, locale}){
    console.log(locale);
    return(
        <>
            <header className={styles.header}>
                <div className={styles.container}>
                <div className={styles.language_toggle}>
                    <a href="/en" className={`${styles.language_toggle_item} ${locale === 'en'?styles.language_toggle_item_active:''}`}>
                    en
                    </a>
                    <a href="/" className={`${styles.language_toggle_item} ${locale === 'ru'?styles.language_toggle_item_active:''}`}>
                    ru
                    </a>
                </div>
                </div>
                <div className={styles.wsr_logo}>
                <Image src={wsr_logo} objectFit="scale-down" />
                {pathname !== '/register'?
                    <Link href="/register#form">
                        <a className={`${styles.btn} ${styles.btn_top}`}>{langs[locale].participate}</a>
                    </Link>
                :null}
                </div>
            </header>
        </>
    )
}