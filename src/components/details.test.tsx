// DetailsLayout.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
 
import DetailsLayout from './details'; 
import UserData from './UserData';
import App from '../App';

// Мокируем компоненты UserData и App для упрощения тестирования
jest.mock('./UserData', () => () => <div>UserData Component</div>);
jest.mock('../App', () => () => <div>App Component</div>);

describe('DetailsLayout component', () => {
  test('renders children, UserData, and App components', () => {
    // Arrange
    const childText = 'Child Element';

    // Act
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
