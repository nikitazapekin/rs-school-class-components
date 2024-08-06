// Background.test.tsx
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer, RootState } from '../../redux/store';
import Background from './index';
import { SetIsDarkActionCreator } from '../../redux/action-creators/setIsDark'; 

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
    isDark: false, // Initial state for themeSlice
  },
};

// Helper function to render with Redux store
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
    store.dispatch(SetIsDarkActionCreator()); // Pass true to set dark mode
    const backgroundDiv = getByTestId('background');
    expect(backgroundDiv).toHaveClass('background-dark');
    expect(backgroundDiv).not.toHaveClass('background');
  });

  it('should not have dark background when light mode is enabled', () => {
    const { getByTestId, store } = renderWithRedux(<Background />);
    store.dispatch(SetIsDarkActionCreator()); // Pass false to set light mode
    const backgroundDiv = getByTestId('background');
    expect(backgroundDiv).toHaveClass('background');
    expect(backgroundDiv).not.toHaveClass('background-dark');
  });
});


/*
// Background.test.tsx
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer, RootState } from '../../redux/store';
import Background from './index';
import { SetIsDarkActionCreator } from '../../redux/action-creators/setIsDark'; 

// npm install --save-dev @babel/preset-react @babel/plugin-syntax-jsx --legacy-peer-deps
 
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
    isDark: false, // Initial state for themeSlice
  },
};

// Helper function to render with Redux store
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
    expect(backgroundDiv).not.toHaveClass('background');
    expect(backgroundDiv).toHaveClass('background-dark');
  });

  it('should render with dark background when dark mode is enabled', () => {
    const { getByTestId, store } = renderWithRedux(<Background />);
    store.dispatch(SetIsDarkActionCreator()); // Pass true to set dark mode
    const backgroundDiv = getByTestId('background');
    expect(backgroundDiv).not.toHaveClass('background');
    expect(backgroundDiv).not.toHaveClass('background-dark');
  });

  it('should not have dark background when light mode is enabled', () => {
    const { getByTestId, store } = renderWithRedux(<Background />);
    store.dispatch(SetIsDarkActionCreator()); // Pass false to set light mode
    const backgroundDiv = getByTestId('background');
    expect(backgroundDiv).not.toHaveClass('background');
    expect(backgroundDiv).toHaveClass('background-dark');
  });
});
*/
/*
// Background.test.tsx
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { rootReducer, RootState } from '../../redux/store';
import Background from './index';
import { SetIsDarkActionCreator } from '../../redux/action-creators/setIsDark'; // Adjust the import according to your file structure

// Define initialState with proper type
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
    isDark: false, // Initial state for themeSlice
  },
};

// Helper function to render with Redux store
const renderWithRedux = (
  component: React.ReactNode,
  {
    initialState,
    store = configureStore({ reducer: rootReducer, preloadedState: initialState }),
  }: { initialState: RootState; store?: ReturnType<typeof configureStore> } = { initialState }
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

describe('Background component', () => {
  it('should render with light background by default', () => {
    const { getByTestId } = renderWithRedux(<Background />, { initialState });
    const backgroundDiv = getByTestId('background');
    expect(backgroundDiv).toHaveClass('background');
    expect(backgroundDiv).not.toHaveClass('background-dark');
  });

  it('should render with dark background when dark mode is enabled', () => {
    const { getByTestId, store } = renderWithRedux(<Background />, { initialState });
 //   store.dispatch(SetIsDarkActionCreator(true)); // Pass true to set dark mode
    const backgroundDiv = getByTestId('background');
    expect(backgroundDiv).toHaveClass('background');
    expect(backgroundDiv).toHaveClass('background-dark');
  });

  it('should not have dark background when light mode is enabled', () => {
    const { getByTestId, store } = renderWithRedux(<Background />, { initialState });
   // store.dispatch(SetIsDarkActionCreator(false)); // Pass false to set light mode
    const backgroundDiv = getByTestId('background');
    expect(backgroundDiv).toHaveClass('background');
    expect(backgroundDiv).not.toHaveClass('background-dark');
  });
});
*/
/*
// Background.test.tsx
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer, RootState } from '../../redux/store'; // Adjust the import according to your file structure
import Background from './index';
import { SetIsDarkActionCreator } from '../../redux/action-creators/setIsDark'; // Adjust the import according to your file structure

// Define initialState with proper type
const initialState: RootState = {

};

// Helper function to render with Redux store
const renderWithRedux = (
  component: React.ReactNode,
  {
    initialState,
    store = createStore(rootReducer, initialState),
  }: { initialState: RootState; store?: ReturnType<typeof createStore> } = { initialState }
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

describe('Background component', () => {
  it('should render with light background by default', () => {
    const { getByTestId } = renderWithRedux(<Background />, { initialState });
    const backgroundDiv = getByTestId('background');
    expect(backgroundDiv).toHaveClass('background');
    expect(backgroundDiv).not.toHaveClass('background-dark');
  });

  it('should render with dark background when dark mode is enabled', () => {
    const { getByTestId, store } = renderWithRedux(<Background />, { initialState });
    store.dispatch(SetIsDarkActionCreator(true)); // Pass true to set dark mode
    const backgroundDiv = getByTestId('background');
    expect(backgroundDiv).toHaveClass('background');
    expect(backgroundDiv).toHaveClass('background-dark');
  });

  it('should not have dark background when light mode is enabled', () => {
    const { getByTestId, store } = renderWithRedux(<Background />, { initialState });
    store.dispatch(SetIsDarkActionCreator(false)); // Pass false to set light mode
    const backgroundDiv = getByTestId('background');
    expect(backgroundDiv).toHaveClass('background');
    expect(backgroundDiv).not.toHaveClass('background-dark');
  });
});
*/
/*

// Background.test.tsx
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from '../../redux/store';
import Background from './index';
import { initialState } from '../../redux/slices/appSlice';
// { setDarkMode, setLightMode } from '../../redux/actions/themeActions'; // Adjust the import according to your file structure
import { SetIsDarkActionCreator } from '../../redux/action-creators/setIsDark';
// Helper function to render with Redux store
const renderWithRedux = (component: React.ReactNode, { initialState, store = createStore(rootReducer, initialState) } = {}) => {
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
    store.dispatch(SetIsDarkActionCreator()); // Assuming you have an action to set dark mode
    const backgroundDiv = getByTestId('background');
    expect(backgroundDiv).toHaveClass('background');
    expect(backgroundDiv).toHaveClass('background-dark');
  });

  it('should not have dark background when light mode is enabled', () => {
    const { getByTestId, store } = renderWithRedux(<Background />);
    store.dispatch(SetIsDarkActionCreator()); // Assuming you have an action to set light mode
    const backgroundDiv = getByTestId('background');
    expect(backgroundDiv).toHaveClass('background');
    expect(backgroundDiv).not.toHaveClass('background-dark');
  });
});
*/

/*
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Background from './index';
 

describe('Background Component', () => {
	const renderWithContext = ( ) => {
		return render(
		 
				<Background />
		 
		);
	};

	test('renders with light background by default', () => {
		renderWithContext();

		const backgroundDiv = screen.getByTestId('background');
		expect(backgroundDiv).toBeInTheDocument();
		expect(backgroundDiv).not.toHaveClass('background-dark');
	});

	test('renders with dark background when isDark is true', () => {
		renderWithContext();

		const backgroundDiv = screen.getByTestId('background');
		expect(backgroundDiv).toBeInTheDocument();
		expect(backgroundDiv).toHaveClass('background-dark');
	});
});
*/