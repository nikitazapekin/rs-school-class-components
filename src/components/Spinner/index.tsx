//import './index.scss';
import styles from "./index.module.scss"
const Spinner = () => {
	return (
		<>
			<span className={styles.loader} data-testid="loader"></span>
		</>
	);
};
export default Spinner;
