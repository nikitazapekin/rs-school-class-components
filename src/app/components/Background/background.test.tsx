 
 
import { render } from '@testing-library/react';
 
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { RootState, rootReducer  } from '../../../redux/store';
import Background from './index';
import { SetIsDarkActionCreator } from '../../../redux/action-creators/setIsDark';
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

describe('Background component', () => {
  it('should render with light background by default', () => {
    const { getByTestId } = renderWithRedux(<Background />);
    const backgroundDiv = getByTestId('background');
    expect(backgroundDiv).toHaveClass('background');
   expect(backgroundDiv).not.toHaveClass('background-dark');
  });
  it('should render with dark background when dark mode is enabled', () => {
      const { getByTestId, store } = renderWithRedux(<Background />);
    store.dispatch(SetIsDarkActionCreator());  
    const backgroundDiv = getByTestId('background');
    expect(backgroundDiv).not.toHaveClass('background-dark');
    expect(backgroundDiv).toHaveClass('background');
  });

  it('should not have dark background when light mode is enabled', () => {
      const { getByTestId, store } = renderWithRedux(<Background />);
    store.dispatch(SetIsDarkActionCreator());  
    const backgroundDiv = getByTestId('background');
    expect(backgroundDiv).toHaveClass('background');
    expect(backgroundDiv).not.toHaveClass('background-dark');
  });
    
});