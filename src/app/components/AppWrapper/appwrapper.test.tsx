import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { RootState, rootReducer } from '../../../redux/store';
import AppWrapper from './index';


jest.mock('../App', () => jest.fn(() => <div>Mocked App Component</div>));

const initialState: RootState = {
  appSlice: {
    isLoading: false,
    error: null,
    isLoadingUserData: false,
    users: [
        {
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
    ],  
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

describe('AppWrapper Component', () => {
  it('should render App component with users from the store', () => {
    const { getByText } = renderWithRedux(<AppWrapper />);
    expect(getByText('Mocked App Component')).toBeInTheDocument();
  });

  
});





 