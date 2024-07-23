 
 
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ThemeButton from './index';
import ThemeContext from '../ThemeContext';

describe('ThemeButton Component', () => {
  const toggleTheme = jest.fn();

  const renderWithContext = (isDark: boolean) => {
    return render(
      <ThemeContext.Provider value={{ isDark, toggleTheme }}>
        <ThemeButton />
      </ThemeContext.Provider>
    );
  };

  test('renders correctly with Light theme', () => {
    renderWithContext(false);

    expect(screen.getByRole('button', { name: /Switch Theme Light/i })).toBeInTheDocument();
  });

  test('renders correctly with Dark theme', () => {
    renderWithContext(true);

    expect(screen.getByRole('button', { name: /Switch Theme Dark/i })).toBeInTheDocument();
  });

  test('calls toggleTheme when button is clicked', () => {
    renderWithContext(false);

    const button = screen.getByRole('button', { name: /Switch Theme Light/i });
    fireEvent.click(button);

    expect(toggleTheme).toHaveBeenCalledTimes(1);
  });
});
