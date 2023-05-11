import React from 'react';
import "../../src/index.css";

function onClick(e) {
	return (
		console.log('button has been clicked')
	);

}

function ShopItem(props) {
  const { key, name, imageSrc, description, price } = props;

  return (
    <div className="shop-item" >
      <img src={imageSrc} alt={name} key={key} />
      <div className="item-details">
        <h3>{name}</h3>
        <p>{description}</p>
        <p>${price}</p>
        <button onClick={onClick}>Add to cart</button>
      </div>
    </div>
  );
}




export default ShopItem;
