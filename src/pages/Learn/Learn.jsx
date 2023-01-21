import React from 'react'
import learn1 from '../../assets/images/learn/learn1.png'
import learn2 from '../../assets/images/learn/learn2.png'
import learn3 from '../../assets/images/learn/learn3.png'
import learn4 from '../../assets/images/learn/learn4.png'
import learn5 from '../../assets/images/learn/learn5.png'
import learn6 from '../../assets/images/learn/learn6.png'
import learn7 from '../../assets/images/learn/learn7.png'
import { Col, Row } from 'react-bootstrap'


import styles from './learn.module.css'
import WishList from '../../components/wishList/wishList'
const Learn = () => {
    return (
        <div className={styles.learnContainer}>
            <div>
                <Row className='gx-5'>
                    <Col>
                        <div className={styles.aboutContent}>
                            <h4>Liquidity Pool</h4>
                            <p>Users can earn rewards in the form of tokens, such as Dyleum token $LEUM, for providing liquidity to the market through flexible and adaptable programs that are sustainable, transparent, and fair. Also, Dyleum eliminates the price risks associated with liquidity mining between two coins and uses only stablecoins, simplifies the process and can automatically reinvests daily profits to increase user's balance in liquidity mining.
                            </p>

                        </div>
                    </Col>
                    <Col>
                        <img src={learn1} alt="" className={styles.learnImg1} />
                    </Col>

                </Row>
            </div>

            <div className={styles.marginTop}>
                <Row className='gx-5'>

                    <Col>
                        <img src={learn2} alt="" className={styles.learnImg1} />
                    </Col>

                    <Col>
                        <div className={styles.aboutContent}>
                            <h4>NFC Payments</h4>
                            <p>An easy and secure NFC payment solution for businesses and daily transactions, allowing users to accept payments using NFC or QR codes and storing customer data and money while ensuring anonymity. With the support of virtual debit cards, Dyleum's NFC payment method allows for seamless, cashless and cardless transactions using Dyleum Token $LEUM and stablecoins."
                            </p>

                        </div>
                    </Col>

                </Row>
            </div>

            <div className={styles.marginTop}>
                <Row className='gx-5'>
                    <Col>
                        <div className={styles.aboutContent}>
                            <h4>NFTs</h4>
                            <p>We offer a revolutionary platform for trading real-world assets via NFT assets, allowing users to access, create, sell and rent properties using the same strategy employed by the top 1% of the global population. Dyleum NFT marketplace will initially focus on estates in various continents, Europe, Africa and beyond and will provide access to unique NFTs backed by real-world utility, with an aim to create the first investment destination for all types of real estate assets."
                            </p>

                        </div>
                    </Col>

                    <Col>
                        <img src={learn3} alt="" className={styles.learnImg1} />
                    </Col>

                </Row>
            </div>

            <div className={styles.marginTop}>
                <Row className='gx-5'>
                    <Col>
                        <img src={learn4} alt="" className={styles.learnImg1} />
                    </Col>
                    <Col>
                        <div className={styles.aboutContent}>
                            <h4>DefInvestment</h4>
                            <p>The DeFi investment pool allows users to invest in a variety of smart contract-controlled, transparent investment plans and diversify across multiple cryptocurrencies, while generating profits from its automated system daily and also be rewarded for participation in the pool investment, paid in Dyleum token $LEUM.
                            </p>

                        </div>
                    </Col>
                </Row>
            </div>

            <div className={styles.marginTop}>
                <Row className='gx-5'>


                    <Col>
                        <div className={styles.aboutContent}>
                            <h4>Decentralized Exchange</h4>
                            <p>Our decentralized exchange allows users to swap different coin pairs across chains in a non-custodial and cost-efficient manner. With our automated market-making protocol and fair liquidity rewards, Dyleum makes web3 trading more accessible and seamless for users of all levels of experience.
                            </p>

                        </div>
                    </Col>

                    <Col>

                    </Col>
                </Row>
            </div>
            <div className={styles.marginTop}>
                <Row className='gx-5'>
                    <Col>
                        <img src={learn5} alt="" className={styles.learnImg1} />
                    </Col>
                    <Col>
                        <div className={styles.aboutContent}>
                            <h4>DApp Evaluation</h4>
                            <p>Users can discover and access high-quality projects, curated by a community of regulators who vote on cryptocurrency projects using LEUM. The program aims to help users identify the best projects, avoid scams and rug pulls, and make informed decisions by offering transparent and fair evaluations of DApps, and also incentivize regulators to conduct thorough research and make careful decisions when evaluating projects.
                            </p>

                        </div>
                    </Col>
                </Row>
            </div>

            <div className={styles.marginTop}>
                <Row className='gx-5'>
                    <Col>
                        <div className={styles.aboutContent}>
                            <h4>P2P Exchange</h4>
                            <p>Our decentralized peer-to-peer (P2P) exchange platform enables secure, transparent and flexible trading of multiple cryptocurrencies. With its decentralized application, Dyleum eliminates the need of a third-party intermediary, providing greater control, low fees, and allowing for both crypto and traditional payment methods.

                            </p>

                        </div>
                    </Col>
                    <Col>
                        <img src={learn6} alt="" className={styles.learnImg1} />
                    </Col>

                </Row>
            </div>

            <div className={styles.marginTop}>
                <Row className='gx-5'>
                    <Col>
                        <img src={learn7} alt="" className={styles.learnImg1} />
                    </Col>
                    <Col>
                        <div className={styles.aboutContent}>
                            <h4>Staking</h4>
                            <p>A staking program where users can earn rewards by holding and actively supporting the security of the Dyleum network. By staking their Dyleum tokens, users can earn a share of transaction fees and support the stability and growth of the Dyleum ecosystem while rewarding stakers weekly.
                            </p>

                        </div>
                    </Col>
                </Row>
            </div>

            <WishList />

        </div>
    )
}

export default Learn