import { useState, useEffect } from "react"
import langs from '../langs/i18n'
import cogoToast from 'cogo-toast';
import styles from '../styles/Register.module.css'
import homeStyles from '../styles/Home.module.css'

// const PROD_URL = process.env.PROD_URL;

export default function RegisterForm({l, locale}){
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const sendStream = async (e) => {
        setSubmitting(true);
        e.preventDefault();
        const res = await fetch('/api/register', {
            method: 'post',
            body: JSON.stringify({
                nickname: e.target.elements.nickname.value,
                video_url: e.target.elements.video_url.value,
                timecode: e.target.elements.timecode.value
            })
        })
        setSubmitting(false);
        if(res.status === 201){
            setSubmitted(true);
            cogoToast.success(l.yourVideoSubmitted)
        } else {
            setSubmitted(false);
            cogoToast.error(l.errorWhileSubmitting);
        }
    }

    useEffect(()=>{

        return(() => {
            setSubmitted(false);
        })
    }, [])

    return(
        <form onSubmit={sendStream} className={styles.form_block}>
            <input type="url" id="form_url" name="video_url" placeholder={l.videoURL} required/>
            <input type="text" pattern="^(?:(?:([01]?\d|2[0-3]):)?([0-5]?\d):)?([0-5]?\d)$" title="Timecode (i.e. MM:SS or HH:MM:SS)" id="form_timecode" name="timecode" placeholder={l.timecode} required/>
            <input type="text" id="form_nickname" name="nickname" placeholder={l.nicknameOnCryptoVegas} required/>
            <button type="submit" className={`${homeStyles.btn}`} disabled={submitting||submitted}>{submitting?<><span className='loader'/>&nbsp;</>:l.submit}</button>
        </form>
    )
}