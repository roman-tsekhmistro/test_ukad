import { useLocation } from 'react-router-dom';
import HeaderNavItem from '../common/HeaderNavItem';
import styles from './header-nav-list.module.scss';

const HeaderNavList = () => {
	const { pathname } = useLocation();
	const LINKS = [
		{ isLogo: true, href: '/' },
		{ linkText: 'Home', href: '/' },
		{ linkText: 'All heroes', href: '/heroes' },
	];

	return (
		<ul className={styles.nav_list}>
			{LINKS.map((link, index) => (
				<HeaderNavItem
					key={index}
					navText={link.linkText}
					path={link.href}
					navImg={link.isLogo}
					isActive={pathname === link.href && !link.isLogo}
				/>
			))}
		</ul>
	);
};

export default HeaderNavList;
