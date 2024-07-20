 
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

/*
 
import { Parser } from 'json2csv';
import { saveAs } from 'file-saver';

const ExportCSV = ( data: string ) => {
  const exportToCSV = () => {
    const json2csvParser = new Parser();
    const csv = json2csvParser.parse(data);

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'data.csv');
  };

  return (
    <button onClick={exportToCSV}>
      Экспортировать в CSV
    </button>
  );
};



npm install react-csv-export --save --legacy-peer-deps

import CsvLink from 'react-csv-export';
const EXAMPLE_DATA_OF_DEMO = [
	{ id: "id-0", name: "Youngjae", age: 29, country: "KOR" },
	{ id: "id-1", name: "Kiook", age: 20, country: "JAP" },
	{ id: "id-2", name: "Brian", age: 30, country: "USA" },
	{ id: "id-3", name: "Kisoo", age: 41, country: "DPR" },
	{ id: "id-4", name: "Youngsik", age: 51, country: "GER" }
];


npm i react-csv --legacy-peer-deps
npm i --save-dev @types/react-csv --legacy-peer-deps
*/

import {CSVLink, CSVDownload} from 'react-csv';
const csvData =[
	['rahul', 'delhi', 'accountsdept']  
  ];
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




/*
<ExportCSV  data={"dds"} />
// App.tsx
import React from 'react';
import { UserProvider } from './UserContext';
import UserProfile from './UserProfile';

const App: React.FC = () => {
  return (
	<UserProvider>
	  <div className="App">
		<h1>Welcome to the User Profile App</h1>
		<UserProfile />
	  </div>
	</UserProvider>
  );
}

export default App;

*/