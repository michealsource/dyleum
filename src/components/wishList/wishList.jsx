import React from 'react'
import styles from './wishList.module.css'
const WishList = () => {
    return (
        <div className={styles.bottomCard}>
            <h4>Be a part of the Project! Sign up to the Whitelist now and secure your spot for Dyleum token at earlybird prices during presale!</h4>
            <button className={styles.joinBtn}><a href="https://forms.gle/uvkp5p3wHRL3irwR9" target="_blank">Join Whitelist</a> </button>
        </div>
    )
}

export default WishList