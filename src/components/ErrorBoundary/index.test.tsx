import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ErrorBoundary } from './index';
import { ErrorBoundaryProps } from './types.ts';
describe('ErrorBoundary', () => {
	const ErrorComponent: React.FC = () => {
		throw new Error('Test error');
	};

	const Wrapper: React.FC<ErrorBoundaryProps> = ({ children }) => <ErrorBoundary>{children}</ErrorBoundary>;

	it('renders children when there is no error', () => {
		render(
			<Wrapper>
				<div data-testid="child">Hello, world!</div>
			</Wrapper>,
		);

		expect(screen.getByTestId('child')).toBeInTheDocument();
	});

	it('renders error UI when there is an error', () => {
		render(
			<Wrapper>
				<ErrorComponent />
			</Wrapper>,
		);

		expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
	});

	it('calls handleClose when Close button is clicked', () => {
		render(
			<Wrapper>
				<ErrorComponent />
			</Wrapper>,
		);

		const closeButton = screen.getByRole('button', { name: /close/i });
		expect(closeButton).toBeInTheDocument();

		userEvent.click(closeButton);

		expect(screen.queryByText(/something went wrong/i)).not.toBeInTheDocument();
	});
});
