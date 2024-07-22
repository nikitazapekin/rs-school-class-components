 
import Header from './components/Header';
import List from './components/List';
import { ErrorBoundary } from './components/ErrorBoundary';

import React, { useEffect, useState } from 'react';
import { CSVLink } from 'react-csv';
import { useSelector } from 'react-redux'; 
import { storedUsersSelector } from './store/selectors/getStoredElements';
import StoredUsersButton from './components/StoredUsersButton';
import useSearch from './hooks/useSearch';



import  { ThemeProvider } from './components/ThemeContext';
import Background from './components/Background';
 import ErrorComponent from './components/ErrorComponent';
import Modal from './components/Modal';
import { useSearchUsersQuery } from './store/slices/querySlice';
import { useAppDispatch } from './hooks/redux';
import { setStoredInLocalStorageActionCreator } from './store/action-creators/setStoredInLocalStorageQuery';
//import DownloadCsvButton from './components/Download';
//import trigger
const App = () => {


  const dispatch = useAppDispatch()
    const storedUsers = useSelector(storedUsersSelector);


useEffect(()=> {
dispatch(setStoredInLocalStorageActionCreator(String(localStorage.getItem("searchParam") != null ? localStorage.getItem("searchParam") : "" )))
}, [])
   // const { handleInputChange, handleClick, isFetching, users, query } = useSearch();
 

    const handleButtonClick = () => {
     //   triggerGetPokemonByName('bulbasaur'); npm install file-saver --legacy-peer-deps

    };
/*
 const [page, setPage] = useState(1)
	const { data, error, isLoading } = useSearchUsersQuery({ query:``, page, per_page: 10 });
	const handleSearch=()=> {
		setPage(prev=> prev+1)
	}
	useEffect(()=> {
console.log(data)
	}, [data]) */
    return (
        <>
            <ErrorBoundary>
                <ThemeProvider>
                    <div className="container">
                        <Header />
                        <List
                          //  handleNext={handleNext}
                          //  handlePrev={handlePrev}
                       //     users={users}
                         //   isFetching={isFetching}
                         //   typedValue={query}
                        />
                        {storedUsers.length > 0 && (
                            <StoredUsersButton />
                        )}
                        <Modal />
                        <ErrorBoundary>
                            <ErrorComponent />
                        </ErrorBoundary>
                    </div>
               

{/*}
				   <button onClick={handleSearch}> searc</button> */}
                    <Background />
			 


                </ThemeProvider>
            </ErrorBoundary>
        </>
    );
};

export default App;

 /*
 import React, { useState } from 'react';
import { useSearchUsersQuery } from './path/to/githubApi';

const GitHubUserSearch = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = useSearchUsersQuery({ query, page, per_page: 30 });

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <ul>
          {data.items.map((user) => (
            <li key={user.id}>{user.login}</li>
          ))}
        </ul>
      )}
      <button onClick={() => setPage((prev) => prev + 1)}>Next Page</button>
    </div>
  );
};

export default GitHubUserSearch;
*/