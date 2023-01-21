import React from 'react'
import styles from './AppButton.module.css'
const AppButton = ({ title }) => {
    return (
        <button
            className={styles.btnBox}
        >{title}</button>
    )
}

export default AppButton