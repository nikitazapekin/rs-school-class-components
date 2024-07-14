import { render, fireEvent, screen } from '@testing-library/react';
import NotFound from './index';
import { BrowserRouter as Router } from 'react-router-dom';

describe('NotFound component', () => {
	it('renders 404 page with correct content', () => {
		render(
			<Router>
				<NotFound />
			</Router>,
		);

		const titleElement = screen.getByText(/404/i);
		const textElement = screen.getByText(/Page was not found/i);
		const buttonElement = screen.getByRole('button', { name: /Back to homepage/i });

		expect(titleElement).toBeInTheDocument();
		expect(textElement).toBeInTheDocument();
		expect(buttonElement).toBeInTheDocument();
	});

	it('redirects to homepage when button is clicked', () => {
		const { container } = render(
			<Router>
				<NotFound />
			</Router>,
		);

		fireEvent.click(screen.getByRole('button', { name: /Back to homepage/i }));

		expect(container.innerHTML).not.toContain('404');
		expect(container.innerHTML).toContain('Main Page Content');
	});
});
