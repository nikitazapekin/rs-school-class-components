import React from 'react';
import { render } from '@testing-library/react';
import NotFoundComponent from './index';


describe('NotFoundComponent', () => {
  it('should render correctly with 404 title and not found text', () => {
    const { getByText } = render(<NotFoundComponent />);
    
    expect(getByText('404')).toBeInTheDocument();
    expect(getByText('Page was not found')).toBeInTheDocument();
  });

  it('should render a link to the homepage', () => {
    const { getByText } = render(<NotFoundComponent />);
    
    const link = getByText('Back to homepage');
    expect(link.closest('a')).toHaveAttribute('href', '/');
  });

  it('should apply the correct styles to the elements', () => {
    const { container, getByText } = render(<NotFoundComponent />);
    
    expect(container.firstChild).toHaveClass('not');
    expect(getByText('404')).toHaveClass('not__title');
    expect(getByText('Page was not found')).toHaveClass('not__text');
    expect(getByText('Back to homepage')).toHaveClass('not__btn');
  });
});
