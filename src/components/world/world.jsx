import React from 'react'
import styles from './world.module.css'
import world from '../../assets/images/world.png'
import star from '../../assets/images/star.png'
import check from '../../assets/images/check.png'
import percentage from '../../assets/images/percentage.png'
import benefit from '../../assets/images/Benefits.png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import WishList from '../wishList/wishList'
const World = () => {
    return (
        <>
            <div className={styles.wordContainer}>
                <Row >
                    <Col class="col-lg-6">
                        <div className={styles.wordImgContainer} >
                            <img src={world} alt="" className={styles.wordImg} />
                            <h4>Benefits</h4>
                            <p>Efficient. Interoperable. Trustworthy.</p>
                        </div>
                        <div>
                            <img src={benefit} alt="" className={styles.benefitImg} />
                        </div>

                    </Col>
                    <Col class="col-lg-6">
                        <div className={styles.cardContainer}>
                            <div className={styles.boxCard}>
                                <div className={styles.headerBox}>
                                    <img src={star} alt="" width={30} height={30} />
                                    <span className={styles.headTitle}>Best Prices</span>
                                </div>
                                <p className={styles.BoxText}>Dyleum offers the best trading experience, with a secure and decentralized protocol that allows users to quickly and easily buy and sell digital assets.  </p>
                            </div>

                            <div className={styles.boxCard}>
                                <div className={styles.headerBox}>
                                    <img src={check} alt="" width={30} height={30} />
                                    <span className={styles.headTitle}>Secured and Insured</span>
                                </div>
                                <p className={styles.BoxText}>Our advanced technology provides users with unmatched speed, reliability and security. </p>
                            </div>

                            <div className={styles.boxCard}>
                                <div className={styles.headerBox}>
                                    <img src={percentage} alt="" width={30} height={30} />
                                    <span className={styles.headTitle}>Innovative Finance</span>
                                </div>
                                <p className={styles.BoxText}>Dyleum offers a seamless and secure platform for decentralized finance, enabling interoperable transactions, innovative solutions and decentralized access.  </p>
                            </div>
                        </div>
                    </Col>
                </Row>

            </div>
            <WishList />
        </>
    )
}

export default World