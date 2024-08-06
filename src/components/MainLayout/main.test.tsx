import React from 'react';
import { render, screen } from '@testing-library/react';
import MainLayout from './index';
jest.mock('../Header', () => () => <div>Header Component</div>);
jest.mock('../Background', () => () => <div>Background Component</div>);

describe('MainLayout component', () => {
  test('renders children, Header, and Background components', () => {

    const childText = 'Child Element';

    // Act
    render(
      <MainLayout>
        <div>{childText}</div>
      </MainLayout>
    );

    // Assert
    // Проверка наличия дочернего элемента
    expect(screen.getByText(childText)).toBeInTheDocument();

    // Проверка наличия компонента Header
    expect(screen.getByText('Header Component')).toBeInTheDocument();

    // Проверка наличия компонента Background
    expect(screen.getByText('Background Component')).toBeInTheDocument();
  });

  test('renders elements in the correct structure', () => {
    // Arrange
    const childText = 'Child Element';

    // Act
    render(
      <MainLayout>
        <div>{childText}</div>
      </MainLayout>
    );

    // Assert
    // Проверка структуры компонентов
    const mainContainer = screen.getByText(childText).parentElement?.parentElement;
    expect(mainContainer).toHaveClass('main-container');

    const contentWrapper = screen.getByText(childText).parentElement;
    expect(contentWrapper).toHaveClass('content-wrapper');
  });
});
