import React from 'react';
import ProductCard from './ProductCard';
import Slider from 'react-slick';

const ProductCarousel = ({ products }) => {
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
        {products.map(product => (
          <div key={product.id}>
            <ProductCard
              imageSrc={product.imageSrc}
              name={product.name}
              description={product.description}
              price={product.price}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
