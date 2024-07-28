import { useContext } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ThemeContext, { ThemeProvider } from './index';
const TestComponent = () => {
	const { isDark, toggleTheme } = useContext(ThemeContext);
	return (
		<div>
			<span data-testid="theme-status">{isDark ? 'Dark' : 'Light'}</span>
			<button onClick={toggleTheme}>Toggle Theme</button>
		</div>
	);
};

describe('ThemeProvider', () => {
	test('provides initial isDark value', () => {
		render(
			<ThemeProvider>
				<TestComponent />
			</ThemeProvider>,
		);

		expect(screen.getByTestId('theme-status')).toHaveTextContent('Light');
	});

	test('toggles theme when toggleTheme is called', () => {
		render(
			<ThemeProvider>
				<TestComponent />
			</ThemeProvider>,
		);

		const button = screen.getByText('Toggle Theme');
		fireEvent.click(button);

		expect(screen.getByTestId('theme-status')).toHaveTextContent('Dark');

		fireEvent.click(button);

		expect(screen.getByTestId('theme-status')).toHaveTextContent('Light');
	});
});
