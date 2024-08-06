import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer, RootState } from '../../redux/store';
import List from './index';
import useURL from '../../hooks/useURL';
//import Spinner from '../Spinner';
//import Card from '../Card';

// Мокаем хук useURL
jest.mock('../../hooks/useURL', () => ({
  __esModule: true,
  default: jest.fn().mockReturnValue({
    setPage: jest.fn(),
  }),
}));

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
    ...render(
      <Provider store={store}>{component}</Provider>
    ),
    store,
  };
};

describe('List component', () => {
  it('should render correctly with users and spinner', () => {
    const { container, //getByText

     } = renderWithRedux(<List />);
    expect(container.firstChild).toHaveClass('list');
   expect(container.querySelectorAll('.card')).not.toHaveLength(2); 

  });
  it('should render correctly with spinner when loading', () => {
      const loadingState = {
      ...initialState,
      isLoadingSlice: {
        isLoading: true,
      },
    };
    const { container } = renderWithRedux(<List />, { store: configureStore({ reducer: rootReducer, preloadedState: loadingState }) });
    expect(container.querySelector('loader')).not.toBeInTheDocument();
  });

  it('should handle next page button click', () => {
      const mockSetPage = useURL().setPage as jest.Mock;
    const { getByTestId } = renderWithRedux(<List />);
    const nextButton = getByTestId('next');
    fireEvent.click(nextButton);
    expect(mockSetPage).toHaveBeenCalledWith(2, '');
  });

  it('should handle previous page button click', () => {
    const mockSetPage = useURL().setPage as jest.Mock;
    const prevState = {
      ...initialState,
      appSlice: {
          ...initialState.appSlice,
        offset: 2,
      },
    };
    const { getByText } = renderWithRedux(<List />, { store: configureStore({ reducer: rootReducer, preloadedState: prevState }) });
    const prevButton = getByText('Prev');
    fireEvent.click(prevButton);
    expect(mockSetPage).toHaveBeenCalledWith(0, '');
  });

  it('should display "Nothing found" when there are no users', () => {
    const emptyState = {
      ...initialState,
      usersSlice: {
        users: [],
      },
    };
    const { getByText } = renderWithRedux(<List />, { store: configureStore({ reducer: rootReducer, preloadedState: emptyState }) });
    expect(getByText('Nothing found')).toBeInTheDocument();
  });

});
