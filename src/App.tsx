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

const App = ({ query }: SearchPageProps) => {
    const dispatch = useAppDispatch();
    const storedUsers = useSelector(storedUsersSelector);
    const isLoading = useSelector(isLoadingSelector);
    const params = useSelector(paramsSelector);

    const [trigger, setTrigger] = useState(false);

    const { data, error } = useSearchUsersQuery({ query: params.query, page: params.offset, per_page: params.limit }, {
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
    }, [data, dispatch]);

    useEffect(() => {
        if (trigger) {
            setTrigger(false);
        }
    }, [trigger]);

    return (
        <>
            <ErrorBoundary>
                <ThemeProvider>
                    <div className="container">
                        <Header />
                        <List />
                        <ErrorBoundary>
                            <ErrorComponent />
                        </ErrorBoundary>
                    </div>
                    <Background />
                    {isLoading && <Spinner />}
                </ThemeProvider>
                <button onClick={handleButtonClick}>
                    Fetch Data
                </button>
            </ErrorBoundary>
        </>
    );
};

export default App;



/*import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import List from './components/List';
import { ErrorBoundary } from './components/ErrorBoundary';
import { useSelector } from 'react-redux';
import StoredUsersButton from './components/StoredUsersFlyoutElement';
import { ThemeProvider } from './components/ThemeContext';
import Background from './components/Background';
import ErrorComponent from './components/ErrorComponent';
import { useAppDispatch } from './hooks/redux';
import { storedUsersSelector } from './redux/selectors/getStoredElements';
import { isLoadingSelector } from './redux/selectors/isLoadingSelector';
import Spinner from './components/Spinner';
import { useLazySearchUsersQuery, useSearchUsersQuery } from './redux/slices/querySlice';
import { SearchPageProps } from './pages/searchTypes';
import { setUsersActionCreator } from './redux/action-creators/setUsersActionCreator';
import { paramsSelector } from './redux/selectors/getSearchParams';

const App = ({ query }: SearchPageProps) => {
    const dispatch = useAppDispatch();
    const storedUsers = useSelector(storedUsersSelector);
    const isLoading = useSelector(isLoadingSelector);
    const params = useSelector(paramsSelector);

    const [trigger, setTrigger] = useState(false);

    const { data, error } = useSearchUsersQuery({ query: params.query, page: params.offset, per_page: params.limit }, {
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
    }, [data, dispatch]);

    return (
        <>
            <ErrorBoundary>
                <ThemeProvider>
                    <div className="container">
                        <Header />
                        <List />
                        <ErrorBoundary>
                            <ErrorComponent />
                        </ErrorBoundary>
                    </div>
                    <Background />
                    {isLoading && <Spinner />}
                </ThemeProvider>
                <button onClick={handleButtonClick}>
                    Fetch Data
                </button>
            </ErrorBoundary>
        </>
    );
};

export default App;
*/
/*
import Header from './components/Header';
import List from './components/List';
import { ErrorBoundary } from './components/ErrorBoundary';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
//import { storedUsersSelector } from './lib/selectors/getStoredElements';
import StoredUsersButton from './components/StoredUsersFlyoutElement';
import { ThemeProvider } from './components/ThemeContext';
import Background from './components/Background';
import ErrorComponent from './components/ErrorComponent';
import { useAppDispatch } from './hooks/redux';
import { storedUsersSelector } from './redux/selectors/getStoredElements';
import { setStoredInLocalStorageActionCreator } from './redux/action-creators/setStoredInLocalStorageQuery';
import { isLoadingSelector } from './redux/selectors/isLoadingSelector';
//import { setStoredInLocalStorageActionCreator } from './lib/action-creators/setStoredInLocalStorageQuery';
//import { isLoadingSelector } from './lib/selectors/isLoadingSelector';
import Spinner from './components/Spinner';

import useCustomRouter from './hooks/useCustomRouter';
import { useDispatch } from 'react-redux';
import { setTesting } from './redux/slices/postsSlice';
import { getTest } from './redux/selectors/getTest';

import { getUserData } from './API';
import { GetServerSideProps } from 'next';
import { fetchUserData } from './redux/slices/appSlice';
import { useLazySearchUsersQuery } from './redux/slices/querySlice';
import { SearchPageProps } from './pages/searchTypes';
import { useState } from 'react';
import { useSearchUsersQuery } from './redux/slices/querySlice';
import { setUsersActionCreator } from './redux/action-creators/setUsersActionCreator';
import { paramsSelector } from './redux/selectors/getSearchParams';
const App = ({ query }: SearchPageProps) => {


 

	const dispatch = useAppDispatch();
	const storedUsers = useSelector(storedUsersSelector);
	const isLoading = useSelector(isLoadingSelector);

	const [trigger, setTrigger] = useState(false);
const params = useSelector(paramsSelector)
	//	const { data, error } = useSearchUsersQuery(query, {
	// const { data, error } = useSearchUsersQuery({ query: "test", page: 1, per_page: 10 }, {
		const { data, error } = useSearchUsersQuery({ query: params.query, page: params.offset, per_page: params.limit }, {
		skip: !trigger,
	});

	const handleButtonClick = () => {
		setTrigger(true);
	};
	useEffect(() => {
		console.log("DATAS", data?.items)
		dispatch(setUsersActionCreator(data?.items ? data.items : []))

	}, [data])

	useEffect(() => {
		setTrigger(true)
	}, [])
	useEffect(() => {
		//	setTrigger(false)
		}, [trigger])
//useEffect
	return (
		<>
			<ErrorBoundary>
				<ThemeProvider>
					<div className="container">
						<Header />
						<List />

						<ErrorBoundary>
							<ErrorComponent />
						</ErrorBoundary>
					</div>
					<Background />
					 
					{isLoading && <Spinner />}
				</ThemeProvider>

				{JSON.stringify(trigger)}
				<button onClick={handleButtonClick}>
					cli
				</button>

			</ErrorBoundary>
		</>
	);
};

export default App;
*/

/*


/*
useEffect(() => {
	//dispatch(
	//		setStoredInLocalStorageActionCreator(
	//			String(localStorage.getItem('searchParam') != null ? localStorage.getItem('searchParam') : ''),
	//		),
	//	);
}, []);
const getServerSideProps: GetServerSideProps = async (context) => {
	const limit = 10; // Adjust as needed
	const offset = 1; // Adjust as needed
	const typedValue = ''; // Adjust based on your requirements

	try {
		const users = await getUserData(limit, offset, typedValue);
		return {
			props: {
				users,
			},
		};
	} catch (error) {
		console.error('Error fetching user data:', error);
		return {
			props: {
				users: [],
			},
		};
	}
};
*/
//export default UsersPage; 