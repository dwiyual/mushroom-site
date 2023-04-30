import React from 'react';
import "../../src/index.css";


function ShopItem(props) {
  const { name, image, description, price,  } = props;

  return (
    
    <div className="shop-item">
      <img className='shop-img' src={image} alt={name} />
      <div className="item-details">
        <h3>{name}</h3>
        <p>{description}</p>
        <p>${price}/Lbs</p>
        <button>Add to cart</button>
      </div>
    </div>
  );
}

export default ShopItem;
