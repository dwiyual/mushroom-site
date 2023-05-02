import React from "react";
import ProductCarousel from "../components/ProductCarousel";
import "../index.css";


function Shop() {


    return (
        <div>
            <div className="Shop">
                <div className="ShopItem">
                    <ProductCarousel></ProductCarousel>
                </div>
            </div>
        </div >
    );
}

export default Shop;