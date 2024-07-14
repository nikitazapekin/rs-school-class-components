import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AppRoutes from './routes';

describe('AppRoutes', () => {
	it('renders MainPage when navigating to /main', () => {
		render(
			<MemoryRouter initialEntries={['/main']}>
				<AppRoutes />
			</MemoryRouter>,
		);

		expect(screen.getByText(/Main Page/i)).toBeInTheDocument();
	});

	it('renders UserData when navigating to /main/userdata', () => {
		render(
			<MemoryRouter initialEntries={['/main/userdata']}>
				<AppRoutes />
			</MemoryRouter>,
		);

		expect(screen.getByText(/User Data/i)).toBeInTheDocument();
	});

	it('renders NotFoundPage when navigating to a non-existing route', () => {
		render(
			<MemoryRouter initialEntries={['/non-existing-route']}>
				<AppRoutes />
			</MemoryRouter>,
		);

		expect(screen.getByText(/404 Page Not Found/i)).toBeInTheDocument();
	});
});
