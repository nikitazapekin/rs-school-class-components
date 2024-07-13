/*
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './styles.scss';
import useSearch from '@/hooks/useSearch';

const UserData = () => {
    const { query, batch } = useSearch();
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = () => {
        let returnUrl = '';

        if (query === '') {
            returnUrl = `/main?page=${batch.offset}`;
        } else {
            returnUrl = `/main?page=${batch.offset}&query=${query}`;
        }

        navigate(returnUrl);
    };

    return (
        <div className="testB">
            teststts
            <button className='close__btn' onClick={handleClick}>close {batch.offset} {query} </button>
        </div>
    );
};

export default UserData;
*/

import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './styles.scss';
import useSearch from '@/hooks/useSearch';
interface User {
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
const UserData = () => {
	const { handleSearch } = useSearch();

	const navigate = useNavigate();
	const location = useLocation();
	const [username, setUsername] = useState<string>('');
	const [user, setUser] = useState<User>();
	useEffect(() => {
		const searchParams = new URLSearchParams(location.search);
		const usernameParam = searchParams.get('username');
		setUsername(usernameParam || '');
		setUser(handleSearch(String(usernameParam)));
	}, [location.search]);

	const handleClick = () => {
		let lastUrlWithoutUsername = findLastUrlWithoutUsername(location);

		if (lastUrlWithoutUsername) {
			navigate(lastUrlWithoutUsername);
		} else {
			navigate('/');
		}
	};

	const findLastUrlWithoutUsername = (location: { pathname: string; search: string }) => {
		const path = location.pathname;
		const searchParams = new URLSearchParams(location.search);
		const hasUsernameParam = searchParams.has('username');
		if (!hasUsernameParam && !path.includes('/username')) {
			return path + location.search;
		}
		const params = new URLSearchParams(location.search);
		params.delete('username');
		const newSearch = params.toString() ? `?${params.toString()}` : '';
		const finalUrl = path + newSearch;

		return finalUrl === path ? null : finalUrl;
	};

	return (
		<aside className="sidebar">
			<img src={user?.avatar_url} alt="logo" className="sidebar__logo" />
			<h2>Username: {user?.login}</h2>
			<p className="user__text">id: {user?.id}</p>
			<p className="user__text">url: {user?.url}</p>
			<p className="user__text">following_url: {user?.following_url} </p>
			<p className="user__text">starred_url: {user?.starred_url} </p>
			<p className="user__text">repos_url: {user?.repos_url}</p>
			<p className="user__text">type: {user?.type}</p>
			<p className="user__text">score: {user?.score} </p>
			<p className="user__text"></p>
			<p className="user__text"></p>
			<p className="user__text"></p>

			<button className="close__btn" onClick={handleClick}>
				close
			</button>
		</aside>
	);
};

export default UserData;

/*




            <img src={user?.avatar_url} alt="logo" className="sidebar__logo" />
            <h2>Username: {user?.login}</h2>
            <p className="user__text">id: {user?.id}</p>
            <p className="user__text">url:</p>
            <p className="user__text"></p>
            <p className="user__text"></p>
            <p className="user__text"></p>
            <p className="user__text"></p>
            <p className="user__text"></p>
            <p className="user__text"></p>
            <p className="user__text"></p>
            <p className="user__text"></p>



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
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './styles.scss';
import useSearch from '@/hooks/useSearch';

const UserData = () => {

    // const {query, batch} = useSearch()
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = () => {
        let lastUrlWithoutUsername = findLastUrlWithoutUsername(location);

        if (lastUrlWithoutUsername) {
            navigate(lastUrlWithoutUsername);
        } else {
            navigate('/');
        }
    };

    const findLastUrlWithoutUsername = (location: { pathname: string, search: string }) => {
        const path = location.pathname;
        const searchParams = new URLSearchParams(location.search);
        const hasUsernameParam = searchParams.has('username');

        if (!hasUsernameParam && !path.includes('/username')) {
            return path + location.search;
        }


        const params = new URLSearchParams(location.search);
        params.delete('username');


        const newSearch = params.toString() ? `?${params.toString()}` : '';


        const finalUrl = path + newSearch;
        console.log("urk", finalUrl, "path", path, "new", newSearch,)
        return finalUrl === path ? null : finalUrl;
    };

    return (
        <div className="testB">
            teststts
            <button className='close__btn' onClick={handleClick}>close</button>
        </div>
    );
};

export default UserData;
*/

/*import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './styles.scss';

const UserData = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = () => {
        let lastUrlWithoutUsername = findLastUrlWithoutUsername(location);

        if (lastUrlWithoutUsername) {
            navigate(lastUrlWithoutUsername);
        } else {
            navigate('/'); 
        }
    };

    const findLastUrlWithoutUsername = (location: { pathname: string, search: string }) => {
        const path = location.pathname;
        const searchParams = new URLSearchParams(location.search);

        
        const hasUsernameParam = searchParams.has('username');

        if (!hasUsernameParam && !path.includes('/username')) {
            return path;
        }

        const pathSegments = path.split('/');

        for (let i = pathSegments.length - 1; i >= 0; i--) {
            if (!pathSegments[i].includes('username')) {
                return pathSegments.slice(0, i + 1).join('/');
            }
        }

        return null;
    };

    return (
        <div className="testB">
            teststts
            <button className='close__btn' onClick={handleClick}>close</button>
        </div>
    );
};

export default UserData;
*/

/*import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './styles.scss';

const UserData = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = () => {
        let lastUrlWithoutUsername = findLastUrlWithoutUsername(location.pathname);

        if (lastUrlWithoutUsername) {
            navigate(lastUrlWithoutUsername);
        } else {
            navigate('/');  
        }
    };

    const findLastUrlWithoutUsername = (path:string) => {
        const pathSegments = path.split('/');

        for (let i = pathSegments.length - 1; i >= 0; i--) {
            if (!pathSegments[i].includes('username')) {
                return pathSegments.slice(0, i + 1).join('/');
            }
        }

        return null;
    };

    return (
        <div className="testB">
            teststts
            <button className='close__btn' onClick={handleClick}>close</button>
        </div>
    );
};

export default UserData;

*/

/*
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.scss';

const UserData = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(-1);  
    };

    return (
        <div className="testB">
            teststts
            <button className='close__btn' onClick={handleClick}>close</button>
        </div>
    );
};

export default UserData;
*/
