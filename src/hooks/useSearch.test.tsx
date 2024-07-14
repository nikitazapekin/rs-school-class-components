import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import useSearch from './useSearch';
import { BrowserRouter } from 'react-router-dom';
const TestComponent = () => {
	const { query, users, batch, handleInputChange, handleClick, handleNext, handlePrev } = useSearch();

	return (
		<div>
			<input type="text" value={query} onChange={handleInputChange} />
			<button onClick={handleClick}>Search</button>

			<ul data-testid="user-list">
				{users.map((user) => (
					<li key={user.id}>{user.login}</li>
				))}
			</ul>

			<div data-testid="pagination-offset">{batch.offset}</div>

			<button onClick={handlePrev}>Prev</button>
			<button onClick={handleNext}>Next</button>
		</div>
	);
};

describe('useSearch hook tests', () => {
	it('should update query state on input change', () => {
		render(
			<BrowserRouter>
				<TestComponent />
			</BrowserRouter>,
		);

		const input = screen.getByRole('textbox');
		fireEvent.change(input, { target: { value: 'test' } });

		expect(screen.getByDisplayValue('test')).toBeInTheDocument();
	});

	it('should fetch user data, set localStorage and setPage on handleClick', async () => {
		render(
			<BrowserRouter>
				<TestComponent />
			</BrowserRouter>,
		);

		const input = screen.getByRole('textbox');
		fireEvent.change(input, { target: { value: 'test' } });

		const button = screen.getByRole('button', { name: /search/i });
		fireEvent.click(button);

		await waitFor(() => {
			expect(localStorage.getItem('searchParam')).toBe('test');
			expect(screen.getByTestId('user-list')).toBeInTheDocument();
			expect(screen.getByTestId('pagination-offset')).toHaveTextContent('1');
		});
	});

	it('should increment offset on handleNext', () => {
		render(
			<BrowserRouter>
				<TestComponent />
			</BrowserRouter>,
		);

		const nextButton = screen.getByRole('button', { name: /next/i });
		fireEvent.click(nextButton);

		expect(screen.getByTestId('pagination-offset')).toHaveTextContent('2');
	});

	it('should decrement offset on handlePrev', () => {
		render(
			<BrowserRouter>
				<TestComponent />
			</BrowserRouter>,
		);

		const prevButton = screen.getByRole('button', { name: /prev/i });
		fireEvent.click(prevButton);

		expect(screen.getByTestId('pagination-offset')).toHaveTextContent('0');
	});

	it('should set user in localStorage on handleSearch', () => {
		render(
			<BrowserRouter>
				<TestComponent />
			</BrowserRouter>,
		);

		const username = 'testuser';
		const input = screen.getByRole('textbox');
		fireEvent.change(input, { target: { value: username } });

		const searchButton = screen.getByRole('button', { name: /search/i });
		fireEvent.click(searchButton);

		const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
		expect(storedUser.login).toBe(username);
	});
});

//git reset --hard HEAD@{1}
