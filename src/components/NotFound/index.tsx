//import { useNavigate } from 'react-router-dom';
import Link from "next/link";
import styles from "./index.module.scss";

const NotFoundComponent = () => {
	return (
		<div className={styles.not}>
			<p className={styles.not__title}>404</p>
			<p className={styles.not__text}>Page was not found</p>
			<Link href="/">
			<div className={styles.not__btn} >
				Back to homepage
			</div>
			</Link>
		</div>
	);
};

export default NotFoundComponent;
