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
