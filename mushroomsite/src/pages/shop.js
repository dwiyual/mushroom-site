import React from "react";
import ShopItem from "../components/ShopItemComponent";
import Navbar from "../components/NavBarComponent"


function Shop () {
    return (
        <div>
            <Navbar></Navbar>
            <div className="Shop">
                <div className="ShopItem">
                    <ShopItem />
                </div>
            </div>
        </div>
    )
}

export default Shop;