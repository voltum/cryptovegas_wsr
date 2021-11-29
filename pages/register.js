// import React from 'react'
import { useRouter } from 'next/router'
import langs from '../langs/i18n'
import Head from 'next/head'
import styles from '../styles/Register.module.css'
// Components
import Header from '../components/Header'
import RegisterForm from '../components/RegisterForm'

export default function Register() {
    const { locale, locales, defaultLocale } = useRouter();
    const l = langs[locale];
    const router = useRouter();
    const { pathname } = router;
    return (
        <>
            <Head>
                <title>Participate | WSR 2022 CRYPTO VEGAS</title>
                <meta name="description" content="Participate in the CryptoVegas World Stream Race competition 2022, contest for casino streamers" />
                <link rel="icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;0,900;1,400&display=swap" rel="stylesheet" />
            </Head>
            <Header pathname={pathname} locale={locale} />

            <section id="form" className={styles.form_section}>
                <div className={''}>

                </div>
                <RegisterForm l={l} locale={locale} />
            </section>
        </>
    )
}