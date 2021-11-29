
import { useRouter } from "next/router";
import link from 'next/link'
import langs from '../langs/i18n'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
// Resources
import wsr_logo from '../public/img/wsr_logo.png'

export default function Header({locale}){
    const router = useRouter();
    const { pathname } = router;
    return(
        <>
            <header className={styles.header}>
                <div className={styles.container}>
                <div className={styles.language_toggle}>
                    <Link href={pathname} locale={'en'} className={`${styles.language_toggle_item} ${locale === 'en'?styles.language_toggle_item_active:''}`}>
                    en
                    </Link>
                    <Link href={pathname} locale={'ru'} className={`${styles.language_toggle_item} ${locale === 'ru'?styles.language_toggle_item_active:''}`}>
                    ru
                    </Link>
                </div>
                </div>
                <div className={styles.wsr_logo}>
                <Image src={wsr_logo} objectFit="scale-down" />
                {pathname !== '/register'?
                    <Link href="/register#form" passHref={true}>
                        <button className={`${styles.btn} ${styles.btn_top}`}>{langs[locale].participate}</button>
                    </Link>
                :null}
                </div>
            </header>
        </>
    )
}