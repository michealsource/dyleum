import React from 'react'
import styles from './AppButton.module.css'
const AppButton = ({ title, linkPath }) => {
    return (
        <button className={styles.btnBox}>
            <a href={linkPath} target="_blank" rel="noopener noreferrer">{title}</a>
        </button>
    )
}

export default AppButton