import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

// Mock the useSearch hook
const mockUseSearch = {
	handleInputChange: jest.fn(),
	handleClick: jest.fn(),
	isFetching: false,
	users: [],
	handleNext: jest.fn(),
	handlePrev: jest.fn(),
	query: '',
};

jest.mock('./hooks/useSearch', () => ({
	__esModule: true,
	default: () => mockUseSearch,
}));

describe('App component', () => {
	it('renders header and list components', () => {
		render(<App />);

		// Header component should render
		expect(screen.getByTestId('header')).toBeInTheDocument();

		// List component should render
		expect(screen.getByTestId('list')).toBeInTheDocument();
	});

	it('handles input change and click events', () => {
		render(<App />);

		// Simulate input change
		const input = screen.getByPlaceholderText('Search...');
		userEvent.type(input, 'test');
		expect(input).toHaveValue('test');

		// Simulate button click
		const button = screen.getByText('Search');
		userEvent.click(button);

		// Verify that handleClick was called
		expect(mockUseSearch.handleClick).toHaveBeenCalled();
	});

	it('renders error component when ErrorBoundary catches an error', () => {
		render(<App />);

		// Simulate an error
		const errorComponent = screen.getByText(/error component/i);
		expect(errorComponent).toBeInTheDocument();
	});
});
