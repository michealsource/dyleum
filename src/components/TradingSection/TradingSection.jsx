import React from 'react'
import styles from './TradingSection.module.css'
import trading from '../../assets/images/trading.png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AppButton from '../AppButton/AppButton';
const TradingSection = () => {

    return (
        <div className={styles.tradingContainer}>
            <Row style={{ width: "100%", marginLeft: 'auto', marginRight: 'auto' }}>

                <div class="col-lg-5">
                    <img src={trading} alt="" className={styles.tradingImg}
                        data-aos="flip-right"
                        data-aos-easing="ease-out-cubic" />
                </div>
                <div class="col-lg-7">
                    <div
                        data-aos="flip-right"
                        data-aos-easing="ease-out-cubic">
                        <h6 className={styles.tradingH6Text}>BEST TRADING EXPERIENCE</h6>
                        <h5 className={styles.tradingH5Text}>Trade Anywhere & Anytime!</h5>
                        <p className={styles.tradingText}>Dyleum simplifies and secures crypto transactions with blockchain and fintech. Our products cater to all levels of investors, allowing easy management of digital assets. Advanced security ensures your funds are safe. Join the future of finance with Dyleum.</p>

                        <button className={styles.btn}>
                            <a href="https://dyleum.gitbook.io" target="_blank" rel="noopener noreferrer">Read more</a></button>
                    </div>

                </div>
            </Row>
        </div>
    )
}

export default TradingSection