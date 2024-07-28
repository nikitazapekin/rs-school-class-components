import { render } from '@testing-library/react';
import NotFoundPage from './404page';
import { MemoryRouter } from 'react-router-dom';

test('redirects to /main when pathname is /', () => {
	const mockLocation = { pathname: '/' };
	Object.defineProperty(window, 'location', { value: mockLocation });

	const mockNavigate = jest.fn();
	jest.mock('react-router-dom', () => ({
		...jest.requireActual('react-router-dom'),
		useNavigate: () => mockNavigate,
	}));

	render(
		<MemoryRouter>
			<NotFoundPage />
		</MemoryRouter>,
	);
	expect(mockNavigate).toBeCalledTimes(0);
});
