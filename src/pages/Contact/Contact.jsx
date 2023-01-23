import React from 'react'
import { Col, Row } from 'react-bootstrap'
import styles from './Contact.module.css'
import AppButton from '../../components/AppButton/AppButton'
import { FaFacebook, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'
import WishList from '../../components/wishList/wishList'

const Contact = () => {
    return (
        <div className={styles.contactContainer}>
            <div className='row' style={{ width: "95%", marginLeft: 'auto', marginRight: "auto" }}>
                <div className='col-lg-8'>
                    <h2 className={styles.contactHead}>Contact Us</h2>
                    <div className={styles.contactInputContainer}>
                        <input type="text" placeholder='Name' />
                        <input type="text" placeholder='Email' />
                    </div>
                    <div className={styles.contactInputContainer}>
                        <input type="text" placeholder='Subject' />
                    </div>
                    <textarea placeholder='Write Message' className={styles.contactMessageContainer}>

                    </textarea>
                    <AppButton
                        title="Submit"
                    />
                </div>
                <div className='col-lg-4'>
                    <div className={styles.infoContainer}>
                        <h2>More About Us</h2>
                        <p>Our customer support team is available to assist you with any issues you may have, and we will do our best to respond to your inquiry as quickly as possible. We value your feedback and are always looking for ways to improve our services, so please don't hesitate to contact us with your thoughts or suggestions.</p>
                        <div className={styles.emailBox}>
                            <FaEnvelope className={styles.emailIcon} />
                            Info@dyleum.com
                        </div>

                        <div className={styles.socialMediaLinks}>
                            <FaFacebook />
                            <FaTwitter />
                            <FaLinkedin />
                        </div>
                    </div>

                </div>
            </div>
            <WishList />
        </div>
    )
}

export default Contact