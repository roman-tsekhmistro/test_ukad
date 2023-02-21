import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_KEY, BASE_URL } from '../../api/config';
import HeroCard from '../../components/common/HeroCard';
import { fetchHeroes } from '../../redux/thunk/heroes';
import styles from './heroes.module.scss';

const Heroes = () => {
	const dispatch = useDispatch();
	const { heroes } = useSelector((state) => state);

	useEffect(() => {
		dispatch(fetchHeroes(`${BASE_URL}/characters?&apikey=${API_KEY}`));
	}, [dispatch]);

	return (
		<ul className={styles.hero_list}>
			{heroes ? (
				heroes.map((hero, index) => <HeroCard key={index} hero={hero} />)
			) : (
				<h1>Fetching</h1>
			)}
		</ul>
	);
};

export default Heroes;
