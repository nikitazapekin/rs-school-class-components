//import { Component, ChangeEvent } from 'react';
import Header from './components/Header';
import List from './components/List';
import { ErrorBoundary } from './components/ErrorBoundary';
import './global.scss';
import './normalize.scss';
import ErrorComponent from './components/ErrorComponent';
import useSearch from './hooks/useSearch';

const App = () => {
	const { handleInputChange, handleClick, isFetching, users, handleNext, handlePrev, query } = useSearch();

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
			</ErrorBoundary>
		</>
	);
};

export default App;

//https://jestjs.io/ru/docs/tutorial-react
//npm install --save-dev react-test-renderer
//npm install --save-dev jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer
//npm install --save-dev @babel/preset-typescript @babel/core @babel/preset-env babel-jest

/*module.exports = {
    presets: [
      '@babel/preset-env',
      ['@babel/preset-react', {runtime: 'automatic'}],
    ],
  };
*/
// babel.config.js

/*
module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',  
    '@babel/preset-typescript' 
  ],
};

 */

/*
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ]
  ]
};
*/
//
