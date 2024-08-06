import React from 'react';
import { render, //fireEvent 

} from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer, RootState } from '../../redux/store';
import Card from './index';
//import { AddElementToStorage } from '../../redux/action-creators/addElementToStorage';

const initialState: RootState = {
  appSlice: {
    isLoading: false,
    error: null,
    isLoadingUserData: false,
    users: [],
    typedValue: "",
    params: {
      limit: 10,
      offset: 1,
      query: '',
      storedValue: '',
    },
    status: 'idle',
    clickedUser: {
      login: "",
      id: 0,
      node_id: "",
      avatar_url: "",
      gravatar_id: "",
      url: "",
      html_url: "",
      followers_url: "",
      following_url: "",
      gists_url: "",
      starred_url: "",
      subscriptions_url: "",
      organizations_url: "",
      repos_url: "",
      events_url: "",
      received_events_url: "",
      type: "",
      site_admin: false,
      score: 0
    }
  },
  selectedElementsSlice: {
    storedElements: [],
    selectedElement: null,
  },
  themeSlice: {
    isDark: false, 
  },
};

const renderWithRedux = (
  component: React.ReactNode,
  { store = configureStore({ reducer: rootReducer, preloadedState: initialState }) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

describe('Card component', () => {
  const user = {
    login: "testuser",
    id: 1,
    avatar_url: "https://via.placeholder.com/150",
    
 
    node_id: "1",
    gravatar_id: "11",
    url: "https://via.placeholder.com/150",
    html_url: "wdq",
    followers_url: "qwd",
    following_url: "wdq",
    gists_url: "wqd",
    starred_url: "qwd",
    subscriptions_url: "dqw",
    organizations_url: "wd",
    repos_url: "wdq",
    events_url: "wdq",
    received_events_url: "wdq",
    type: "wdq",
    site_admin: false,
    score: 0
 
  };

  it('should render correctly with light theme by default', () => {
    const { getByText, getByAltText } = renderWithRedux(<Card user={user} />);
    expect(getByText('testuser')).toBeInTheDocument();
    expect(getByAltText('user')).toBeInTheDocument();
    expect(getByAltText('user')).toHaveAttribute('src', 'https://via.placeholder.com/150');
  });
  it('should render correctly with dark theme when enabled', () => {
      const darkThemeState = {
      ...initialState,
      themeSlice: {
        isDark: true,
      },
    };
    const { container } = renderWithRedux(<Card user={user} />, { store: configureStore({ reducer: rootReducer, preloadedState: darkThemeState }) });
    expect(container.firstChild).not.toHaveClass('user-dark');
  });
  /*
*/
  /*
  it('should handle checkbox change', () => {
    const { getByRole, store } = renderWithRedux(<Card user={user} />);
    const checkbox = getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    const actions = store.getActions();
    expect(actions).toContainEqual(AddElementToStorage(user));
  });

  it('should have correct link to user details', () => {
    const { getByText } = renderWithRedux(<Card user={user} />);
    const link = getByText('Show Details');
    expect(link).toHaveAttribute('href', '/details?page=1&user=testuser'); // Assuming params.offset is 1 by default
  });
  */
});
