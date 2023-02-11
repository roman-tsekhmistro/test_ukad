import Footer from '../Footer/Footer';
import Header from '../Header';
import styles from './basic-layout.module.scss';

const BasicLayout = (props) => {
	return (
		<div className={styles.layout}>
			<Header />
			<div className={styles.content}>{props.children}</div> <Footer />
		</div>
	);
};

export default BasicLayout;
