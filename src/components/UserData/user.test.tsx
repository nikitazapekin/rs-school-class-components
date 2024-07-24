import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import UserData from './index';
import { useLazyGetUserGithubQuery } from '@/store/slices/userQuerySlice';
import ThemeContext from '../ThemeContext';

jest.mock('@/store/slices/userQuerySlice', () => ({
  useLazyGetUserGithubQuery: jest.fn(),
}));

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
  useLocation: () => ({
    search: '?username=testuser',
  }),
}));

interface RenderWithProvidersProps {
  providerProps: {
    isDark: boolean;
    toggleTheme: () => void;
  };
}

const renderWithProviders = (ui: React.ReactElement, { providerProps, ...renderOptions }: RenderWithProvidersProps) => {
  return render(
    <ThemeContext.Provider value={providerProps}>
      <Router>{ui}</Router>
    </ThemeContext.Provider>,
    renderOptions
  );
};

describe('UserData', () => {
  const mockTrigger = jest.fn();
  const mockData = {
    login: 'testuser',
    avatar_url: 'https://avatars.githubusercontent.com/u/123456?v=4',
    id: 123456,
    type: 'User',
  };

  beforeEach(() => {
    mockTrigger.mockReset();
    (useLazyGetUserGithubQuery as jest.Mock).mockReturnValue([mockTrigger, { data: null, isLoading: true }]);
    localStorage.setItem('lastUrl', '/previous');
  });

  test('renders loading spinner while fetching data', () => {
    renderWithProviders(<UserData />, { providerProps: { isDark: false, toggleTheme: () => {} } });

    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });

  test('renders user data after fetching', async () => {
    (useLazyGetUserGithubQuery as jest.Mock).mockReturnValueOnce([mockTrigger, { data: mockData, isLoading: false }]);

    renderWithProviders(<UserData />, { providerProps: { isDark: false, toggleTheme: () => {} } });

    await waitFor(() => expect(screen.getByText('testuser')).toBeInTheDocument());
    expect(screen.getByAltText("testuser's avatar")).toBeInTheDocument();
    expect(screen.getByText('ID: 123456')).toBeInTheDocument();
    expect(screen.getByText('Type: User')).toBeInTheDocument();
  });

  test('navigates to the correct URL when Close button is clicked', async () => {
    (useLazyGetUserGithubQuery as jest.Mock).mockReturnValueOnce([mockTrigger, { data: mockData, isLoading: false }]);

    renderWithProviders(<UserData />, { providerProps: { isDark: false, toggleTheme: () => {} } });

    await waitFor(() => expect(screen.getByText('testuser')).toBeInTheDocument());

    const closeButton = screen.getByText('Close');
    fireEvent.click(closeButton);

    expect(mockNavigate).toHaveBeenCalledWith('/previous');
  });
});

