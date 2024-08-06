// Layout.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';

import Layout from './index'; // Убедитесь, что путь к файлу корректный
import Providers from '../../redux/Provider';
import App from '../../App';

// Мокируем компонент App для упрощения тестирования
jest.mock('../../App', () => () => <div>App Component</div>);

describe('Layout component', () => {
  test('renders children and App component', () => {
    // Arrange
    const childText = 'Child Element';

    // Act
    render(
      <Layout>
        <div>{childText}</div>
      </Layout>
    );

    // Assert
    // Проверка наличия дочернего элемента
    expect(screen.getByText(childText)).toBeInTheDocument();

    // Проверка наличия компонента App
    expect(screen.getByText('App Component')).toBeInTheDocument();
  });
});
