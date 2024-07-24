 
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ErrorBoundary } from '../ErrorBoundary';
import ErrorComponent from '.';
describe('ErrorComponent', () => {
  test('catches and displays error message when error occurs', () => {
    render(
      <ErrorBoundary>
        <ErrorComponent />
      </ErrorBoundary>
    );

   
    const button = screen.getByTestId('throw__error');
    fireEvent.click(button);
 
    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
 
    const closeButton = screen.getByTestId('error__btn');
    fireEvent.click(closeButton);
    expect(screen.queryByText('Something went wrong')).not.toBeInTheDocument();
  });
});




/* 
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ErrorBoundary } from '../ErrorBoundary';
import ErrorComponent from '.';
describe('ErrorComponent', () => {
  test('catches and displays error message when error occurs', () => {
    render(
      <ErrorBoundary>
        <ErrorComponent />
      </ErrorBoundary>
    );

 
    const button = screen.getByTestId('throw__error');
    fireEvent.click(button);
 
    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
 
    const closeButton = screen.getByTestId('error__btn');
    fireEvent.click(closeButton);
    expect(screen.queryByText('Something went wrong')).not.toBeInTheDocument();
  });
});
*/



/*
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ErrorComponent from './index';
import { ErrorBoundary } from '../ErrorBoundary';
describe('ErrorComponent', () => {
	test('throws an error when counter reaches 1', () => {
		render(
			<ErrorBoundary>
				<ErrorComponent />
			</ErrorBoundary>
		);

		const button = screen.getByTestId('throw__error');
		fireEvent.click(button);

		expect(screen.getByText('Something went wrong')).toBeInTheDocument();
	});
});
*/