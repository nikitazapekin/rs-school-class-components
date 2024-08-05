import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Background from './index';
import ThemeContext from '../ThemeContext';

describe('Background Component', () => {
	const renderWithContext = (isDark: boolean) => {
		return render(
			<ThemeContext.Provider value={{ isDark, toggleTheme: jest.fn() }}>
				<Background />
			</ThemeContext.Provider>,
		);
	};

	test('renders with light background by default', () => {
		renderWithContext(false);

		const backgroundDiv = screen.getByTestId('background');
		expect(backgroundDiv).toBeInTheDocument();
		expect(backgroundDiv).not.toHaveClass('background-dark');
	});

	test('renders with dark background when isDark is true', () => {
		renderWithContext(true);

		const backgroundDiv = screen.getByTestId('background');
		expect(backgroundDiv).toBeInTheDocument();
		expect(backgroundDiv).toHaveClass('background-dark');
	});
});
