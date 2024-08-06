import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './index';
import useURL from '../../hooks/useURL';

jest.mock('@/hooks/useURL', () => ({
	__esModule: true,
	default: jest.fn(() => ({
		handleInput: jest.fn(),
		handleRedirect: jest.fn(),
		handleSearch: jest.fn(),
	})),
}));

const mockHandleInput = jest.fn();
const mockHandleRedirect = jest.fn();
const mockHandleSearch = jest.fn();

(useURL as jest.Mock).mockImplementation(() => ({
	handleInput: mockHandleInput,
	handleRedirect: mockHandleRedirect,
	handleSearch: mockHandleSearch,
}));
 

describe('Header Component', () => {
	test('renders Header with light theme by default', () => {
		render(
		 
				<Header />
		 
		);

		expect(screen.getByRole('banner')).toHaveClass('header');
		expect(screen.getByRole('banner')).not.toHaveClass('header-dark');
	});

	test('renders Header with dark theme', () => {
		render(
		 
				<Header />
		 
		);

		expect(screen.getByRole('banner')).toHaveClass('header');
		expect(screen.getByRole('banner')).toHaveClass('header-dark');
	});

	test('calls handleInput when typing in the search bar', () => {
		render(
			 
				<Header />
		 
		);

		const searchInput = screen.getByPlaceholderText('Search...');
		fireEvent.change(searchInput, { target: { value: 'test' } });

		expect(mockHandleInput).toHaveBeenCalled();
	});

	test('calls handleSearch when clicking the search button', () => {
		render(
		 
				<Header />
		 
		);

		const searchButton = screen.getByRole('button', { name: /search/i });
		fireEvent.click(searchButton);

		expect(mockHandleSearch).toHaveBeenCalled();
	});

	test('calls handleRedirect when clicking the redirect button', () => {
		render(
		 
				<Header />
		 
		);
		const redirectButton = screen.getByRole('button', { name: /redirect to error page/i });
		fireEvent.click(redirectButton);

		expect(mockHandleRedirect).toHaveBeenCalled();
	});
});
