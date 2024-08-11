import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import NotFound from "../src/components/NotFound/index"
 
 


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
});
