
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { MemoryRouter } from 'react-router-dom';
import Card from './index';
import ThemeContext from '../ThemeContext';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));


const mockThemeContext = {
  isDark: false,
  toggleTheme: jest.fn(),
};


const mockStore = configureStore({
  reducer: {
    appSlice: (state = { storedElements: [] }) => state,
   
  },
  preloadedState: {
    appSlice: {
      storedElements: [],
    },
  },
});

describe('Card Component', () => {
  it('should call handleCardClick and navigate to user details', () => {
    const user = {
      login: 'testuser',
      id: 1,
      node_id: 'node1',
      avatar_url: 'http://example.com/avatar.jpg',
      gravatar_id: '',
      url: '',
      html_url: '',
      followers_url: '',
      following_url: '',
      gists_url: '',
      starred_url: '',
      subscriptions_url: '',
      organizations_url: '',
      repos_url: '',
      events_url: '',
      received_events_url: '',
      type: 'User',
      site_admin: false,
      score: 0,
    };

    render(
      <Provider store={mockStore}>
        <MemoryRouter>
          <ThemeContext.Provider value={mockThemeContext}>
            <Card user={user} />
          </ThemeContext.Provider>
        </MemoryRouter>
      </Provider>
    );

    fireEvent.click(screen.getByText('Show details'));

    expect(mockNavigate).toHaveBeenCalledWith(`/main/userdata?username=${user.login}`);
  });
});


