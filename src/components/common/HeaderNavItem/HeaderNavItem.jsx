import classNames from 'classnames';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/UKAD_logo.svg';
import styles from './header-nav-item.module.scss';

const HeaderNavItem = ({ navImg, navText, path, isActive }) => {
	return (
		<Link
			to={path}
			className={classNames(styles.item, { [styles.active]: isActive })}
		>
			{navText}
			{navImg ? <img src={logo} alt='logo' /> : null}
		</Link>
	);
};

export default HeaderNavItem;
