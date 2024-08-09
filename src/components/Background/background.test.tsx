
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Background from './index';
import { rootReducer } from '../../store/store'; 
import { RootState } from '../../store/store'; 
import { getThemeSelector } from '../../store/selectors/getTheme';


jest.mock('../../store/selectors/getTheme', () => ({
  getThemeSelector: jest.fn(),
}));

const createTestStore = (state: Partial<RootState>) => 
  configureStore({
    reducer: rootReducer,
    preloadedState: state,
  });

test('renders the Background component with dark theme', () => {
  (getThemeSelector as jest.Mock).mockReturnValue(true);

  const store = createTestStore({
    themeSlice: { isDark: true },
  });

  render(
    <Provider store={store}>
      <Background />
    </Provider>
  );

  const backgroundElement = screen.getByTestId('background');
  expect(backgroundElement).toHaveClass('background-dark');
});

test('renders the Background component with light theme', () => {
  (getThemeSelector as jest.Mock).mockReturnValue(false);

  const store = createTestStore({
    themeSlice: { isDark: false },
  });

  render(
    <Provider store={store}>
      <Background />
    </Provider>
  );

  const backgroundElement = screen.getByTestId('background');
  expect(backgroundElement).not.toHaveClass('background-dark');
});


/*
import { createRemixStub } from "@remix-run/testing";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import {
  render,
  screen,
  waitFor,
} from "@testing-library/react";

test("renders loader data", async () => {
  // ⚠️ This would usually be a component you import from your app code
  function MyComponent() {
    const data = useLoaderData() as { message: string };
    return <p>Message: {data.message}</p>;
  }

  const RemixStub = createRemixStub([
    {
      path: "/",
      Component: MyComponent,
      loader() {
        return json({ message: "hello" });
      },
    },
  ]);

  render(<RemixStub />);

  await waitFor(() => screen.findByText("Message: hello"));
});
*/