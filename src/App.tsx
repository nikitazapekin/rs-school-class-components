 
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
import StoredUsersButton from './components/StoredUsersFlyoutElement';
const App = ({ query }: SearchPageProps) => {
	const dispatch = useAppDispatch();
	const storedUsers = useSelector(storedUsersSelector);
	const isLoading = useSelector(isLoadingSelector);
	const [trigger, setTrigger] = useState(false);
	const { data, error } = useSearchUsersQuery(query, {
		skip: !trigger,
	});
	const handleButtonClick = () => {
		setTrigger(true);
	};

	useEffect(() => {
		if (data) {
			dispatch(setUsersActionCreator(data.items ? data.items : []));
		}
	}, [data, dispatch, trigger]);
	useEffect(() => {
		setTrigger(true);
		handleButtonClick()
	}, [])
	return (
		<>
			<ErrorBoundary>
				<ThemeProvider>
						<div className="container">
							<List />
							<ErrorBoundary>
								<ErrorComponent />
							</ErrorBoundary>
						</div>
						{storedUsers.length > 0 && <StoredUsersButton />}
						{isLoading && <Spinner />}
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