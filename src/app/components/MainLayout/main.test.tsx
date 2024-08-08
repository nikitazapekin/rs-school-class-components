import React from 'react';
import { render, screen } from '@testing-library/react';
import MainLayout from './index'; 

describe('MainLayout', () => {
  test('renders children correctly', () => {
    
    render(
      <MainLayout>
        <div>Test Child</div>
      </MainLayout>
    );

    
    expect(screen.getByText('Test Child')).toBeInTheDocument();
  });
});
