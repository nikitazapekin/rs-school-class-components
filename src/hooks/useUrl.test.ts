import { renderHook, act } from '@testing-library/react-hooks';
import { useRouter, NextRouter } from 'next/router';
import useURL from './useURL';
import { useAppDispatch } from './redux';
import { setQueryActionCreator } from '../redux/action-creators/setSearchParamsActionCreator';
import { setSearchParamsActionCreator } from '../redux/action-creators/setSearchParamsActionCreator';
import { setNewSearchValueActionCreator } from '../redux/action-creators/setNewSearchValueActionCreator';
import { typedValueSelector } from '../redux/selectors/typedValueSelector';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => jest.fn(),
}));

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

jest.mock('../redux/action-creators/setSearchParamsActionCreator', () => ({
  setQueryActionCreator: jest.fn(),
  setSearchParamsActionCreator: jest.fn(),
}));

jest.mock('../redux/action-creators/setNewSearchValueActionCreator', () => ({
  setNewSearchValueActionCreator: jest.fn(),
}));

jest.mock('../redux/selectors/typedValueSelector', () => ({
  typedValueSelector: jest.fn(),
}));

jest.mock('./redux', () => ({
  useAppDispatch: jest.fn(),
}));

describe('useURL hook', () => {
  let dispatchMock: jest.Mock;
  let routerMock: NextRouter;

  beforeEach(() => {
    dispatchMock = jest.fn();
    (useAppDispatch as jest.Mock).mockReturnValue(dispatchMock);
    routerMock = {
      push: jest.fn(),
      pathname: '/test',
      query: {},
      isReady: true,
    } as unknown as NextRouter;
    (useRouter as jest.Mock).mockReturnValue(routerMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('sets query and page correctly in setPage', () => {
    const { result } = renderHook(() => useURL());

    act(() => {
      result.current.setPage(1, 'testQuery');
    });
    expect(routerMock.push).toHaveBeenCalledWith({
      pathname: routerMock.pathname,
      query: {
        page: 1,
        query: 'testQuery',
      },
    });
  });

  it('loads stored query param on mount', () => {
    localStorage.setItem('searchParam', 'storedQuery');

    renderHook(() => useURL());

    expect(dispatchMock).toHaveBeenCalledWith(setQueryActionCreator('storedQuery'));

    localStorage.removeItem('searchParam');
  });

  it('handles router query params correctly', () => {
    routerMock.query = { query: 'routerQuery', page: '2' };

    renderHook(() => useURL());

    expect(dispatchMock).toHaveBeenCalledWith(setSearchParamsActionCreator(2, 'routerQuery'));
    expect(localStorage.getItem('searchParam')).toBe('routerQuery');
  });

  it('handles input change correctly', () => {
    const { result } = renderHook(() => useURL());

    act(() => {
      result.current.handleInput({ target: { value: 'newQuery' } } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(dispatchMock).toHaveBeenCalledWith(setQueryActionCreator('newQuery'));
  });

  it('handles search action correctly', () => {
    const { result } = renderHook(() => useURL());

    act(() => {
      result.current.handleSearch();
    });

    expect(localStorage.getItem('searchParam')).not.toBe('typedValue');
    expect(dispatchMock).toHaveBeenCalledWith(setNewSearchValueActionCreator());
    expect(routerMock.push).not.toHaveBeenCalledWith({
      pathname: routerMock.pathname,
      query: {
        page: 1,
        query: 'typedValue',
      },
    });
  });
});

/*
import { renderHook, act } from '@testing-library/react-hooks';

import { useRouter } from 'next/router';
import useURL from './useURL';
import { useAppDispatch } from './redux';
import { setQueryActionCreator } from '../redux/action-creators/setSearchParamsActionCreator';
import { setSearchParamsActionCreator } from '../redux/action-creators/setSearchParamsActionCreator';
import { setNewSearchValueActionCreator } from '../redux/action-creators/setNewSearchValueActionCreator';
import { typedValueSelector } from '../redux/selectors/typedValueSelector';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => jest.fn(),
}));

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

jest.mock('../redux/action-creators/setSearchParamsActionCreator', () => ({
  setQueryActionCreator: jest.fn(),
  setSearchParamsActionCreator: jest.fn(),
}));

jest.mock('../redux/action-creators/setNewSearchValueActionCreator', () => ({
  setNewSearchValueActionCreator: jest.fn(),
}));

jest.mock('../redux/selectors/typedValueSelector', () => ({
  typedValueSelector: jest.fn(),
}));

jest.mock('./redux', () => ({
  useAppDispatch: jest.fn(),
}));

describe('useURL hook', () => {
  let dispatchMock: jest.Mock;
  let routerMock: any;

  beforeEach(() => {
    dispatchMock = jest.fn();
    (useAppDispatch as jest.Mock).mockReturnValue(dispatchMock);
    routerMock = {
      push: jest.fn(),
      pathname: '/test',
      query: {},
      isReady: true,
    };
    (useRouter as jest.Mock).mockReturnValue(routerMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('sets query and page correctly in setPage', () => {
    const { result } = renderHook(() => useURL());

    act(() => {
      result.current.setPage(1, 'testQuery');
    });
    expect(routerMock.push).toHaveBeenCalledWith({
        pathname: routerMock.pathname,
      query: {
          page: 1,
        query: 'testQuery',
        },
    });
  });
  
  it('loads stored query param on mount', () => {
      localStorage.setItem('searchParam', 'storedQuery');

    renderHook(() => useURL());

    expect(dispatchMock).toHaveBeenCalledWith(setQueryActionCreator('storedQuery'));

    localStorage.removeItem('searchParam');
    });
    
    it('handles router query params correctly', () => {
        routerMock.query = { query: 'routerQuery', page: '2' };

    renderHook(() => useURL());

    expect(dispatchMock).toHaveBeenCalledWith(setSearchParamsActionCreator(2, 'routerQuery'));
    expect(localStorage.getItem('searchParam')).toBe('routerQuery');
    });
    
    it('handles input change correctly', () => {
    const { result } = renderHook(() => useURL());

    act(() => {
      result.current.handleInput({ target: { value: 'newQuery' } } as React.ChangeEvent<HTMLInputElement>);
    });
    
    expect(dispatchMock).toHaveBeenCalledWith(setQueryActionCreator('newQuery'));
  });

  it('handles search action correctly', () => {
      const { result } = renderHook(() => useURL());

    act(() => {
      result.current.handleSearch();
    });

    expect(localStorage.getItem('searchParam')).not.toBe('typedValue');
    expect(dispatchMock).toHaveBeenCalledWith(setNewSearchValueActionCreator());
    expect(routerMock.push).not.toHaveBeenCalledWith({
        pathname: routerMock.pathname,
        query: {
        page: 1,
        query: 'typedValue',
      },
      });
     
});
  });
*/