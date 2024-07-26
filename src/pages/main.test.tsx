// src/pages/main.test.tsx

import { render } from '@testing-library/react';
import MainPage from './main';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { githubApi } from '@/store/slices/querySlice';
import { usersGithubApi } from '@/store/slices/userQuerySlice';
import appSlice from '@/store/slices/appSlice';
import selectedElementsSlice from '@/store/slices/selectedElementsSlice';

const store = configureStore({
  reducer: {
    appSlice,
    selectedElementsSlice,
    [githubApi.reducerPath]: githubApi.reducer,
    [usersGithubApi.reducerPath]: usersGithubApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(githubApi.middleware)
      .concat(usersGithubApi.middleware),
});

describe('MainPage', () => {
  it('should render MainPage component correctly', () => {
 
    store.dispatch = jest.fn(); // Mock dispatch

    const component = render(
      <Provider store={store}>
        <MemoryRouter>
          <MainPage />
        </MemoryRouter>
      </Provider>
    );

    expect(component).toMatchSnapshot();
  });
});


/*import { render } from '@testing-library/react';
import MainPage from './main';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { AppDispatch, RootState } from '@/store/store'; // Adjust the path as necessary

const mockStore = configureStore<RootState, AppDispatch>([]);

describe('MainPage', () => {
  it('should render App and Outlet components', () => {
    const initialState: RootState = {
      selectedElementsSlice: {
        selectedElement: null,
        storedElements: [], // Add other required properties if necessary
      },
      appSlice: {
        isLoading: false,
        error: null,
     
        users: [],
        params: {
            limit: 10,
            offset: 1,
            query: "",
            storedValue: ""
        },
      },
      [githubApi.reducerPath]: githubApi.reducer,
      [usersGithubApi.reducerPath]: usersGithubApi.reducer,  
      // Add other slices of the state if needed
    };

    const store = mockStore(initialState);

    const component = render(
      <Provider store={store}>
        <MemoryRouter>
          <MainPage />
        </MemoryRouter>
      </Provider>
    );

    expect(component).toMatchSnapshot();
  });
});

*/

/* import { render } from '@testing-library/react';
 [{
	"resource": "/c:/Users/wotbl/search-rs/src/pages/main.test.tsx",
	"owner": "typescript",
	"code": "2739",
	"severity": 8,
	"message": "Type '{ selectedElementsSlice: { selectedElement: null; storedElements: never[]; }; appSlice: { isLoading: false; error: null; users: never[]; params: { limit: number; offset: number; query: string; storedValue: string; }; }; }' is missing the following properties from type '{ appSlice: AppStatee; selectedElementsSlice: SelectedElementsState; githubApi: CombinedState<{ searchUsers: QueryDefinition<{ query: string; page: number; per_page: number; }, BaseQueryFn<...>, never, SearchUsersResponse, \"githubApi\">; }, never, \"githubApi\">; userGithubApi: CombinedState<...>; }': [githubApi.reducerPath], [usersGithubApi.reducerPath]",
	"source": "ts",
	"startLineNumber": 12,
	"startColumn": 11,
	"endLineNumber": 12,
	"endColumn": 23
}]
import MainPage from './main';
 
import { MemoryRouter } from 'react-router-dom';
// Mock the App component to ensure it's rendered correctly
//jest.mock('../App', () => () => <div data-testid="app-component">Mocked App</div>);

describe('MainPage', () => {
  it('should render App and Outlet components', () => {
 


    const component = render(
        <MemoryRouter>
           <MainPage /> 
        </MemoryRouter>
    );

    expect(component).toMatchSnapshot();

 
  });
});

*/

/*
     const component = render(
            <MemoryRouter>
                <Card
                    user={{
                        id: 1,
                        login: "Nik",
                        node_id: "1",
                        avatar_url: "dcdsc",
                        gravatar_id: "kjj",
                        url: "lmd",
                        html_url: "ldm",
                        followers_url: "ldmv",
                        following_url: "nkdv",
                        gists_url: "ndls",
                        starred_url: "cmk",
                        subscriptions_url: "kekc",
                        organizations_url: "kdc",
                        repos_url: "mld",
                        events_url: "kmd",
                        received_events_url: "dclm",
                        type: "dlcm",
                        site_admin: false,
                        score: 22
                    }}
                />
            </MemoryRouter>
        );

        expect(component).toMatchSnapshot();
        */