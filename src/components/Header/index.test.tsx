import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Header from './index';

const mockHandleInputChange = jest.fn();
const mockHandleClick = jest.fn();

const renderHeader = () => {
	return render(
		<BrowserRouter>
			<Header handleInputChange={mockHandleInputChange} handleClick={mockHandleClick} />
		</BrowserRouter>,
	);
};

describe('Header Component', () => {
	it('should render search input and button', () => {
		renderHeader();

		const searchInput = screen.getByPlaceholderText('Search...');
		const searchButton = screen.getByRole('button', { name: /search/i });

		expect(searchInput).toBeInTheDocument();
		expect(searchButton).toBeInTheDocument();
	});

	it('should call handleInputChange on input change', () => {
		renderHeader();

		const searchInput = screen.getByPlaceholderText('Search...');
		fireEvent.change(searchInput, { target: { value: 'test' } });

		expect(mockHandleInputChange).toHaveBeenCalledTimes(1);
	});

	it('should call handleClick on search button click', () => {
		renderHeader();

		const searchButton = screen.getByRole('button', { name: /search/i });
		fireEvent.click(searchButton);

		expect(mockHandleClick).toHaveBeenCalledTimes(1);
	});

	it('should redirect to error page on redirect button click', () => {
		renderHeader();

		const redirectButton = screen.getByText('Redirect to error page');
		fireEvent.click(redirectButton);

		expect(window.location.pathname).toBe('/not-existing-page');
	});
});

/*import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Header from './index';
 

 
const mockHandleInputChange = jest.fn();
const mockHandleClick = jest.fn();

const renderHeader = () => {
    return render(
        <BrowserRouter>
            <Header handleInputChange={mockHandleInputChange} handleClick={mockHandleClick} />
        </BrowserRouter>
    );
};

describe('Header Component', () => {
    it('should render search input and button', () => {
        renderHeader();

        const searchInput = screen.getByPlaceholderText('Search...');
        const searchButton = screen.getByRole('button', { name: /search/i });

        expect(searchInput).toBeInTheDocument();
        expect(searchButton).toBeInTheDocument();
    });

    it('should call handleInputChange on input change', () => {
        renderHeader();

        const searchInput = screen.getByPlaceholderText('Search...');
        fireEvent.change(searchInput, { target: { value: 'test' } });

        expect(mockHandleInputChange).toHaveBeenCalledTimes(1);
    });

    it('should call handleClick on search button click', () => {
        renderHeader();

        const searchButton = screen.getByRole('button', { name: /search/i });
        fireEvent.click(searchButton);

        expect(mockHandleClick).toHaveBeenCalledTimes(1);
    });

    it('should redirect to error page on redirect button click', () => {
        renderHeader();

        const redirectButton = screen.getByText('Redirect to error page');
        fireEvent.click(redirectButton);

        expect(window.location.pathname).toBe('/not-existing-page');
    });
});
*/
