import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import NotPage from '../../app/routes/$';  
import { useNavigate } from '@remix-run/react';
 
vi.mock('@remix-run/react', () => ({
  useNavigate: () => vi.fn(), 
}));

describe('NotPage Component', () => {
  it('should render NotFound component correctly', () => {
    render(<NotPage />);
 
  const nothingFoundElements = screen.queryAllByTestId('not-found')
  nothingFoundElements.forEach(item=> {
    expect(item).toBeInTheDocument();
  })
  
  }); 
});
