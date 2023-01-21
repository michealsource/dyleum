import React from 'react'
import styles from './Footer.module.css'
import logo from '../../assets/images/dyleumLogo.png'
import { FaFacebook, FaTelegram, FaDiscord, FaTwitter, FaLinkedin, FaMedium } from "react-icons/fa";
const Footer = () => {
    return (
        <>
            <div className={styles.newsLetterContainer}>
                <div>
                    <img src={logo} alt="" className={styles.imgLogo} />
                    <span className={styles.year} >@Dyleum2023</span>
                </div>
                <div className={styles.footerBox}>
                    <span>Learn</span>
                    <span>Product</span>
                    <span>Documentation</span>
                    <span>Pitch Deck</span>

                </div>
                <div className={styles.footerBox}>
                    <span>About</span>
                    <span>Contact Us</span>
                    <span>Team</span>

                </div>
                <div className={styles.footerBox}>
                    <span>FAQ</span>
                </div>
                <div>
                    <div className={styles.socialMediaLinks}>
                        <FaFacebook />
                        <FaTelegram />
                        <FaDiscord />
                        <FaTwitter />
                        <FaLinkedin />
                        <FaMedium />
                    </div>
                </div>
            </div>

            <div className={styles.mobileFooter}>
                <div className={styles.mobileFooterLinks}>
                    <img src={logo} alt="" className={styles.imgLogoMobile} />
                    <span>Learn</span>
                    <span>Contact us</span>
                    <span>FAQ</span>
                    <span>About us</span>
                    <span>our team</span>
                </div>

                <div>
                    <div className={styles.mobileFooterSocialLinks}>
                        <FaFacebook />
                        <FaTelegram />
                        <FaDiscord />
                        <FaTwitter />
                        <FaLinkedin />
                        <FaMedium />
                    </div>

                    <div>

                    </div>
                </div>


            </div>
        </>
    )
}

export default Footer