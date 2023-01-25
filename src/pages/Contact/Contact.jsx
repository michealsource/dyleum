import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css'
import AppButton from '../../components/AppButton/AppButton'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaFacebook, FaLinkedin, FaTwitter, FaEnvelope, FaTelegram } from 'react-icons/fa'
import WishList from '../../components/wishList/wishList'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_zg6be14', 'template_ee5st4m', form.current, 'QFWHAkaDBhLCcMJQc')
            .then((result) => {
                toast.success('Email sent successfully', {
                    position: toast.POSITION.TOP_RIGHT
                })
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <>
            <div className={styles.contactContainer}>
                <div className='row' style={{ width: "95%", marginLeft: 'auto', marginRight: "auto" }}>
                    <div className='col-lg-8'>
                        <h2 className={styles.contactHead}>Contact Us</h2>
                        <div className={styles.contactInputContainer}>
                            <form ref={form} onSubmit={sendEmail}>
                                {/* <label>Name</label>
                                <input type="text" name="user_name" />
                                <label>Email</label>
                                <input type="email" name="user_email" />
                                <label>Message</label>
                                <textarea name="message" />
                                <input type="submit" value="Send" /> */}

                                <input type="text" placeholder='Name' name="user_name" />
                                <input type="text" placeholder='Email' name="user_email" />
                                <input type="text" placeholder='Subject' />
                                <textarea placeholder='Write Message' className={styles.contactMessageContainer} name="message" />
                                <input type="submit" value="Send" className={styles.btnBox} />

                            </form>

                        </div>
                        {/* <AppButton
                            title="Submit"
                        /> */}
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
                                <a href="https://t.me/dyleum" target="_blank" rel="noopener noreferrer">
                                    <FaTelegram />
                                </a>
                                <a href="https://twitter.com/dyleum_com" target="_blank" rel="noopener noreferrer">
                                    <FaTwitter />
                                </a>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <WishList />
            <ToastContainer />
        </>
    )
}

export default Contact