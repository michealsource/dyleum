import React from 'react'
import styles from './Faq.module.css'
import Accordian from '../../components/Accordian/Accordian'
const Faq = () => {

    return (
        <div className={styles.faqContainer}>
            <h4 className={styles.faqHeader}>Frequently Asked Questions</h4>
            <Accordian />
        </div>
    )
}

export default Faq