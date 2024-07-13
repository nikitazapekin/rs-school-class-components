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
