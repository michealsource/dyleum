import React from 'react'
import faq from '../../assets/images/faq.png'
import styles from './FaqSection.module.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordian from '../Accordian/Accordian';

const FaqSection = () => {

    return (
        <div className={styles.faqContainer}>
            <div className='container'>
                <Row style={{ width: '95%', marginLeft: 'auto', marginRight: "auto" }}>

                    <Col>
                        <img src={faq} alt="" className={styles.image} />
                    </Col>
                    <Col >
                        <Accordian />
                    </Col>
                </Row>
            </div>

        </div>
    )
}

export default FaqSection