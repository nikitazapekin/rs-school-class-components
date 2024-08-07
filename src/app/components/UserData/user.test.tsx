import React from 'react';
import { render } from '@testing-library/react';
import { useSelector as useSelectorMock } from 'react-redux';
import UserData from './index';
import { paramsSelector } from '../../../redux/selectors/getSearchParams';
import { User } from './index';

// Mocking the necessary modules and components
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href }: { children: React.ReactNode; href: string }) => <a href={href}>{children}</a>,
}));

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, width, height }: { src: string; alt: string; width: number; height: number }) => (
    <img src={src} alt={alt} width={width} height={height} />
  ),
}));

describe('UserData Component', () => {
  it('renders user data correctly', () => {
    const user: User = {
        login: 'testuser',
        id: 123,
        node_id: 'node123',
        avatar_url: 'https://example.com/avatar.jpg',
        gravatar_id: '',
        url: 'https://example.com',
        html_url: 'https://example.com',
        followers_url: 'https://example.com',
        following_url: 'https://example.com',
        gists_url: 'https://example.com',
        starred_url: 'https://example.com',
        subscriptions_url: 'https://example.com',
        organizations_url: 'https://example.com',
        repos_url: 'https://example.com',
        events_url: 'https://example.com',
        received_events_url: 'https://example.com',
        type: 'User',
        site_admin: false,
        score: 1,
    };

    // Cast useSelectorMock to the correct type
    /*
    (useSelectorMock as jest.Mock).mockImplementation((selector) => {
      if (selector === paramsSelector) {
        return { offset: 1, query: 'test' };
      }
    });
*/
    const { getByText, getByAltText } = render(<UserData user={user} />);

    expect(getByText('testuser')).toBeInTheDocument();
    expect(getByAltText("testuser's avatar")).toBeInTheDocument();
    expect(getByText('ID: 123')).toBeInTheDocument();
    expect(getByText('Type: User')).toBeInTheDocument();
    expect(getByText('Close').closest('a')).toHaveAttribute(
      'href',
      '/?page=1&query=test'
    );
  });
});
