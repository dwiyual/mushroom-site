import React from 'react';
import Slider from 'react-slick';
import ShopItem from './ShopItemComponent';

const products = [
{id: 1, imageSrc: "../src/images/LionsMane.jpg", name:"Lion's Mane", description:"Lion's Mane mushroom", price: 20}
]

const ProductCarousel = ({ products}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  return (
    <div className="product-carousel">
      <Slider {...settings}>
        <ShopItem />
        {products.map(product => (
          <div key={product.id}
              imageSrc={product.imageSrc}
              name={product.name}
              description={product.description}
              price={product.price}
          >
          
          </div>
          
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
