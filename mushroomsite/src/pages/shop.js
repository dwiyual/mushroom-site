import React from "react";
import "../index.css";
import ImageSlider from "../components/ImageSlider";
import images from "../images/img";


function Shop() {


    return (
        <div>
            <div className="Shop">
                <div className="ShopItem">
                    <ImageSlider images={images} />
                </div>
            </div>
        </div >
    );
}

export default Shop;