import { render, screen } from '@testing-library/react';
import Spinner from '../Spinner';

test('renders the loader span', () => {
	render(<Spinner />);
	const loaderElement = screen.getByTestId('loader');
	expect(loaderElement).toBeInTheDocument();
});
