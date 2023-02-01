import React from 'react'
import styles from './Footer.module.css'
import logo from '../../assets/images/dyleumLogo.png'
import { FaFacebook, FaTelegram, FaDiscord, FaTwitter, FaLinkedin, FaMedium } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <>
            <div className={styles.newsLetterContainer}>
                <div>
                    <Link to="/">
                        <img src={logo} alt="" className={styles.imgLogo} />
                    </Link>

                    <span className={styles.year} >@Dyleum2023</span>
                </div>
                <div className={styles.footerBox}>
                    <Link to="/learn">Learn</Link>
                    <a href="https://dyleum.gitbook.io/whitepaper/our-products" target="_blank" rel="noopener noreferrer">Product</a>

                    <a href="https://dyleum.gitbook.io">Documentation</a>

                    <a href="./dyleum.pdf" download>Pitch Deck</a>
                </div>
                <div className={styles.footerBox}>
                    <a href="/about">About Us</a>
                    <a href="/contact">Contact Us</a>
                    <a href="/team">Our Team</a>

                </div>
                <div className={styles.footerBox}>
                    <a href="/faq">FAQ</a>
                </div>
                <div>
                    <div className={styles.socialMediaLinks}>
                        {/* <FaFacebook /> */}
                        <a href="https://t.me/dyleum">
                            <FaTelegram className={styles.socialIcon} />
                        </a>

                        <a href="https://twitter.com/dyleum_com">
                            <FaTwitter className={styles.socialIcon} />
                        </a>

                        {/* <FaDiscord /> */}

                        {/* <FaLinkedin />
                        <FaMedium /> */}
                    </div>
                </div>
            </div>

            <div className={styles.mobileFooter}>
                <div className={styles.mobileFooterLinks}>
                    <Link to="/">
                        <img src={logo} alt="" className={styles.imgLogoMobile} />
                    </Link>

                    <div className={styles.mobileFooterLinkResponsivesnes}>
                        <a href="/learn">Learn</a>
                        <a href="/contact">Contact Us</a>
                        <a href="/faq">FAQ</a>
                        <a href="/about">About Us</a>
                        <a href="https://dyleum.gitbook.io/whitepaper/our-products" target="_blank" rel="noopener noreferrer">Product</a>
                        <a href="https://dyleum.gitbook.io" target="_blank" rel="noopener noreferrer">Documentation</a>
                        <a href="./dyleum.pdf" download>Pitch Deck</a>
                    </div>

                    {/* <a href="/team">Our Team</a> */}
                </div>

                <div>
                    <div className={styles.mobileFooterSocialLinks}>
                        <a href="https://t.me/dyleum" target="_blank" rel="noopener noreferrer">
                            <FaTelegram />
                        </a>

                        <a href="https://twitter.com/dyleum_com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter />
                        </a>
                        {/* <FaFacebook /> */}
                        {/* <FaTelegram /> */}
                        {/* <FaDiscord /> */}
                        {/* <FaTwitter /> */}
                        {/* <FaLinkedin />
                        <FaMedium /> */}
                    </div>

                    <div>

                    </div>
                </div>


            </div>
        </>
    )
}

export default Footer