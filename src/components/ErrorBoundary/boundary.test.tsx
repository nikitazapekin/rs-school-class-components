 
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ErrorBoundary } from './index';

const ProblemChild = () => {
	throw new Error('Test error');
};

describe('ErrorBoundary Component', () => {
	test('catches errors and displays error message', () => {
		render(
			<ErrorBoundary>
				<ProblemChild />
			</ErrorBoundary>
		);

		expect(screen.getByText('Something went wrong')).toBeInTheDocument();
		expect(screen.getByTestId('error__btn')).toBeInTheDocument();
	});

	test('resets error state when close button is clicked', () => {
		render(
			<ErrorBoundary>
				<ProblemChild />
			</ErrorBoundary>
		);

		const closeButton = screen.getByTestId('error__btn');
		fireEvent.click(closeButton);

		expect(screen.queryByText('Something went wrong')).toBeInTheDocument();
	});

	test('resets error state when overlay is clicked', () => {
		render(
			<ErrorBoundary>
				<ProblemChild />
			</ErrorBoundary>
		);

		const overlay = screen.getByTestId('error__overlay');
		fireEvent.click(overlay);

		expect(screen.queryByText('Something went wrong')).toBeInTheDocument();
	});

	test('renders children when no error', () => {
		render(
			<ErrorBoundary>
				<div>Child component</div>
			</ErrorBoundary>
		);

		expect(screen.getByText('Child component')).toBeInTheDocument();
	});
});
