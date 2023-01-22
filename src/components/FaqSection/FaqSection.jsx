import React, { useState } from 'react'
import faq from '../../assets/images/faq.png'
import styles from './FaqSection.module.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaPlus, FaTimes } from "react-icons/fa";
import { accordians } from '../../constants/data'

const FaqSection = () => {

    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }
    return (
        <div className={styles.faqContainer}>
            <div className='container'>
                <Row style={{ width: '95%', marginLeft: 'auto', marginRight: "auto" }}>

                    <Col>
                        <img src={faq} alt="" className={styles.image} />
                    </Col>
                    <Col >
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
                    </Col>
                </Row>
            </div>

        </div>
    )
}

export default FaqSection