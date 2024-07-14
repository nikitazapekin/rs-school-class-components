import { render, screen, waitFor } from '@testing-library/react';
import UserData from './index';
import axios from 'axios';
import { MemoryRouter } from 'react-router-dom';

jest.mock('axios');

describe('UserData component', () => {
	it('renders user data correctly after fetching', async () => {
		const mockUserData = {
			login: 'karpathy',
			id: 241138,
			avatar_url: 'https://avatars.githubusercontent.com/u/241138?v=4',
			type: 'User',
		};

		(axios.get as jest.Mock).mockResolvedValue({ data: mockUserData });

		render(
			<MemoryRouter>
				<UserData />
			</MemoryRouter>,
		);

		expect(screen.getByTestId('spinner')).toBeInTheDocument();

		await waitFor(() => {
			expect(screen.getByText('karpathy')).toBeInTheDocument();
			expect(screen.getByAltText("karpathy's avatar")).toBeInTheDocument();
			expect(screen.getByText('ID: 241138')).toBeInTheDocument();
			expect(screen.getByText('Type: User')).toBeInTheDocument();
		});

		expect(screen.queryByTestId('spinner')).not.toBeInTheDocument();
	});

	it('handles error during data fetch', async () => {
		(axios.get as jest.Mock).mockRejectedValue(new Error('Failed to fetch user data'));

		render(<UserData />);

		expect(screen.getByTestId('spinner')).toBeInTheDocument();

		await waitFor(() => {
			expect(screen.getByText('Error fetching user data:')).toBeInTheDocument();
		});

		expect(screen.queryByTestId('spinner')).not.toBeInTheDocument();
	});
});
