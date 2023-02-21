import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HeroCard from '../common/HeroCard';
import Slider from 'react-slick';
import './slider.scss';

const HeroesSlider = ({ heroes }) => {
	const settings = {
		draggable: false,
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
	};

	return (
		<Slider {...settings}>
			{heroes ? (
				heroes.map((hero, index) => <HeroCard key={index} hero={hero} />)
			) : (
				<h1>Fetching</h1>
			)}
		</Slider>
	);
};
export default HeroesSlider;
