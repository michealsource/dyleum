import React, { useState } from 'react'
import { accordians } from '../../constants/data'
import styles from './Accordian.module.css'
import { FaPlus, FaTimes } from "react-icons/fa";
const Accordian = () => {
    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }
    return (
        <div className={styles.accordianContainer}>
            {accordians.map((item, index) => (
                <div className={styles.accordianItem}>
                    <div className={selected === index ? styles.accordianTitleActive : styles.accordianTitle} onClick={() => toggle(index)}>
                        {item.question}
                        {selected === index ? <FaTimes /> : <FaPlus />}
                    </div>
                    <div className={selected === index ? styles.accordianContentDisplay : styles.accordianContent}>
                        {item.answer}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Accordian