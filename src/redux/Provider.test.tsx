import React from 'react';
import { render, screen } from '@testing-library/react';

import Providers from './Provider';  
import { store } from './store';

 
const TestComponent = () => {
  const state = store.getState();  
  return <div>{JSON.stringify(state)}</div>;  
};

describe('Providers component', () => {
  test('renders children within Providers with Redux store context', () => {
    render(
      <Providers>
        <TestComponent />
      </Providers>
    );

     
    expect(screen.getByText(JSON.stringify(store.getState()))).toBeInTheDocument();
  });
});
