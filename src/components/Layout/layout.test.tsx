
import React from 'react';
import { render, screen } from '@testing-library/react';

import Layout from './index';  
 
jest.mock('../../App', () => () => <div>App Component</div>);

describe('Layout component', () => {
  test('renders children and App component', () => {
    
    const childText = 'Child Element';
 
    render(
      <Layout>
        <div>{childText}</div>
      </Layout>
    );

   
    expect(screen.getByText(childText)).toBeInTheDocument();
 
    expect(screen.getByText('App Component')).toBeInTheDocument();
  });
});
