import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { BrowserRouter } from 'react-router-dom';
import UserData from './index';
import ThemeContext, { Theme } from '../ThemeContext';
import { jest } from '@jest/globals';

const mockThemeContext: Theme = {
	isDark: false,
	toggleTheme: jest.fn(),
};

const renderWithProviders = (ui: React.ReactElement) => {
	return render(
		<Provider store={store}>
			<BrowserRouter>
				<ThemeContext.Provider value={mockThemeContext}>{ui}</ThemeContext.Provider>
			</BrowserRouter>
		</Provider>,
	);
};

describe('UserData Component', () => {
	test('renders spinner when loading', async () => {
		renderWithProviders(<UserData />);

		expect(screen.getByTestId('loader')).toBeInTheDocument();

		await waitFor(() => expect(screen.queryByTestId('loader')).toBeNull());
	});
});
