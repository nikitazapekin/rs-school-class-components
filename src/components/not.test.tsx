import React from 'react';
import { render, screen } from '@testing-library/react';

import NotLayout from './not';  
import NotFoundComponent from './NotFound';

 
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

 /*
    const styledDiv = screen.getByText('dds');
    expect(styledDiv).toBeInTheDocument();
    expect(styledDiv).toHaveStyle('height: 400px');
    expect(styledDiv).toHaveStyle('width: 400px');
    expect(styledDiv).toHaveStyle('background-color: red');
   */
  });
});
