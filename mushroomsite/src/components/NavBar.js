import React from "react";
import '../index';
import { Link } from "react-router-dom";


function NavBar() {
    return (
        <nav id="NavBar" style={{
            backgroundImage: `gradient(to right, hex#60362a, hex#1c1718)`,
            alignItems: `center`,
            justifyContent: `center`,}}>
                
            
            <div id="NavLinks" style={{
                display: `flex`,
                justifyContent: `flex-end`,
                alignItems: `center`,
                textDecoration: `none`,
                textDecorationColor: `white`,
                textDecorationLine: `none`,
                margin: `0 2rem 0 36rem`,}}> 

                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/growkit">Grow Kit</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <label>
                <input type="text" name="search" /> Search
            </label>
        </nav>
    )
}

export default NavBar;
