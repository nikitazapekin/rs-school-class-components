import { render } from '@testing-library/react';
import NotFoundPage from './404page';
import { MemoryRouter } from 'react-router-dom';

test('redirects to /main when pathname is /', () => {
	// Mock window.location.pathname
	const mockLocation = { pathname: '/' };
	Object.defineProperty(window, 'location', { value: mockLocation });

	// Mock useNavigate hook
	const mockNavigate = jest.fn();
	jest.mock('react-router-dom', () => ({
		...jest.requireActual('react-router-dom'),
		useNavigate: () => mockNavigate,
	}));

	// Render the component within MemoryRouter
	render(
		<MemoryRouter>
			<NotFoundPage />
		</MemoryRouter>,
	);

	// Assert that useNavigate was called with '/main'
	expect(mockNavigate).toHaveBeenCalledWith('/main');
});

test('renders NotFound component', () => {
	// Render the component within MemoryRouter
	const { getByTestId } = render(
		<MemoryRouter>
			<NotFoundPage />
		</MemoryRouter>,
	);

	// Assert that NotFound component is rendered
	expect(getByTestId('not-found')).toBeInTheDocument();
});
