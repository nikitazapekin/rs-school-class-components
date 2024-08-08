
import React from 'react';
import { render, screen } from '@testing-library/react';
import ClientLayout from './ClientLayout';
jest.mock('../redux/Provider', () => {
  return ({ children }: { children: React.ReactNode }) => <div data-testid="mock-provider">{children}</div>;
});
jest.mock('./components/MainLayout', () => {
  return ({ children }: { children: React.ReactNode }) => <div data-testid="mock-mainlayout">{children}</div>;
});

test('renders children inside Providers and MainLayout', () => {
  render(
    <ClientLayout>
      <div data-testid="child-element">Child Element</div>
    </ClientLayout>
  );

  const providerElement = screen.getByTestId('mock-provider');
  expect(providerElement).toBeInTheDocument();


  const mainLayoutElement = screen.getByTestId('mock-mainlayout');
  expect(mainLayoutElement).toBeInTheDocument();
  const childElement = screen.getByTestId('child-element');
  expect(childElement).toBeInTheDocument();
  expect(childElement).toHaveTextContent('Child Element');
});
