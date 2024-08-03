 
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import List from './components/List';
import { ErrorBoundary } from './components/ErrorBoundary';
import { useSelector } from 'react-redux';
import { ThemeProvider } from './components/ThemeContext';
import Background from './components/Background';
import ErrorComponent from './components/ErrorComponent';
import { useAppDispatch } from './hooks/redux';
import { storedUsersSelector } from './redux/selectors/getStoredElements';
import { isLoadingSelector } from './redux/selectors/isLoadingSelector';
import Spinner from './components/Spinner';
import { useSearchUsersQuery } from './redux/slices/querySlice';
import { SearchPageProps } from './pages/searchTypes';
import { setUsersActionCreator } from './redux/action-creators/setUsersActionCreator';
import { paramsSelector } from './redux/selectors/getSearchParams';
import StoredUsersButton from './components/StoredUsersFlyoutElement';
import Layout from './components/Layout';

const App = ({ query }: SearchPageProps) => {
	const dispatch = useAppDispatch();
	const storedUsers = useSelector(storedUsersSelector);
	const isLoading = useSelector(isLoadingSelector);
	const params = useSelector(paramsSelector);

	const [trigger, setTrigger] = useState(false);

	//const { data, error } = useSearchUsersQuery({ query: params.query, page: params.offset, per_page: params.limit }, {
	const { data, error } = useSearchUsersQuery(query, {
		skip: !trigger,
	});

	const handleButtonClick = () => {
		setTrigger(true);
	};

	useEffect(() => {
		if (data) {
			console.log("DATAS", data.items);
			dispatch(setUsersActionCreator(data.items ? data.items : []));
		}
	}, [data, dispatch, trigger]);
	useEffect(() => {
		setTrigger(true);
		handleButtonClick()
	}, [])
	useEffect(() => {
		if (trigger) {
			//     setTrigger(false);
		}
	}, [trigger]);

	return (
		<>
			<ErrorBoundary>

				<ThemeProvider>
					<Layout>
						<div className="container">
							<List />
							<ErrorBoundary>
								<ErrorComponent />
							</ErrorBoundary>
						</div>
						{storedUsers.length > 0 && <StoredUsersButton />}
						{isLoading && <Spinner />}
					</Layout>
				</ThemeProvider>

			</ErrorBoundary>
		</>
	);
};

export default App;

/*

const App = () => {
	return ( <>
	
	</> );
}
 
export default App;
	*/