/*
import { render } from '@testing-library/react';
import MainPage from './main';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { githubApi } from '@/store/slices/querySlice';
import { usersGithubApi } from '@/store/slices/userQuerySlice';
import appSlice from '@/store/slices/appSlice';
import selectedElementsSlice from '@/store/slices/selectedElementsSlice';

const store = configureStore({
	reducer: {
		appSlice,
		selectedElementsSlice,
		[githubApi.reducerPath]: githubApi.reducer,
		[usersGithubApi.reducerPath]: usersGithubApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(githubApi.middleware).concat(usersGithubApi.middleware),
});

describe('MainPage', () => {
	it('should render MainPage component correctly', () => {
		store.dispatch = jest.fn();

		const component = render(
			<Provider store={store}>
				<MemoryRouter>
					<MainPage />
				</MemoryRouter>
			</Provider>,
		);

		expect(component).toMatchSnapshot();
	});
});
*/