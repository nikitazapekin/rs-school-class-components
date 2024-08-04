import Spinner from '../Spinner';
import Card from '../Card';
import styles from "./index.module.scss";
import { useAppDispatch } from '../../hooks/redux';
import { useSelector } from 'react-redux';
import { setNextPageActionCreator, setPrevPageActionCreator } from '../../redux/action-creators/setSearchParamsActionCreator';
import { paramsSelector } from '../../redux/selectors/getSearchParams';
import { isLoadingSelector } from '../../redux/selectors/isLoadingSelector';
import useURL from '../../hooks/useURL';
import { UserItem } from './types';
import { getUsersSelector } from '../../redux/selectors/getUsersSelector';
import { getUserData } from '../../api';
import { useEffect } from 'react';
import { setUsersActionCreator } from '../../redux/action-creators/setUsersActionCreator';
import { ThemeProvider } from '../ThemeContext';
const List = () => {
	const { setPage } = useURL();
	const dispatch = useAppDispatch();
	const users = useSelector(getUsersSelector);
	const params = useSelector(paramsSelector);
 
	const isLoading = useSelector(isLoadingSelector);

	const handleNext = () => {
		window.scrollTo(0, 0);
		dispatch(setNextPageActionCreator());
		setPage(params.offset + 1, params.query);
	};

	const handlePrev = () => {
		window.scrollTo(0, 0);
		dispatch(setPrevPageActionCreator());
		setPage(params.offset - 1, params.query);
	};
 
useEffect(() => {
	const fetchData = async () => {
		try {
			console.log("FETCHING", params.limit, params.offset, params.query )
			const data = await getUserData(params.limit, params.offset, params.query);
			dispatch(setUsersActionCreator(data))
	 
		} catch (err) {
	 
		}  
	};
	fetchData();
}, [params.limit, params.offset, params.query]); 
	return (
		<ThemeProvider>

		<section className={styles.list}>
			<div className={styles.list__container}>
				{isLoading && <Spinner />}
				{users.map((item: UserItem) => (
					<Card user={item} key={item.id} />
				))}
				{users.length === 0 && <p className={styles.list__nothing}>Nothing found</p>}
				<div className={styles.list__btns}>
					<button className={`${styles.list__prev} ${styles.list__btn}`} onClick={handlePrev}>
						Prev
					</button>
					<button className={`${styles.list__next} ${styles.list__btn}`} onClick={handleNext} data-testid="next">
						Next
					</button>
				</div>
			</div>
		</section>
		</ThemeProvider>
	);
};

export default List;


 