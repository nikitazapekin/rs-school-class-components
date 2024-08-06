import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import { BrowserRouter } from 'react-router-dom';
import UserData from './index';
 
 
const renderWithProviders = (ui: React.ReactElement) => {
	return render(
		<Provider store={store}>
			<BrowserRouter>
			{ui}
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
