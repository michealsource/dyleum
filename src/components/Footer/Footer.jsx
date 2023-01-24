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
                    <a href="">Learn</a>
                    <a href="">Product</a>
                    <a href="">Documentation</a>
                    <a href="">Pitch Deck</a>

                </div>
                <div className={styles.footerBox}>
                    <a href="/about">About Us</a>
                    <a href="/contact">Contact Us</a>
                    <a href="/team">Our Team</a>

                </div>
                <div className={styles.footerBox}>
                    <a href="">FAQ</a>
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
                    <a href="/learn">Learn</a>
                    <a href="/contact">Contact Us</a>
                    <a href="">FAQ</a>
                    <a href="/about">About Us</a>
                    <a href="/team">Our Team</a>

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