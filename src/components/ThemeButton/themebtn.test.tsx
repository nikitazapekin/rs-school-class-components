import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ThemeButton from './index';
 

describe('ThemeButton Component', () => {
	const toggleTheme = jest.fn();

	const renderWithContext = ( ) => {
		return render(
		 
				<ThemeButton />
	 
		);
	};

	test('renders correctly with Light theme', () => {
		renderWithContext();

		expect(screen.getByRole('button', { name: /Switch Theme Light/i })).toBeInTheDocument();
	});

	test('renders correctly with Dark theme', () => {
		renderWithContext();

		expect(screen.getByRole('button', { name: /Switch Theme Dark/i })).toBeInTheDocument();
	});

	test('calls toggleTheme when button is clicked', () => {
		renderWithContext();

		const button = screen.getByRole('button', { name: /Switch Theme Light/i });
		fireEvent.click(button);

		expect(toggleTheme).toHaveBeenCalledTimes(1);
	});
});
