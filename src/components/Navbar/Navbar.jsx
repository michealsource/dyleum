import React, { useState } from 'react'
import './navbar.css'
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
                <a href="/">Home</a>
                <a href="/learn">Learn</a>
                <a href="/contact">Contact</a>
                <a href="/about">About Us</a>
                <a href="/team">Our Team</a>
                <a href="">FAQ</a>
            </div>
            <img src={menu} alt="" className="menu" onClick={Toggle} />
            <button className="lunchBtn">Launch App</button>
        </div>
    )
}

export default Navbar