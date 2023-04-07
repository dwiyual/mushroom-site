import React from 'react';

const ShopItem = ({ imageSrc, name, description, price }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={imageSrc} alt={name} />
      </div>
      <div className="product-info">
        <h3>{name}</h3>
        <p>{description}</p>
        <p>{price}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ShopItem;

