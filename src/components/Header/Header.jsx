import styles from './header.module.scss';
import HeaderNavList from '../HeaderNavList';

const Header = () => {
	return (
		<header className={styles.header}>
			<HeaderNavList />
		</header>
	);
};

export default Header;
