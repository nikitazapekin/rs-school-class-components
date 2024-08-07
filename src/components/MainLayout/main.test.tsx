import React from 'react';
import { render, screen } from '@testing-library/react';
import MainLayout from './index';
jest.mock('../Header', () => () => <div>Header Component</div>);
jest.mock('../Background', () => () => <div>Background Component</div>);

describe('MainLayout component', () => {
  test('renders children, Header, and Background components', () => {

    const childText = 'Child Element';

    render(
      <MainLayout>
        <div>{childText}</div>
      </MainLayout>
    );

    expect(screen.getByText(childText)).toBeInTheDocument();
    expect(screen.getByText('Header Component')).toBeInTheDocument();

    expect(screen.getByText('Background Component')).toBeInTheDocument();
  });
  test('renders elements in the correct structure', () => {
    const childText = 'Child Element';
    render(
      <MainLayout>
        <div>{childText}</div>
      </MainLayout>
    );
    const mainContainer = screen.getByText(childText).parentElement?.parentElement;
    expect(mainContainer).toHaveClass('main-container');

    const contentWrapper = screen.getByText(childText).parentElement;
    expect(contentWrapper).toHaveClass('content-wrapper');
  });
});
