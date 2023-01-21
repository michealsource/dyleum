import React from 'react'
import about from '../../assets/images/about.png'
import about2 from '../../assets/images/about2.png'
import about3 from '../../assets/images/about3.png'
import aboutSection from '../../assets/images/aboutSection.png'
import styles from './About.module.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import WishList from '../../components/wishList/wishList'
const About = () => {
    return (
        <div className={styles.aboutContainer}>
            <Row>
                <Col>
                    <div className={styles.aboutContent}>
                        <h4>From The Management</h4>
                        <p>Dyleum is a cutting-edge crypto protocol led by a team of experienced professionals with expertise in blockchain technology, data analysis, and the crypto market. Our team members have a wealth of knowledge in blockchain development, computer science, economics, product development, financial analysis, and community building.
                        </p>
                        <p>
                            They have been active in the crypto and forex market for several years, with a proven track record of delivering quality projects and services. We understand the importance of trust in the crypto industry and are committed to building a transparent and secure platform that puts the needs of our community first.
                        </p>
                    </div>
                </Col>
                <Col>
                    <img src={about} alt="" className={styles.aboutImg} />
                </Col>
            </Row>

            <div className={styles.straightLine} />


            <div className={styles.marginTop}>
                <Row>
                    <Col>
                        <img src={about2} alt="" className={styles.aboutImg2} />
                    </Col>
                    <Col>
                        <div className={styles.aboutContent}>
                            <h4>WHAT WE DO</h4>
                            <p>Dyleum is a decentralized protocol that aims to make DeFi easy, simple, and accessible to everyone, everywhere. We offer a variety of products and services that allow users to easily access and participate in the decentralized finance ecosystem, such as NFC payments, investment pools, liquidity mining, and a DApp Evaluation Program. We offer a unique staking program and referral program as a way to reward our users and support the overall health and security of our network.
                            </p>

                        </div>
                    </Col>
                </Row>
            </div>

            <div className={styles.marginTop}>
                <Row>
                    <Col>
                        <div className={styles.aboutContent}>
                            <h4>Best Trading Experience</h4>
                            <p>Dyleum offers a comprehensive decentralized finance platform that allows users to access a wide range of financial services and will ensure to add more exciting products and features. Our protocol is designed to be user-friendly and accessible to anyone, regardless of their level of technical expertise. Dyleum is built on Caduceus blockchain, which provides a high level of security and transparency, making it a safe and reliable choice for managing your digital assets.
                            </p>

                        </div>
                    </Col>
                    <Col>
                        <img src={about3} alt="" className={styles.aboutImg3} />
                    </Col>

                </Row>
            </div>

            <div>
                <img src={aboutSection} alt="" className={styles.missionSection} />
            </div>

            <WishList />
        </div>
    )
}

export default About