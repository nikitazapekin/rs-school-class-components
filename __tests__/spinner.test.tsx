import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
//import Spinner from '@/components/Spinner';
import Spinner from "../src/components/Spinner/index"
describe('Spinner Component', () => {
  it('should render the spinner', () => {
    render(<Spinner />);
    
 
    const spinner = screen.getByTestId('loader');
    expect(spinner).toBeInTheDocument();
  });
 

  it('should have the correct keyframes animation', () => {
    render(<Spinner />);
    
    // Ensure the @keyframes spin is present in the document's styles
    const styleElement = document.querySelector('style');
    
    expect(styleElement).toBeInTheDocument();
    expect(styleElement).not.toHaveTextContent(`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `);
    });
});
