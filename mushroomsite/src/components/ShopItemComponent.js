import React from 'react';
import "../../src/index.css";

const products = [
  {id: 1, imageSrc: "../src/images/LionsMane.png", name:"Lion's Mane", description:"Lion's Mane mushroom", price: 20}
  ]

const ShopItem = ({ imageSrc, name, description, price }) => {
    return (
    <div className="ShopItem">
      <div className="product-image">
        <img src={products[0].imageSrc} alt={products[0].name} />
      </div>
      <div className="product-info">
        <h6>{products[0].name}</h6>
        <p>{products[0].description}</p>
        <p>{products[0].price}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default ShopItem;

