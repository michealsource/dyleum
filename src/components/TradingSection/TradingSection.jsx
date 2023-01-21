import React from 'react'
import styles from './TradingSection.module.css'
import trading from '../../assets/images/trading.png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AppButton from '../AppButton/AppButton';
const TradingSection = () => {
    return (
        <Row className={styles.tradingContainer}>
            <Col class="col-12 col-md-6">
                <img src={trading} alt="" className={styles.tradingImg} />
            </Col>
            <Col class="col-12 col-md-6">
                <h6 className={styles.tradingH6Text}>BEST TRADING EXPERIENCE</h6>
                <h5 className={styles.tradingH5Text}>Trade Anywhere & Anytime!</h5>
                <p className={styles.tradingText}>Welcome to Dyleum, the one-stop protocol for all crypto users! We’re here to make crypto transactions easier and more secure, leveraging the power of blockchain with fintech. Whether you’re a beginner or an experienced investor, we have the tools to help you manage your crypto portfolio. With our intuitive interface, you can easily buy, sell, and store your digital assets. Plus, our advanced security features provide peace of mind that your funds are safe and secure. Get started today and join the future of finance with Dyleum.</p>
                <AppButton
                    title="Read more"
                />
            </Col>
        </Row>
    )
}

export default TradingSection