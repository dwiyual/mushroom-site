import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ShopItem from './ShopItem';


const ProductCarousel = ({ products }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  const ShopItems = [
    {
      id: 1,
      name: 'Lionsmaine',
      imageSr: './images/LionsMane.png',
      description: 'Lionsmaine mushroom is very benificial to your brain.',
      price: '20'
    }
  ];
  

  return (
    <div className="product-carousel">
      <Slider {...settings}>
      {ShopItems.map(item => (
          <ShopItem key={item.id} name={item.name} imageSr={item.imageSr} description={item.description} price={item.price} />
        ))}
      </Slider>
      </div>
  );
};

export default ProductCarousel;
