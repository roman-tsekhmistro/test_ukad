import styles from './slider.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper';
import HeroCard from '../common/HeroCard';
import ArrowNext from '../../assets/images/arrow_next.svg';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/autoplay';

const Slider = ({ heroes }) => {
	return (
		<Swiper
			className={styles.slider}
			spaceBetween={17}
			modules={[Navigation, A11y]}
			navigation={{ nextEl: '#button_next', prevEl: '#button_prev' }}
			slidesPerView={4}
		>
			<button id='button_next' className={styles.button_next}>
				<img src={ArrowNext} alt='arrow' />
			</button>
			<button id='button_prev' className={styles.button_prev}>
				<img src={ArrowNext} alt='arrow' />
			</button>
			{heroes ? (
				heroes.map((hero, index) => (
					<SwiperSlide key={index}>
						<HeroCard hero={hero} />
					</SwiperSlide>
				))
			) : (
				<h1>Fetching</h1>
			)}
		</Swiper>
	);
};

export default Slider;
