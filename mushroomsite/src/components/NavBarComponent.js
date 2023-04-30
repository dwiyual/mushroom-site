import React from "react";
import { Link } from 'react-router-dom';
import '../App.css';

function NavBar() {
    return (
        <nav id="NavBar" style={{
            backgroundImage: `gradient(to right, hex#60362a, hex#1c1718)`,
            alignItems: `center`,
            justifyContent: `center`,
        }}>
            <image id="Logo">Logo Here</image>
            <div id="NavLinks" style={{
                display: `flex`,
                justifyContent: `flex-end`,
                alignItems: `center`,
                textDecoration: `none`,
                textDecorationColor: `white`,
                textDecorationLine: `none`,
                margin: `0 2rem 0 36rem`,
            }}>
                <Link to='/'><a className="navlink" href='#Home'>Home</a></Link>
                <Link to='/Shop'><a className="navlink" href='#Shop'>Shop</a></Link>
                <Link to='/GrowKit'><a className="navlink" href='#GrowKit'>Grow Kit</a></Link>
                <Link to='/Blog'><a className="navlink" href='#Blog'>Blog</a></Link>
                <Link to='/Contact'><a className="navlink" href='#Contact'>Contact us</a></Link>
            </div>
            <label>
                <input type="text" name="search" /> Search
            </label>
        </nav>
    )
}

export default NavBar;
