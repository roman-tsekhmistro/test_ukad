import { Link } from 'react-router-dom';
import styles from './header-nav-item.module.scss';
import logo from '../../../assets/images/UKAD_logo.svg';
import classNames from 'classnames';

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
