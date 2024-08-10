import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import NotFound from "../src/components/NotFound/index"
import { useNavigate } from '@remix-run/react';
 /*
vi.mock('@remix-run/react', async () => {
  const actual = await vi.importActual<typeof import('@remix-run/react')>('@remix-run/react');
  return {
    ...actual,
    useNavigate: vi.fn(),
  };
});
*/


vi.mock('@remix-run/react', () => ({
    useNavigate: () => vi.fn(),   
  }));
describe('NotFound Component', () => {
  it('should render correctly', () => {
    render(<NotFound />);
 
    expect(screen.getByTestId('not-found')).toBeInTheDocument();
 
    expect(screen.getByText(/404/i)).toBeInTheDocument();
    expect(screen.getByText(/Page was not found/i)).toBeInTheDocument();

    
    expect(screen.getByRole('button', { name: /Back to homepage/i })).toBeInTheDocument();
  });
/*
  it('should navigate to homepage when "Back to homepage" is clicked', () => {
    const mockNavigate = vi.fn();
    (useNavigate as unknown as jest.Mock).mockReturnValue(mockNavigate);

    render(<NotFound />);
 
    const button = screen.queryAllByRole('button', { name: /Back to homepage/i });
    button.forEach(item => {

        fireEvent.click(item);
        expect(mockNavigate).toHaveBeenCalledWith('/');
    })
 
  });
  */ 
});
