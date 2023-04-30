import React from "react";
import ShopItem from "../components/ShopItemComponent";



function Shop () {
    return (
        <div>
            <div className="Shop">
                <div className="ShopItem">
                    <ShopItem name='Lionsmaine' image='./images/LionsMane.png' description='Lionsmaine mushroom is very benificial to your brain.' price ='20' >
                        
                    </ShopItem>
                </div>
            </div>
        </div>
    )
}

export default Shop;