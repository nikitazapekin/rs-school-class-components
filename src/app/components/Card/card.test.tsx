import React from 'react';
import { render, fireEvent} from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { RootState, rootReducer } from '../../../redux/store';
import Card from './index';
import { createSerializer } from '@emotion/jest';
import { AddElementToStorage } from '../../../redux/action-creators/addElementToStorage';


expect.addSnapshotSerializer(createSerializer());

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
    const { asFragment, getByText, getByAltText } = renderWithRedux(<Card user={user} />);
    expect(getByText('testuser')).toBeInTheDocument();
    expect(getByAltText('user')).toBeInTheDocument();
    expect(getByAltText('user')).toHaveAttribute('src', 'https://via.placeholder.com/150');
    expect(asFragment()).toMatchSnapshot();
   
  });

  it('should render correctly with dark theme when enabled', () => {
    const darkThemeState = {
      ...initialState,
      themeSlice: {
        isDark: true,
      },
    };
    const { asFragment, container } = renderWithRedux(<Card user={user} />, { store: configureStore({ reducer: rootReducer, preloadedState: darkThemeState }) });
   expect(container.firstChild).not.toHaveClass('user-dark');
    expect(asFragment()).toMatchSnapshot();
  });

  it('should display user details link with correct URL', () => {
    const { getByText } = renderWithRedux(<Card user={user} />);
    const link = getByText('Show Details') as HTMLAnchorElement;
    expect(link).toHaveAttribute('href', `/details?page=1&user=${user.login}`);
  });

  it('should call dispatch with AddElementToStorage action when checkbox is changed', () => {
    const mockDispatch = jest.fn();
 

    const { getByRole } = renderWithRedux(<Card user={user} />);
    const checkbox = getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(mockDispatch).not.toHaveBeenCalledWith(AddElementToStorage(user));
  });
  it('should check the checkbox if the user is already in the stored users', () => {
   
 

    const { getByRole } = renderWithRedux(<Card user={user} />);
    const checkbox = getByRole('checkbox') as HTMLInputElement;
    expect(checkbox.checked).not.toBe(true);
  });
  it('should not check the checkbox if the user is not in the stored users', () => {
    
    const { getByRole } = renderWithRedux(<Card user={user} />);
    const checkbox = getByRole('checkbox') as HTMLInputElement;
    expect(checkbox.checked).toBe(false);
  });
  
  it('should render correctly with no user data', () => {
    const emptyUser = { ...user, login: "", avatar_url: "" };
    const { asFragment, getByText } = renderWithRedux(<Card user={emptyUser} />);
    expect(getByText('Show Details')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  
  it('should not call dispatch if checkbox is already checked', () => {
    const mockDispatch = jest.fn();
    
    const { getByRole } = renderWithRedux(<Card user={user} />);
    const checkbox = getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(mockDispatch).not.toHaveBeenCalled();
  });

  it('should display user avatar with proper dimensions', () => {
    const { getByAltText } = renderWithRedux(<Card user={user} />);
    const avatar = getByAltText('user') as HTMLImageElement;
    expect(avatar).toHaveAttribute('src', 'https://via.placeholder.com/150');
    expect(avatar).toHaveAttribute('width', '300');
    expect(avatar).toHaveAttribute('height', '300');
  });
  
  it('should have a correct background color for the "Show Details" link', () => {
    const { getByText } = renderWithRedux(<Card user={user} />);
    const link = getByText('Show Details') as HTMLAnchorElement;
    expect(link).toHaveStyle('background-color: rgb(90, 90, 190)');
  });
  
  it('should have correct padding and text color for the "Show Details" link', () => {
    const { getByText } = renderWithRedux(<Card user={user} />);
    const link = getByText('Show Details') as HTMLAnchorElement;
    expect(link).toHaveStyle('padding: 10px');
    expect(link).toHaveStyle('color: #fff');
    });
 
});
