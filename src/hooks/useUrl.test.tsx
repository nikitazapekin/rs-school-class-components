import { renderHook, act } from '@testing-library/react-hooks';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { useNavigate, useLocation } from '@remix-run/react';
import { useAppDispatch } from './redux';
import { paramsSelector } from '../store/selectors/getSearchParams';
import { setSearchParamsActionCreator } from '../store/action-creators/setSearchParamsActionCreator';
import { setQueryActionCreator } from '../store/action-creators/setSearchParamsActionCreator';
import useURL from './useURL';
import { rootReducer } from '../store/store';
import themeSlice from '@/store/slices/themeSlice';

jest.mock('@remix-run/react', () => ({
  useNavigate: jest.fn(),
  useLocation: jest.fn(),
}));

jest.mock('./redux', () => ({
  useAppDispatch: jest.fn(),
}));

jest.mock('../store/selectors/getSearchParams', () => ({
  paramsSelector: jest.fn(),
}));

jest.mock('../store/action-creators/setSearchParamsActionCreator', () => ({
  setSearchParamsActionCreator: jest.fn(),
  setQueryActionCreator: jest.fn(),
}));

const mockDispatch = jest.fn();
const mockNavigate = jest.fn();
const mockLocation = {
  search: '?page=1&query=test'
};

const initialState = {
    selectedElementsSlice: {
        storedElements: [],

	selectedElement: null,
    },
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
	node_id:"" ,
	avatar_url: "",
	gravatar_id:"" ,
	url:"" ,
	html_url:"" ,
	followers_url: "",
	following_url:"" ,
	gists_url: "",
	starred_url: "",
	subscriptions_url:  "",
	organizations_url: "",
	repos_url:"" ,
	events_url:"" ,
	received_events_url:"" ,
	type: "",
	site_admin: false,
	score: 0
	}
  },
  themeSlice: {
    isDark: false
  }
};

const createTestStore = (state: typeof initialState) =>
  configureStore({
    reducer: rootReducer,
    preloadedState: state,
  });

describe('useURL hook', () => {
  beforeEach(() => {
    (useAppDispatch as jest.Mock).mockReturnValue(mockDispatch);
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
    (useLocation as jest.Mock).mockReturnValue(mockLocation);
    (paramsSelector as jest.Mock).mockReturnValue(initialState.appSlice.params);
  });

  test('should set page and query in URL', () => {
    const store = createTestStore(initialState);
    const wrapper = ({ children }: { children: React.ReactNode }) => <Provider store={store}>{children}</Provider>;

    const { result } = renderHook(() => useURL(), { wrapper });

    act(() => {
      result.current.setPage(2, 'newQuery');
    });

    expect(mockNavigate).toHaveBeenCalledWith('?page=2&query=newQuery');
  });

  test('should dispatch setSearchParamsActionCreator on mount', () => {
    const store = createTestStore(initialState);
    const wrapper = ({ children }: { children: React.ReactNode }) => <Provider store={store}>{children}</Provider>;

    renderHook(() => useURL(), { wrapper });

    expect(mockDispatch).toHaveBeenCalledWith(setSearchParamsActionCreator(1, 'test'));
  });

  test('should handle input change and dispatch setQueryActionCreator', () => {
    const store = createTestStore(initialState);
    const wrapper = ({ children }: { children: React.ReactNode }) => <Provider store={store}>{children}</Provider>;

    const { result } = renderHook(() => useURL(), { wrapper });

    act(() => {
      result.current.handleInput({ target: { value: 'newQuery' } } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(mockDispatch).toHaveBeenCalledWith(setQueryActionCreator('newQuery'));
  });

  test('should handle search and navigate with new query', () => {
    const store = createTestStore(initialState);
    const wrapper = ({ children }: { children: React.ReactNode }) => <Provider store={store}>{children}</Provider>;

    const { result } = renderHook(() => useURL(), { wrapper });

    act(() => {
      result.current.handleSearch();
    });

    expect(mockDispatch).toHaveBeenCalledWith(setSearchParamsActionCreator(1, 'test'));
    expect(mockNavigate).toHaveBeenCalledWith('?page=1&query=test');
  });
});
