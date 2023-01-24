import React from 'react'
import styles from './home.module.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import hand from '../../assets/images/hand.png'
import card from '../../assets/images/cardMobile.png'
import BgImg from '../../assets/images/bgImg2.png'
import storeMobile from '../../assets/images/storeMobile.png'
import lunchApp from '../../assets/images/LaunchApp.png'
import TradingSection from '../TradingSection/TradingSection';
import PlatFormSection from '../PlatFormSection/PlatFormSection';
import World from '../world/world';
import LearnMore from '../LearnMore/LearnMore';
import Tokenomics from '../ Tokenomics/ Tokenomics';
import RoadMap from '../RoadMap/RoadMap';
import FaqSection from '../FaqSection/FaqSection';
import NewsLetter from '../newsLetter/newsLetter';
const Home = () => {
    return (
        <>
            <Row style={{ width: "100%" }}>
                <Col class="col-sm-8"
                    data-aos="fade-down"
                    data-aos-easing="ease-out-cubic"

                >
                    <div className={styles.homeTextContainer}>
                        <h1 className={styles.homeHeaderText}>Empowering Decentralized Trading</h1>
                        <img src={card} alt="" className={styles.mobileCardImg} />
                        <p className={styles.bottomText}>Experience the future of finance with our DeFi protocol. Empowering you to access the decentralized financial market and unlock its potential with ease.</p>
                    </div>
                    <div className={styles.actionWrapper}>
                        <button className={styles.wishListBtn}>
                            <a href="https://forms.gle/uvkp5p3wHRL3irwR9" target="_blank">Join Whitelist</a>
                        </button>
                        {/* <img src={lunchApp} alt="" /> */}
                        <button className={styles.wishListBtnLunch}>
                            Launch App
                        </button>
                    </div>
                </Col>
                <Col class="col-sm-4" data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                >
                    <img src={hand} alt="" className={styles.handImg} />
                </Col>
            </Row>
            <div className={styles.straightLine} />
            <img src={BgImg} alt="" className={styles.buyStoreImg} data-aos="flip-right"
                data-aos-easing="ease-out-cubic"
            />
            <img src={storeMobile} alt="" className={styles.storeMobileDisplay} data-aos="flip-right"
                data-aos-easing="ease-out-cubic" />
            <TradingSection />
            <PlatFormSection />
            <World />
            <LearnMore />

            <Tokenomics />
            <RoadMap />
            <FaqSection />
            <NewsLetter />

        </>
    )
}

export default Home