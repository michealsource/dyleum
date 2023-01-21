import React, { useState } from 'react'
import styles from './navbar.css'
import logo from '../../assets/images/dyleumLogo.png'
import menu from '../../assets/images/menu.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [active, setActive] = useState('linksContainer')

    const Toggle = () => {
        active === "linksContainer" ? setActive('linksContainer activeNavbar') : setActive('linksContainer')
    }
    return (
        <div className='navbarContainer'>
            <img src={logo} alt="" className='img' />

            <div className={active}>
                <Link to="/">Home</Link>
                <Link to="/learn">Learn</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/about">About Us</Link>
                <Link to="/team">Our Team</Link>
                <Link to="">FAQ</Link>
            </div>
            <img src={menu} alt="" className="menu" onClick={Toggle} />
            <button className="lunchBtn">Launch App</button>
        </div>
    )
}

export default Navbar