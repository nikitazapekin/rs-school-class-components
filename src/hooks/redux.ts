import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


/*
import React from 'react';
import { render, renderHook } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { useAppDispatch, useAppSelector } from './redux'; // Убедитесь, что путь к файлу корректный
import { RootState, AppDispatch, rootReducer } from '../redux/store'; // Убедитесь, что путь к файлу корректный
import Providers from '../redux/Provider';
// Создание тестового Redux хранилища с правильным редьюсером
const testStore = configureStore({
  reducer: rootReducer,
  preloadedState: {
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
      selectedElementsSlice: {
        storedElements: [],

	selectedElement: null,
      },
      themeSlice: { 
        isDark: false
       }
  },
});

// Тестирование useAppDispatch
describe('useAppDispatch', () => {
  test('returns the correct dispatch type', () => {
    const { result } = renderHook(() => useAppDispatch(), {
      wrapper: ({ children }) => <Provider store={testStore}>{children}</Provider>,
    });

    expect(result.current).toBeDefined();
    expect(result.current).toEqual(expect.any(Function)); // Должен быть функцией
  });
});

// Тестирование useAppSelector
describe('useAppSelector', () => {
  test('returns the correct selector type', () => {
    // Определим начальное состояние для тестов
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
      selectedElementsSlice: {
        storedElements: [],

	selectedElement: null,
      },
      themeSlice: { 
        isDark: false
       }
    };

    // Обновим тестовый store с начальным состоянием
    const { result } = renderHook(() => useAppSelector((state: RootState) => state.appSlice), {
      wrapper: ({ children }) => <Provider store={testStore}>{children}</Provider>,
    });

    // Замените 'initialState.appSlice' на актуальные данные из начального состояния
    expect(result.current).toEqual(initialState.appSlice);
  });
});

*/