/*
 */
import { render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import Card from './index';
import { CardProps } from './types';

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => jest.fn(),
}));

describe('Card component', () => {
	const mockNavigate = jest.fn();
	const originalNavigate = require('react-router-dom').useNavigate;

	beforeEach(() => {
		jest.clearAllMocks();
		require('react-router-dom').useNavigate = () => mockNavigate;
	});

	afterAll(() => {
		require('react-router-dom').useNavigate = originalNavigate;
	});

	const defaultProps: CardProps = {
		avatar_url: 'https://example.com/avatar.png',
		login: 'testuser',
		html_url: 'https://example.com/userprofile',
	};

	const setup = (props = defaultProps) => {
		return render(
			<BrowserRouter>
				<Card {...props} />
			</BrowserRouter>,
		);
	};

	test('renders correctly', () => {
		setup();
		expect(screen.getByText('testuser')).toBeInTheDocument();
		expect(screen.getByAltText('user')).toHaveAttribute('src', 'https://example.com/avatar.png');
	});

	test('clicking on card navigates to correct URL', () => {
		setup();
		const userLink = screen.getByText('testuser');
		userLink.click();

		expect(mockNavigate).toHaveBeenCalledWith('/main/userdata?username=testuser');
	});
});

/*import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import Card from './index';
import { CardProps } from './types';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => jest.fn(),
}));

describe('Card component', () => {
    const mockNavigate = jest.fn();
    const originalNavigate = require('react-router-dom').useNavigate;

    beforeEach(() => {
        jest.clearAllMocks();
        require('react-router-dom').useNavigate = () => mockNavigate;
    });

    afterAll(() => {
        require('react-router-dom').useNavigate = originalNavigate;
    });

    const defaultProps: CardProps = {
        avatar_url: 'https://example.com/avatar.png',
        login: 'testuser',
    };

    const setup = (props = defaultProps) => {
        return render(
            <BrowserRouter>
                <Card {...props} />
            </BrowserRouter>
        );
    };

    test('renders correctly', () => {
        setup();
        expect(screen.getByText('testuser')).toBeInTheDocument();
        expect(screen.getByAltText('user')).toHaveAttribute('src', 'https://example.com/avatar.png');
    });

   

        expect(localStorage.setItem).toHaveBeenCalledWith('lastUrl', '/somepage?param=value');
    });

    test('does not save to localStorage if URL includes userdata', () => {
        Object.defineProperty(window, 'location', {
            value: {
                pathname: '/main/userdata',
                search: '?param=value',
            },
            writable: true,
        });

        setup();
        const userLink = screen.getByText('testuser').closest('div');
        fireEvent.click(userLink);

        expect(localStorage.setItem).not.toHaveBeenCalled();
    });
});
*/
