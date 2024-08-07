import React from 'react';
import { render, screen } from '@testing-library/react';

import NotLayout from './not';  


 
jest.mock('./NotFound', () => () => <div>NotFound Component</div>);

describe('NotLayout component', () => {
  test('renders children, NotFoundComponent, and styled div', () => {
    
    const childText = 'Child Element';
 
    render(
      <NotLayout>
        <div>{childText}</div>
      </NotLayout>
    );

    
    expect(screen.getByText(childText)).toBeInTheDocument();
 
    expect(screen.getByText('NotFound Component')).toBeInTheDocument();

  });
});
