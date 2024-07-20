 /*
import React, { useContext, useEffect } from 'react';
import Header from './components/Header';
import List from './components/List';
import { ErrorBoundary } from './components/ErrorBoundary';
import './global.scss';
 
import './normalize.scss';
import ErrorComponent from './components/ErrorComponent';
import useSearch from './hooks/useSearch';
import { useAppDispatch } from './hooks/redux';
import { useLazyGetPokemonByNameQuery } from './store/slices/apiSlice';
import { useSelector } from 'react-redux';
 
import  { ThemeProvider } from './components/ThemeContext';
import Background from './components/Background';
import { storedUsersSelector } from './store/selectors/getStoredElements';
import StoredUsersButton from './components/StoredUsersButton';
import Modal from './components/Modal';

 

import {CSVLink, CSVDownload} from 'react-csv';

 
 const csvData = "bshb"
const App = () => {

	const storedUsers = useSelector(storedUsersSelector)
 
	const { handleInputChange, handleClick, isFetching, users, handleNext, handlePrev, query } = useSearch();
	const [triggerGetPokemonByName, { data, error, isLoading }] = useLazyGetPokemonByNameQuery();

	const handleButtonClick = () => {
		triggerGetPokemonByName('bulbasaur');
	}

	console.log("RTK", data, error, isLoading);

 
	useEffect(()=> {
console.log(storedUsers)
	}, [storedUsers])
	return (
		<>

			<ErrorBoundary>
				<ThemeProvider>
					
						<div className="container">
							<Header handleClick={handleClick} handleInputChange={handleInputChange} />
							<List
								handleNext={handleNext}
								handlePrev={handlePrev}
								users={users}
								isFetching={isFetching}
								typedValue={query}
							/>
							{storedUsers.length>0 && (
								<StoredUsersButton />
							)}

							<Modal />
							<ErrorBoundary>
								<ErrorComponent />
							</ErrorBoundary>
						</div>
						<button onClick={handleButtonClick}>Fetch Pokemon</button>

				 <Background />
 
				 <CSVLink data={csvData} >Download me</CSVLink>
				</ThemeProvider>
			</ErrorBoundary>
		</>
	);
};

export default App;
 */


import Header from './components/Header';
import List from './components/List';
import { ErrorBoundary } from './components/ErrorBoundary';

import React, { useEffect } from 'react';
import { CSVLink } from 'react-csv';
import { useSelector } from 'react-redux';
//import { useSearch, storedUsersSelector } from './yourCustomHooks'; // Ensure to import your custom hooks correctly
//import { useLazyGetPokemonByNameQuery } from './yourRTKQueries'; // Ensure to import your RTK query hook correctly
//import { ErrorBoundary, ThemeProvider, Header, List, StoredUsersButton, Modal, ErrorComponent, Background } from './yourComponents'; // Ensure to import your components correctly
import { storedUsersSelector } from './store/selectors/getStoredElements';
import StoredUsersButton from './components/StoredUsersButton';
import useSearch from './hooks/useSearch';



import  { ThemeProvider } from './components/ThemeContext';
import Background from './components/Background';
 import ErrorComponent from './components/ErrorComponent';
import Modal from './components/Modal';
//import trigger
const App = () => {
    const storedUsers = useSelector(storedUsersSelector);

    const { handleInputChange, handleClick, isFetching, users, handleNext, handlePrev, query } = useSearch();
    //const [triggerGetPokemonByName, { data, error, isLoading }] = useLazyGetPokemonByNameQuery();

    const handleButtonClick = () => {
     //   triggerGetPokemonByName('bulbasaur');
    };

    useEffect(() => {
        console.log(storedUsers);
    }, [storedUsers]);

    const csvHeaders = [
        { label: 'Username', key: 'username' },
        { label: 'Telephone', key: 'telephone' },
        { label: 'ID', key: 'id' }
    ];

 
    const csvData = [
        { username: 'user1', telephone: '123-456-7890', id: '1' },
        { username: 'user2', telephone: '098-765-4321', id: '2' }
    ];

    return (
        <>
            <ErrorBoundary>
                <ThemeProvider>
                    <div className="container">
                        <Header handleClick={handleClick} handleInputChange={handleInputChange} />
                        <List
                            handleNext={handleNext}
                            handlePrev={handlePrev}
                            users={users}
                            isFetching={isFetching}
                            typedValue={query}
                        />
                        {storedUsers.length > 0 && (
                            <StoredUsersButton />
                        )}
                        <Modal />
                        <ErrorBoundary>
                            <ErrorComponent />
                        </ErrorBoundary>
                    </div>
                    <button onClick={handleButtonClick}>Fetch Pokemon</button>
                    <Background />
                    <CSVLink data={csvData} headers={csvHeaders} filename={"users.csv"}>Download me</CSVLink>
                </ThemeProvider>
            </ErrorBoundary>
        </>
    );
};

export default App;
