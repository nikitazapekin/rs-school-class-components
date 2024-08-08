
import React from 'react';
import { render, screen } from '@testing-library/react';

import RootLayout from './layout';

jest.mock('./ClientLayout', () => {
  return ({ children }: { children: React.ReactNode }) => <div data-testid="mock-clientlayout">{children}</div>;
});

test('renders children inside ClientLayout and correct HTML structure', () => {
  render(
    <RootLayout>
      <div data-testid="child-element">Child Element</div>
    </RootLayout>
  );

 
  const clientLayoutElement = screen.getByTestId('mock-clientlayout');
  expect(clientLayoutElement).toBeInTheDocument();


  const childElement = screen.getByTestId('child-element');
 expect(childElement).toBeInTheDocument();
  expect(childElement).toHaveTextContent('Child Element');
});
