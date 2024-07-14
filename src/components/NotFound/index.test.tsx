import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NotFound from '.';

describe('List Component', () => {
	it('test', () => {
		render(
			<MemoryRouter>
				<NotFound />
			</MemoryRouter>,
		);

		const message = screen.getByText(/404/i);
		expect(message).toBeInTheDocument();
	});
});

/*
import { render, screen } from '@testing-library/react';
 
import NotFound from '.';
 
describe('List Component', () => {
  it('test', () => {
    render(<NotFound   />);
    
    const message = screen.getByText(/404/i)
    expect(message).toBeInTheDocument();
 
  });
});
*/
