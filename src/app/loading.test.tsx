import React from 'react';
import { render, screen } from '@testing-library/react';
import Loading from './loading';  
 

jest.mock('./components/Spinner', () => () => <div>Mocked Spinner</div>);

describe('Loading Component', () => {
  test('renders Spinner component', () => {
    render(<Loading />);
 
    expect(screen.getByText('Mocked Spinner')).toBeInTheDocument();
  });
});
