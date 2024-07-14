import { render, screen } from '@testing-library/react';
import List from './index';
import { MemoryRouter } from 'react-router-dom';

interface UserItem {
	login: string;
	id: number;
	node_id: string;
	avatar_url: string;
	gravatar_id: string;
	url: string;
	html_url: string;
	followers_url: string;
	following_url: string;
	gists_url: string;
	starred_url: string;
	subscriptions_url: string;
	organizations_url: string;
	repos_url: string;
	events_url: string;
	received_events_url: string;
	type: string;
	site_admin: boolean;
	score: number;
}

export type UserData = UserItem[];

export interface MyComponentProps {
	typedValue: string;
	users: UserData;
	handleNext: () => void;
	handlePrev: () => void;
	isFetching: boolean;
}

const mockUsers: UserData = [
	{
		login: 'user1',
		id: 1,
		node_id: 'node1',
		avatar_url: 'http://example.com/avatar1.png',
		gravatar_id: '',
		url: 'http://example.com/user1',
		html_url: 'http://example.com/user1',
		followers_url: 'http://example.com/user1/followers',
		following_url: 'http://example.com/user1/following',
		gists_url: 'http://example.com/user1/gists',
		starred_url: 'http://example.com/user1/starred',
		subscriptions_url: 'http://example.com/user1/subscriptions',
		organizations_url: 'http://example.com/user1/orgs',
		repos_url: 'http://example.com/user1/repos',
		events_url: 'http://example.com/user1/events',
		received_events_url: 'http://example.com/user1/received_events',
		type: 'User',
		site_admin: false,
		score: 1,
	},
	{
		login: 'user2',
		id: 2,
		node_id: 'node2',
		avatar_url: 'http://example.com/avatar2.png',
		gravatar_id: '',
		url: 'http://example.com/user2',
		html_url: 'http://example.com/user2',
		followers_url: 'http://example.com/user2/followers',
		following_url: 'http://example.com/user2/following',
		gists_url: 'http://example.com/user2/gists',
		starred_url: 'http://example.com/user2/starred',
		subscriptions_url: 'http://example.com/user2/subscriptions',
		organizations_url: 'http://example.com/user2/orgs',
		repos_url: 'http://example.com/user2/repos',
		events_url: 'http://example.com/user2/events',
		received_events_url: 'http://example.com/user2/received_events',
		type: 'User',
		site_admin: false,
		score: 2,
	},
	{
		login: 'user3',
		id: 3,
		node_id: 'node3',
		avatar_url: 'http://example.com/avatar3.png',
		gravatar_id: '',
		url: 'http://example.com/user3',
		html_url: 'http://example.com/user3',
		followers_url: 'http://example.com/user3/followers',
		following_url: 'http://example.com/user3/following',
		gists_url: 'http://example.com/user3/gists',
		starred_url: 'http://example.com/user3/starred',
		subscriptions_url: 'http://example.com/user3/subscriptions',
		organizations_url: 'http://example.com/user3/orgs',
		repos_url: 'http://example.com/user3/repos',
		events_url: 'http://example.com/user3/events',
		received_events_url: 'http://example.com/user3/received_events',
		type: 'User',
		site_admin: false,
		score: 3,
	},
	{
		login: 'user4',
		id: 4,
		node_id: 'node4',
		avatar_url: 'http://example.com/avatar4.png',
		gravatar_id: '',
		url: 'http://example.com/user4',
		html_url: 'http://example.com/user4',
		followers_url: 'http://example.com/user4/followers',
		following_url: 'http://example.com/user4/following',
		gists_url: 'http://example.com/user4/gists',
		starred_url: 'http://example.com/user4/starred',
		subscriptions_url: 'http://example.com/user4/subscriptions',
		organizations_url: 'http://example.com/user4/orgs',
		repos_url: 'http://example.com/user4/repos',
		events_url: 'http://example.com/user4/events',
		received_events_url: 'http://example.com/user4/received_events',
		type: 'User',
		site_admin: false,
		score: 4,
	},
	{
		login: 'user5',
		id: 5,
		node_id: 'node5',
		avatar_url: 'http://example.com/avatar5.png',
		gravatar_id: '',
		url: 'http://example.com/user5',
		html_url: 'http://example.com/user5',
		followers_url: 'http://example.com/user5/followers',
		following_url: 'http://example.com/user5/following',
		gists_url: 'http://example.com/user5/gists',
		starred_url: 'http://example.com/user5/starred',
		subscriptions_url: 'http://example.com/user5/subscriptions',
		organizations_url: 'http://example.com/user5/orgs',
		repos_url: 'http://example.com/user5/repos',
		events_url: 'http://example.com/user5/events',
		received_events_url: 'http://example.com/user5/received_events',
		type: 'User',
		site_admin: false,
		score: 5,
	},
];

const mockProps: MyComponentProps = {
	typedValue: 'test',
	users: mockUsers,
	handleNext: jest.fn(),
	handlePrev: jest.fn(),
	isFetching: false,
};

describe('List Component', () => {
	it('should render prev and next buttons', () => {
		render(
			<MemoryRouter>
				<List {...mockProps} />
			</MemoryRouter>,
		);

		const buttonElementPrev = screen.getByRole('button', { name: /prev/i });
		const buttonElementNext = screen.getByRole('button', { name: /next/i });

		expect(buttonElementPrev).toBeInTheDocument();
		expect(buttonElementNext).toBeInTheDocument();
	});

	it('should render 5 Card components', () => {
		render(
			<MemoryRouter>
				<List {...mockProps} />
			</MemoryRouter>,
		);

		const cardElements = screen.getAllByRole('img');

		expect(cardElements).toHaveLength(5);
	});
});
/*
 */
