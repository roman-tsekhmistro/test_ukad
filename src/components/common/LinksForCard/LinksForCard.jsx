import styles from './links-for-card.module.scss';

const LinksForCard = ({ links }) => {
	return (
		<ul className={styles.links_wrapper}>
			{links.map((link, index) => (
				<a key={index} href={link.url} target='_blank' rel='noreferrer'>
					{link.type}
				</a>
			))}
		</ul>
	);
};

export default LinksForCard;
