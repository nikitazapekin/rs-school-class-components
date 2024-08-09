
import { render, screen } from '@testing-library/react';

import NotFound from './index'; 
import React from "react"
test('renders the NotFound component', () => {
    render(<NotFound />);
    
    // Проверяем, что компонент присутствует в документе
    expect(screen.getByTestId('not-found')).toBeInTheDocument();
  });
 /*
test('renders the NotFound component with correct content', () => {
  render(
      <NotFound />
  );

  expect(screen.getByText('404')).not.toBeInTheDocument();


  
});
*/
// expect(screen.getByText('Page was not found')).toBeInTheDocument();
// expect(screen.getByText('Back to homepage')).toBeInTheDocument();
/*
test('renders the link with correct href', () => {
  render(
      <NotFound />
  );

  const linkElement = screen.getByText('Back to homepage');

 // expect(linkElement).toHaveAttribute('href', '/');
});
*/