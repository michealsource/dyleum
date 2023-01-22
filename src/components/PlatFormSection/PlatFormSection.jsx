import React from 'react'
import styles from './PlatFormSection.module.css'
import one from '../../assets/images/one.png'
import two from '../../assets/images/two.png'
import three from '../../assets/images/three.png'
import four from '../../assets/images/four.png'
import five from '../../assets/images/five.png'
import { Col, Row } from 'react-bootstrap'
const PlatFormSection = () => {
    return (
        <div className={styles.platformContainer}>
            <h5 className={styles.tradingH5Text}>A BETTER WAY TO INVEST</h5>
            <h4 className={styles.tradingH6Text}>The World Leading Crytocurrency Platform</h4>
            <Row className="gap-1 mt-5" style={{ width: '100%', marginLeft: 'auto', marginRight: "auto" }}  >
                <div data-aos="zoom-in"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <Col >
                        <div className={styles.box}>
                            <div className={styles.Imgbox}>
                                <img src={one} alt="" className={styles.boxImg1} />
                            </div>

                            <h3 className={styles.tradingH3Text}>100% Satisfaction</h3>
                            <p className={styles.platformText}>At Dyleum we guarantee 100% satisfaction with our one-stop protocol. Our platform provides customers with a seamless experience that is fast, secure, and easy to use. </p>
                        </div>

                    </Col>
                    <Col>
                        <div className={styles.box} >
                            <div className={styles.Imgbox}>
                                <img src={two} alt="" className={styles.boxImg1} />
                            </div>

                            <h3 className={styles.tradingH3Text}>24/7 Support</h3>
                            <p className={styles.platformText}>e are committed to providing the highest quality service, and our team is available 24/7 to ensure that every customer is satisfied with their experience. </p>
                        </div>

                    </Col>
                    <Col>
                        <div className={styles.box} >
                            <div className={styles.Imgbox}>
                                <img src={three} alt="" className={styles.boxImg1} />
                            </div>

                            <h3 className={styles.tradingH3Text}>24/7 Support</h3>
                            <p className={styles.platformText}>
                                Smooth Trading
                                We also provide a variety of tools to help users manage their trading portfolios and maximize their investment returns. Our goal is to ensure secure and reliable trades, so you can focus on what matters most - your business.
                            </p>
                        </div>

                    </Col>
                </div>
            </Row>





            <Row className="gap-1 mt-4" style={{ width: '100%', marginLeft: 'auto', marginRight: "auto" }} >
                <div data-aos="zoom-in"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">


                    <Col >
                        <div className={styles.box} >
                            <div className={styles.Imgbox}>
                                <img src={four} alt="" className={styles.boxImg4} />
                            </div>

                            <h3 className={styles.tradingH3Text}>Risk Free </h3>
                            <p className={styles.platformText}>Dyleum’s risk-free protocol ensures your digital assets are safe with built-in smart contracts and a decentralized infrastructure, providing a secure and reliable platform for storage and management. </p>
                        </div>

                    </Col>
                    <Col >
                        <div className={styles.box}>
                            <div className={styles.Imgbox}>
                                <img src={five} alt="" className={styles.boxImg5} />
                            </div>

                            <h3 className={styles.tradingH3Text}>Bonus & Incentives</h3>
                            <p className={styles.platformText}>Earn rewards for referrals and community participation with Dyleum, including bug reporting. Invite friends and contribute to earn bonuses. </p>
                        </div>

                    </Col>
                    <Col >
                        <div className={styles.box}>
                            <div className={styles.Imgbox}>
                                <img src={one} alt="" className={styles.boxImg1} />
                            </div>

                            <h3 className={styles.tradingH3Text}>Low Cost Trading</h3>
                            <p className={styles.platformText}> Our platform offers a range of features to make trading easier, including fast trade execution, and low transaction fees.</p>
                        </div>

                    </Col>
                </div>
            </Row>
        </div>
    )
}

export default PlatFormSection