import LinksForCard from '../LinksForCard/LinksForCard';
import styles from './hero-card.module.scss';

const HeroCard = ({ hero }) => {
	const { name, thumbnail, urls } = hero;

	return (
		<li className={styles.card_wrapper}>
			<img src={thumbnail.path + '.' + thumbnail.extension} alt='Hero avatar' />
			<div className={styles.hero_info}>
				{urls ? <LinksForCard links={urls} /> : null}
				<h3 className={styles.name}>{name}</h3>
			</div>
		</li>
	);
};

export default HeroCard;
