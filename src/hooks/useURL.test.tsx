import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { MemoryRouter, Router } from 'react-router-dom';
import { renderHook, act } from '@testing-library/react-hooks';
import { githubApi } from '@/store/slices/querySlice';
import useURL from './useURL';
import { createMemoryHistory } from 'history';

const mockReducer = (state = {}) => state;

const store = configureStore({
	reducer: {
		...mockReducer,
		[githubApi.reducerPath]: githubApi.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(githubApi.middleware),
});

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
	<MemoryRouter>
		<Provider store={store}>{children}</Provider>
	</MemoryRouter>
);

const RouterWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const history = createMemoryHistory();
	return (
		<Router location={history.location} navigator={history}>
			<Provider store={store}>{children}</Provider>
		</Router>
	);
};

describe('useURL', () => {
	it('should match snapshot', async () => {
		let result;
		await act(async () => {
			const { result: hookResult } = renderHook(() => useURL(), { wrapper: Wrapper });
			result = hookResult;
		});
		expect(result).toMatchSnapshot();
	});

	it('should redirect to a new route on handleRedirect', () => {
		const { result } = renderHook(() => useURL(), { wrapper: RouterWrapper });

		act(() => {
			result.current.handleRedirect();
		});
	});
});
