import { useAppDispatch } from '../../hooks/redux';
import { useSelector } from 'react-redux';
import { storedUsersSelector } from '../../redux/selectors/getStoredElements';
import { useState } from 'react';
import styles from "./index.module.scss";
import { UserItem } from './types';
import { clearStoredElementsActionCreator } from '../../redux/action-creators/clearStoredElementsActionCreator';

const StoredUsersButton = () => {
	const dispatch = useAppDispatch();
	const users = useSelector(storedUsersSelector);

	const handleClear = () => {
		dispatch(clearStoredElementsActionCreator());
	};

	const [url, setUrl] = useState<string>();

	const handleDownload = () => {
		if (users.length === 0) return;

		const titleKeys = Object.keys(users[0]);
		const refinedData = [titleKeys];
		users.forEach((item: UserItem) => {
			refinedData.push(Object.values(item).map((value) => String(value)));
		});

		let csvContent = '';
		refinedData.forEach((row) => {
			csvContent += row.join(';') + '\n';
		});

		const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });
		const url = URL.createObjectURL(blob);
		setUrl(url);
	};

	return (
		<div className={styles.stored__users__panel}>
			<p className={styles.stored__users__text}>You chose {users.length} users</p>
			<div className={styles.stored__users__btns}>
				<a
					className={`${styles.stored__users__btn} ${styles.stored__users__download}`}
					href={url}
					download={`${users.length}__users.csv`}
					onClick={handleDownload}
				>
					download
				</a>
				<button className={`${styles.stored__users__btn} ${styles.stored__users__clear}`} onClick={handleClear}>
					Unselect all
				</button>
			</div>
		</div>
	);
};

export default StoredUsersButton;
