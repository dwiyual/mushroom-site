import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style.css";
import React from 'react'


const ImageSlider = ({ images }) => {

	const settings = {
		width: 100,
		dots: true,
		fade: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1

	};
	return (
		<>
			<div className="tag">
				<h1>Image Gallery</h1>
			</div>
			<div className="imgslider">
				<Slider {...settings}>
					{images.map((item) => (
						<div key={item.id}>
							<img src={item.src} alt={item.alt} />
						</div>


					))}
				</Slider>
				<div>
					<h3>{ImageSlider.name}</h3>
					<p>{ImageSlider.description}</p>
					<p>${ImageSlider.price}</p>
					<button>Add to cart</button>
				</div>
			</div>
		</>
	)
}
export default ImageSlider;
