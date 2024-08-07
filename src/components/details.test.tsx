
import React from 'react';
import { render, screen } from '@testing-library/react';
 
import DetailsLayout from './details';  
jest.mock('./UserData', () => () => <div>UserData Component</div>);
jest.mock('../App', () => () => <div>App Component</div>);

describe('DetailsLayout component', () => {
  test('renders children, UserData, and App components', () => {
 
    const childText = 'Child Element';

 
    render(
      <DetailsLayout>
        <div>{childText}</div>
      </DetailsLayout>
    );

 
    expect(screen.getByText(childText)).toBeInTheDocument();
 
    expect(screen.getByText('UserData Component')).toBeInTheDocument();
 
    expect(screen.getByText('App Component')).toBeInTheDocument();
  });
});
