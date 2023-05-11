import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style.css";
import React from 'react'


export const ImageSlider = ({ images }) => {

	const settings = {
		width: 100,
		dots: true,
		fade: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		className: "center",
		centerPadding: "60px",

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
							<div>
								<h3>{item.name}</h3>
								<p>{item.description}</p>
								<p>${item.price}</p>
								<button>Add to cart</button>
							</div>

						</div>
					))}
				</Slider>
			</div>
		</>
	)
}
