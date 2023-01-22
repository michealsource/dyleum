import React from 'react'
import styles from './LearnMore.module.css'
import more from '../../assets/images/more.png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AppButton from '../AppButton/AppButton';
const LearnMore = () => {
    return (
        <div className={styles.lernMoreContainer}>
            <Row style={{ width: '100%', marginLeft: 'auto', marginRight: "auto" }}>
                <div>
                    <Col>
                        <div className={styles.leftSide}>
                            <h5>
                                Learn More About Dyleum</h5>
                            <p>Dyleum is a one-stop decentralized protocol that enables users to access a variety of decentralized services including digital identity and asset origination, asset trading, and token transactions. Learn more about Dyleum to find out how it can help you take control of your digital assets and transactions. With Dyleum, you can easily and securely manage, and transfer your digital assets with confidence.</p>
                        </div>

                        <AppButton
                            title="Learn More"
                        />

                    </Col>
                </div>

                <Col>
                    <img src={more} alt="" className={styles.lernMoreImg} />
                </Col>
            </Row>


        </div>
    )
}

export default LearnMore