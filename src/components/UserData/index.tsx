import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './styles.scss';
import Spinner from '../Spinner';
import { useLazyGetUserGithubQuery } from '@/store/slices/userQuerySlice';
import { useContext } from 'react';
import { useAppDispatch } from '@/hooks/redux';
import ThemeContext from '../ThemeContext';
 
import { useSelector } from 'react-redux';
 import { setLoadingUserDataActionCreator } from '@/store/action-creators/setLoadingUserDataActionCreator';
import { isLoadingUserDataSelector } from '@/store/selectors/isLoadingUserData';
const UserData = () => {
	const dispatch = useAppDispatch()
	const { isDark } = useContext(ThemeContext);
	const location = useLocation();
	const navigate = useNavigate();
	const [trigger, { data, isLoading }] = useLazyGetUserGithubQuery();
	const loading = useSelector(isLoadingUserDataSelector)

	useEffect(() => {
		dispatch(setLoadingUserDataActionCreator(isLoading))
	}, [isLoading])
	useEffect(() => {
		const searchParams = new URLSearchParams(location.search);
		trigger({ username: String(searchParams.get('username')) })
	}, [location.search])
	const handleReturn = () => {
		const lastUrl = localStorage.getItem('lastUrl');
		if (lastUrl) {
			navigate(`${lastUrl}`);
		} else {
			navigate('/main');
		}
	};
	return (
		<aside
			className={`sidebar ${isDark ? `sidebar-dark` : ''}`}
		>
			{loading && <Spinner data-testid="spinner" />}
			{data && (
				<div>
					<h2>{data.login}</h2>
					<img src={data.avatar_url} alt={`${data.login}'s avatar`} />
					<p>ID: {data.id}</p>
					<p>Type: {data.type}</p>
				</div>
			)}
			<button className="close__btn" onClick={handleReturn}>
				Close
			</button>
		</aside>
	);
};

export default UserData;



/*
import { render, screen, // fireEvent, 
    waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { BrowserRouter } from 'react-router-dom';
import UserData from './index'; // Adjust the import as needed
import ThemeContext, { Theme } from '../ThemeContext';
import { jest } from '@jest/globals';

// Mock ThemeContext
const mockThemeContext: Theme = {
  isDark: false, // or true, based on what you want to test
  toggleTheme: jest.fn(), // mock the toggleTheme function if it's required
};

const renderWithProviders = (ui: React.ReactElement ) => {
  return render(
    <Provider store={store}>
      <BrowserRouter>
        <ThemeContext.Provider value={mockThemeContext}>
          {ui}
        </ThemeContext.Provider>
      </BrowserRouter>
    </Provider>
  );
};

describe('UserData Component', () => {
  test('renders spinner when loading', async () => {
    renderWithProviders(<UserData />);
    
    // Ensure spinner shows up
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
    
    // Wait for data to be loaded and check if spinner is removed
    await waitFor(() => expect(screen.queryByTestId('spinner')).toBeNull());
  });
  test('displays user data when available', async () => {
    renderWithProviders(<UserData />);
    
    // Wait for user data to be fetched and displayed
    await waitFor(() => {
      expect(screen.getByText('testuser')).toBeInTheDocument();
      expect(screen.getByAltText("testuser's avatar")).toBeInTheDocument();
      expect(screen.getByText('ID: 1')).toBeInTheDocument();
      expect(screen.getByText('Type: User')).toBeInTheDocument();
    });
  });

  test('handles return button click', () => {
    const mockNavigate = jest.fn();
    jest.spyOn(require('react-router-dom'), 'useNavigate').mockReturnValue(mockNavigate);
    
    renderWithProviders(<UserData />);
    
    // Simulate button click
    fireEvent.click(screen.getByText('Close'));
    
    // Check if navigate function was called
    expect(mockNavigate).toHaveBeenCalledWith('/main');
  });
  // More tests can be added here to cover other scenarios
});

*/