/*
import Header from './components/Header';
import List from './components/List';
import { ErrorBoundary } from './components/ErrorBoundary';
import './global.scss';
import './normalize.scss';
import ErrorComponent from './components/ErrorComponent';
import useSearch from './hooks/useSearch';
import { useAppDispatch } from './hooks/redux';
//import { useAppDispatch } from '@/hooks/redux';
import { Testt } from './store/action-creators/appSliceActionCreator';

import { useGetPokemonByNameQuery } from './store/slices/apiSlice';
//import { useGetPokemonByNameQuery } from './services/pokemon'
const App = () => {

	const dispatch = useAppDispatch()
	const { handleInputChange, handleClick, isFetching, users, handleNext, handlePrev, query } = useSearch();

	const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')


	console.log("RTK", data, error, isLoading)
	return (
		<>
			<ErrorBoundary>
				<div className="container">
					<Header handleClick={handleClick} handleInputChange={handleInputChange} />
					<List
						handleNext={handleNext}
						handlePrev={handlePrev}
						users={users}
						isFetching={isFetching}
						typedValue={query}
					/>
					<ErrorBoundary>
						<ErrorComponent />
					</ErrorBoundary>
				</div>

				<button onClick={()=> dispatch(Testt())}>tesss</button>
			</ErrorBoundary>
		</>
	);
};

export default App;
*/


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

import ThemeContext, { ThemeProvider } from './components/ThemeContext';
import Background from './components/Background';
const App = () => {
	const dispatch = useAppDispatch();
	const { handleInputChange, handleClick, isFetching, users, handleNext, handlePrev, query } = useSearch();
	const [triggerGetPokemonByName, { data, error, isLoading }] = useLazyGetPokemonByNameQuery();

	const handleButtonClick = () => {
		triggerGetPokemonByName('bulbasaur');
	}

	console.log("RTK", data, error, isLoading);


 
	const {isDark} = useContext(ThemeContext)
	useEffect(()=> {
console.log(isDark)
	}, [isDark])
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
							<ErrorBoundary>
								<ErrorComponent />
							</ErrorBoundary>
						</div>
						<button onClick={handleButtonClick}>Fetch Pokemon</button>
				 <Background />
				</ThemeProvider>
			</ErrorBoundary>
		</>
	);
};

export default App;




/*
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