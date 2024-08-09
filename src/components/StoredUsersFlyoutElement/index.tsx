import './index.scss';
import { useAppDispatch } from '@/hooks/redux';
import { clearStoredElementsActionCreator } from '@/store/action-creators/clearStoredElementsActionCreator';
import { useSelector } from 'react-redux';
import { storedUsersSelector } from '@/store/selectors/getStoredElements';
import { useState } from 'react';
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
		users.forEach((item) => {
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
		<div className="stored__users__panel">
			<p className="stored__users__text">You chose {users.length} users</p>
			<div className="stored__users__btns">
				<a
					className="stored__users__btn stored__users__download"
					href={url}
					download={`${users.length}__users.csv`}
					onClick={handleDownload}
				>
					download
				</a>
				<button className="stored__users__btn stored__users__clear" onClick={handleClear}>
					Unselect all
				</button>
			</div>
		</div>
	);
};

export default StoredUsersButton;
