
import { ErrorBoundary } from '.';
import { render, screen } from '@testing-library/react';

describe('MyErrorBoundary', () => {
 
  const ThrowError = () => {
    throw new Error('Test');
  };
 
  const realError = console.error;
  beforeEach(() => {
    console.error = jest.fn();
  });
  afterEach(() => {
    console.error = realError;
  });

  it('renders children when everything is fine', async () => {
    render(
      <ErrorBoundary>
        <p>Everything is fine</p>
      </ErrorBoundary>
    );
    expect(screen.getByText(/Everything is fine/i)).toBeInTheDocument();
  });

  it('shows an apologetic error message when an unhandled exception is thrown', () => {
    render(
      <ErrorBoundary>
        <ThrowError />
        <p>Everything is fine</p>
      </ErrorBoundary>
    );

    expect(screen.queryByText(/Something went wrong/i)).toBeInTheDocument();
    expect(screen.getByText(/Close/i)).toBeInTheDocument();
  });
});
 