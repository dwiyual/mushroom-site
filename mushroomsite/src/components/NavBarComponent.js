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
            <img id="Logo" alt="logo" src="#">Logo Here</img>
            <div id="NavLinks"  style={{
                display: `flex`, 
                justifyContent: `flex-end`,
                alignItems: `center`,
                textDecoration: `none`,
                textDecorationColor: `white`,
                textDecorationLine: `none`,
                margin: `0 2rem 0 36rem`,
            }}>
                <a className="navlink" href='#Home'>Home</a>
                <a className="navlink" href='#Shop'>Shop</a>
                <a className="navlink" href='#GrowKit'>Grow Kit</a>
                <a className="navlink" href='#Blog'>Blog</a>
                <a className="navlink" href='#Contact'>Contact us</a>
            </div>
            <label>
                <input type="text" name="search" /> Search
            </label>
        </nav>
    )
}

export default NavBar;
