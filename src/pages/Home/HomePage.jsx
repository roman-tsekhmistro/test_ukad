import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHeroes } from '../../redux/thunk/heroes';
import { BASE_URL, API_KEY } from '../../api/config';
import styles from './homePage.module.scss';

import Slider from '../../components/Slider';

const HomePage = () => {
	const dispatch = useDispatch();
	const { heroes } = useSelector((state) => state);

	useEffect(() => {
		dispatch(fetchHeroes(`${BASE_URL}/characters?limit=8&apikey=${API_KEY}`));
	}, [dispatch]);

	return (
		<div className={styles.home_page_wrapper}>
			<h1 className={styles.headling}>Home Page</h1>
			<Slider heroes={heroes} />
		</div>
	);
};

export default HomePage;
