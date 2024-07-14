/*import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; // Импортируем BrowserRouter
import TestComponent from './TestComponent'; // Предполагая, что TestComponent находится в отдельном файле

describe('useSearch hook tests', () => {
  it('должен обновлять состояние запроса при изменении ввода', () => {
    render(
      <BrowserRouter>  
        <TestComponent />
      </BrowserRouter>
    );

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test' } });

    expect(screen.getByDisplayValue('test')).toBeInTheDocument();
  });

  it('должен получать данные пользователя, устанавливать localStorage и setPage при клике на кнопку', async () => {
    render(
      <BrowserRouter> 
        <TestComponent />
      </BrowserRouter>
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

  it('должен инкрементировать смещение при клике на кнопку "Next"', () => {
    render(
      <BrowserRouter>  
        <TestComponent />
      </BrowserRouter>
    );

    const nextButton = screen.getByRole('button', { name: /next/i });
    fireEvent.click(nextButton);

    expect(screen.getByTestId('pagination-offset')).toHaveTextContent('2');
    // Добавьте дополнительные проверки по необходимости
  });

  it('должен декрементировать смещение при клике на кнопку "Prev"', () => {
    render(
      <BrowserRouter> 
        <TestComponent />
      </BrowserRouter>
    );

    const prevButton = screen.getByRole('button', { name: /prev/i });
    fireEvent.click(prevButton);

    expect(screen.getByTestId('pagination-offset')).toHaveTextContent('0');
    // Добавьте дополнительные проверки по необходимости
  });

  it('должен устанавливать пользователя в localStorage при вызове handleSearch', () => {
    render(
      <BrowserRouter>  
        <TestComponent />
      </BrowserRouter>
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
*/

import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import useSearch from './useSearch'; // путь к вашему хуку useSearch
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
		// Add more assertions if necessary
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
		// Add more assertions if necessary
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
/*
 */
// Компонент-обёртка для тестов

/*
import { renderHook, act } from '@testing-library/react-hooks';
import { useSearchParams } from 'react-router-dom';
import useSearch from './useSearch';
import { getUserData } from '../API';

 
jest.mock('react-router-dom', () => ({
  useSearchParams: jest.fn(),
}));

jest.mock('../API', () => ({
  getUserData: jest.fn(),
}));

describe('useSearch hook', () => {
  let setSearchParamsMock: jest.Mock;
  let getUserDataMock: jest.Mock;

  beforeEach(() => {
    setSearchParamsMock = jest.fn();
    (useSearchParams as jest.Mock).mockReturnValue([new URLSearchParams(), setSearchParamsMock]);
    getUserDataMock = getUserData as jest.Mock;
    getUserDataMock.mockResolvedValue([]);
    localStorage.clear();
  });

  it('should set the search parameter in localStorage on handleClick', async () => {
    const { result } = renderHook(() => useSearch());

    act(() => {
      result.current.handleInputChange({ target: { value: 'testQuery' } } as React.ChangeEvent<HTMLInputElement>);
    });

    await act(async () => {
      await result.current.handleClick();
    });

    expect(localStorage.getItem('searchParam')).toBe('testQuery');
  });
  }); 
*/
