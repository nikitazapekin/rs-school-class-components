 
import React from 'react';
import { render, screen } from '@testing-library/react';
import Spinner from './index';  

describe('Spinner component', () => {
  test('renders spinner with correct data-testid', () => {

    render(<Spinner />);

    const loaderElement = screen.getByTestId('loader');
    expect(loaderElement).toBeInTheDocument();
    expect(loaderElement).toHaveClass('loader'); 
  });
});
