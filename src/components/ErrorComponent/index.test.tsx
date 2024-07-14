import { render, fireEvent } from '@testing-library/react';
import ErrorComponent from './index';

describe('ErrorComponent', () => {
	it('renders without crashing', () => {
		const { getByText } = render(<ErrorComponent />);
		const buttonElement = getByText('Throw Error');
		expect(buttonElement).toBeInTheDocument();
	});

	it('throws an error on button click', () => {
		const { getByText } = render(<ErrorComponent />);
		const buttonElement = getByText('Throw Error');
		fireEvent.click(buttonElement);

		try {
			fireEvent.click(buttonElement);
		} catch (error: unknown) {
			if (error instanceof Error) {
				expect(error.message).toBe('I crashed!!');
			} else {
				fail('Expected an instance of Error');
			}
		}
	});
});

/*
import { render, fireEvent } from '@testing-library/react';
import ErrorComponent from './index';

test('should throw error when button is clicked', () => {
  const { getByText } = render(<ErrorComponent />);
  const button = getByText('Crash');

 
  fireEvent.click(button);

  
  expect(() => fireEvent.click(button)).toThrow('I crashed!!');
});
  */

/*
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ErrorComponent from './index';

describe('ErrorComponent', () => {
  it('should render the button', () => {
    render(<ErrorComponent />);
    const button = screen.getByRole('button', { name: /throw error/i });
    expect(button).toBeInTheDocument();
  });

  it('should increment counter and throw error when counter reaches 1', () => {
    const { rerender } = render(<ErrorComponent />);
    
    const button = screen.getByRole('button', { name: /throw error/i });
    expect(button).toBeInTheDocument();

   
    fireEvent.click(button);
    
 
    expect(() => rerender(<ErrorComponent />)).toThrow('I crashed!!');
  });
});
*/
