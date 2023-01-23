import React from 'react'
import user1 from '../../assets/images/user1.png'
import user2 from '../../assets/images/user2.png'
import user3 from '../../assets/images/user3.png'
import { Col, Row } from 'react-bootstrap'
import styles from './OurTeam.module.css'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'
import WishList from '../../components/wishList/wishList'
const OurTeam = () => {
    return (
        <>
            <div className={styles.ourTeamContainer}>

                <div className='row' style={{ width: "100%", marginLeft: 'auto', marginRight: 'auto' }}>
                    <h1 className={styles.ourTeamHeader}>Meet our team of cypto experts</h1>
                    <p className={styles.ourTeamText}>We are a team of passionate and experienced individuals who have come together to create a revolutionary crypto project that aims to revolutionize the industry. With our cutting-edge technology and forward-thinking approach, we are dedicated to making a real difference in the world of cryptocurrency. Join us in our mission to shape the future of finance.</p>

                    <div className='col-lg-4'>
                        <div className={styles.teamBox}>
                            <img src={user1} alt="" className={styles.imgTeam} />
                            <h4>Handsome Smith</h4>
                            <span>CEO</span>
                            <p>Lorem ipsum dolor sit amet consectetur. Tellus ut consectetur libero nibh tristique blandit sed. Sit mauris dignissim sed risus phasellus. Et enim amet semper et nulla mattis consectetur sit metus. Sit adipiscing.</p>
                            <div className={styles.socialMediaLinks}>
                                <FaFacebook />
                                <FaTwitter />
                                <FaLinkedin />
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className={styles.teamBox}>
                            <img src={user2} alt="" className={styles.imgTeam} />
                            <h4>John Doe</h4>
                            <span>CTO</span>
                            <p>Lorem ipsum dolor sit amet consectetur. Tellus ut consectetur libero nibh tristique blandit sed. Sit mauris dignissim sed risus phasellus. Et enim amet semper et nulla mattis consectetur sit metus. Sit adipiscing.</p>
                            <div className={styles.socialMediaLinks}>
                                <FaFacebook />
                                <FaTwitter />
                                <FaLinkedin />
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className={styles.teamBox}>
                            <img src={user3} alt="" className={styles.imgTeam} />
                            <h4>Junkie Bassey</h4>
                            <span>COO</span>
                            <p>Lorem ipsum dolor sit amet consectetur. Pretium sed lacus bibendum ac quisque. Viverra ut amet ornare egestas neque sit aenean etiam. Aliquam proin odio malesuada enim et mi massa at sagittis.</p>
                            <div className={styles.socialMediaLinks}>
                                <FaFacebook />
                                <FaTwitter />
                                <FaLinkedin />
                            </div>
                        </div>
                    </div>
                </div>


                {/* <h1 className={styles.ourTeamHeader}>Meet our team of cypto experts</h1>
            <p className={styles.ourTeamText}>We are a team of passionate and experienced individuals who have come together to create a revolutionary crypto project that aims to revolutionize the industry. With our cutting-edge technology and forward-thinking approach, we are dedicated to making a real difference in the world of cryptocurrency. Join us in our mission to shape the future of finance.</p>

            <div className='row' style={{ width: "100%", backgroundColor: 'red' }}>
                <div className='col-lg-4'>
                    <div className={styles.teamBox}>
                        <img src={user1} alt="" className={styles.imgTeam} />
                        <h4>Handsome Smith</h4>
                        <span>CEO</span>
                        <p>Lorem ipsum dolor sit amet consectetur. Tellus ut consectetur libero nibh tristique blandit sed. Sit mauris dignissim sed risus phasellus. Et enim amet semper et nulla mattis consectetur sit metus. Sit adipiscing.</p>
                        <div className={styles.socialMediaLinks}>
                            <FaFacebook />
                            <FaTwitter />
                            <FaLinkedin />
                        </div>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className={styles.teamBox}>
                        <img src={user2} alt="" className={styles.imgTeam} />
                        <h4>John Doe</h4>
                        <span>CTO</span>
                        <p>Lorem ipsum dolor sit amet consectetur. Tellus ut consectetur libero nibh tristique blandit sed. Sit mauris dignissim sed risus phasellus. Et enim amet semper et nulla mattis consectetur sit metus. Sit adipiscing.</p>
                        <div className={styles.socialMediaLinks}>
                            <FaFacebook />
                            <FaTwitter />
                            <FaLinkedin />
                        </div>
                    </div>
                </div>

                <div className='col-lg-4'>
                    <div className={styles.teamBox}>
                        <img src={user3} alt="" className={styles.imgTeam} />
                        <h4>Junkie Bassey</h4>
                        <span>COO</span>
                        <p>Lorem ipsum dolor sit amet consectetur. Pretium sed lacus bibendum ac quisque. Viverra ut amet ornare egestas neque sit aenean etiam. Aliquam proin odio malesuada enim et mi massa at sagittis.</p>
                        <div className={styles.socialMediaLinks}>
                            <FaFacebook />
                            <FaTwitter />
                            <FaLinkedin />
                        </div>
                    </div>
                </div>
            </div>
             */}
            </div>

            <WishList />
        </>
    )
}

export default OurTeam