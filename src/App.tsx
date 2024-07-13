import Header from './components/Header';
import List from './components/List';
import { ErrorBoundary } from './components/ErrorBoundary';
import './global.scss';
import './normalize.scss';
import ErrorComponent from './components/ErrorComponent';
import useSearch from './hooks/useSearch';
import './App.scss';
import { useNavigate } from 'react-router-dom';
const App = () => {
	const navigate = useNavigate();
	const { handleInputChange, handleClick, isFetching, users, handleNext, handlePrev, query } = useSearch();
	const handleRedirect = () => {
		navigate('not-existing-page');
	};
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
				<button className="redirect__btn" onClick={handleRedirect}>
					{' '}
					Redirect to error page
				</button>
			</ErrorBoundary>
		</>
	);
};

export default App;
