import React from 'react'
import styles from './newsLetter.module.css'
function NewsLetter() {
    return (
        <div className={styles.newsLetterContainer}>
            <h4>Join our newsletter</h4>
            <h6>get weekly access to our best deal, tips and tricks!</h6>

            <div className={styles.inputWrapper}>
                <div className={styles.inputBox}>
                    <input type="text" placeholder='Enter your Email address' />
                </div>

                <button>Subscribe</button>

            </div>
        </div>
    )
}

export default NewsLetter