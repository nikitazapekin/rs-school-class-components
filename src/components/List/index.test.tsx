/*
import { render, screen } from '@testing-library/react';
import List from './index';
import { MyComponentProps, UserData } from './types';

const mockProps: MyComponentProps = {
	typedValue: 'test',
	users: [],
	handleNext: jest.fn(),
	handlePrev: jest.fn(),
	isFetching: false,
};

describe('List Component', () => {
	it('should render a button with class "list__btn"', () => {
		render(<List {...mockProps} />);

		const buttonPrev = screen.getByRole('button', { name: /prev/i });
		const buttonNext = screen.getByRole('button', { name: /next/i });
		const elems = screen.getByTestId('elems');

		expect(buttonPrev).toBeInTheDocument();
		expect(buttonNext).toBeInTheDocument();
		expect(elems).toBeInTheDocument();
	});

	it('should render the correct number of Card components', () => {
		const users: UserData = [
			{
				login: 'user1',
				id: 1,
				node_id: 'node1',
				avatar_url: 'url1',
				gravatar_id: '',
				url: 'url1',
				html_url: 'html1',
				followers_url: 'followers1',
				following_url: 'following1',
				gists_url: 'gists1',
				starred_url: 'starred1',
				subscriptions_url: 'subscriptions1',
				organizations_url: 'organizations1',
				repos_url: 'repos1',
				events_url: 'events1',
				received_events_url: 'received_events1',
				type: 'User',
				site_admin: false,
				score: 0,
			},
			{
				login: 'user2',
				id: 2,
				node_id: 'node2',
				avatar_url: 'url2',
				gravatar_id: '',
				url: 'url2',
				html_url: 'html2',
				followers_url: 'followers2',
				following_url: 'following2',
				gists_url: 'gists2',
				starred_url: 'starred2',
				subscriptions_url: 'subscriptions2',
				organizations_url: 'organizations2',
				repos_url: 'repos2',
				events_url: 'events2',
				received_events_url: 'received_events2',
				type: 'User',
				site_admin: false,
				score: 0,
			},

			{
				login: 'user1',
				id: 1,
				node_id: 'node1',
				avatar_url: 'url1',
				gravatar_id: '',
				url: 'url1',
				html_url: 'html1',
				followers_url: 'followers1',
				following_url: 'following1',
				gists_url: 'gists1',
				starred_url: 'starred1',
				subscriptions_url: 'subscriptions1',
				organizations_url: 'organizations1',
				repos_url: 'repos1',
				events_url: 'events1',
				received_events_url: 'received_events1',
				type: 'User',
				site_admin: false,
				score: 0,
			},
			{
				login: 'user2',
				id: 2,
				node_id: 'node2',
				avatar_url: 'url2',
				gravatar_id: '',
				url: 'url2',
				html_url: 'html2',
				followers_url: 'followers2',
				following_url: 'following2',
				gists_url: 'gists2',
				starred_url: 'starred2',
				subscriptions_url: 'subscriptions2',
				organizations_url: 'organizations2',
				repos_url: 'repos2',
				events_url: 'events2',
				received_events_url: 'received_events2',
				type: 'User',
				site_admin: false,
				score: 0,
			},
			{
				login: 'user2',
				id: 2,
				node_id: 'node2',
				avatar_url: 'url2',
				gravatar_id: '',
				url: 'url2',
				html_url: 'html2',
				followers_url: 'followers2',
				following_url: 'following2',
				gists_url: 'gists2',
				starred_url: 'starred2',
				subscriptions_url: 'subscriptions2',
				organizations_url: 'organizations2',
				repos_url: 'repos2',
				events_url: 'events2',
				received_events_url: 'received_events2',
				type: 'User',
				site_admin: false,
				score: 0,
			},
		];

		render(<List {...mockProps} users={users} />);

		const cards = screen.getAllByRole('article');
		expect(cards).toHaveLength(users.length);
	});

	it('should display a message when there are no users', () => {
		render(<List {...mockProps} users={[]} />);

		const noUsersMessage = screen.getByText(/no users found/i);
		expect(noUsersMessage).toBeInTheDocument();
	});
});
*/