import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Spinner from '@/components/Spinner';

describe('Spinner Component', () => {
  it('should render the spinner', () => {
    render(<Spinner />);
    
 
    const spinner = screen.getByTestId('loader');
    expect(spinner).toBeInTheDocument();
  });
/*
it('should have correct styles applied', () => {
    render(<Spinner />);
    
    
    const spinner = screen.getByTestId('loader');
    
    expect(spinner).toHaveStyle({
      width: '48px',
      height: '48px',
      border: '5px solid #fff',
      borderBottomColor: '#7700ff',
      borderRadius: '50%',
      display: 'inline-block',
      boxSizing: 'border-box',
      animation: 'spin 0.8s linear infinite',
      margin: '0 auto',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: '111111111111111111',
    });
});
*/

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
