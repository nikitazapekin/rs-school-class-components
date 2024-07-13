import axios from 'axios';
import { fetchUserDataAdvanced } from './index';
jest.mock('axios');

describe('getData', () => {
	let response: any;
	beforeEach(() => {
		response = {
			data: [
				{
					login: 'sindresorhus',
					id: 170270,
					node_id: 'MDQ6VXNlcjE3MDI3MA==',
					avatar_url: 'https://avatars.githubusercontent.com/u/170270?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/sindresorhus',
					html_url: 'https://github.com/sindresorhus',
					followers_url: 'https://api.github.com/users/sindresorhus/followers',
					following_url: 'https://api.github.com/users/sindresorhus/following{/other_user}',
					gists_url: 'https://api.github.com/users/sindresorhus/gists{/gist_id}',
					starred_url: 'https://api.github.com/users/sindresorhus/starred{/owner}{/repo}',
					subscriptions_url: 'https://api.github.com/users/sindresorhus/subscriptions',
					organizations_url: 'https://api.github.com/users/sindresorhus/orgs',
					repos_url: 'https://api.github.com/users/sindresorhus/repos',
					events_url: 'https://api.github.com/users/sindresorhus/events{/privacy}',
					received_events_url: 'https://api.github.com/users/sindresorhus/received_events',
					type: 'User',
					site_admin: false,
					score: 1.0,
				},
				{
					login: 'JakeWharton',
					id: 66577,
					node_id: 'MDQ6VXNlcjY2NTc3',
					avatar_url: 'https://avatars.githubusercontent.com/u/66577?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/JakeWharton',
					html_url: 'https://github.com/JakeWharton',
					followers_url: 'https://api.github.com/users/JakeWharton/followers',
					following_url: 'https://api.github.com/users/JakeWharton/following{/other_user}',
					gists_url: 'https://api.github.com/users/JakeWharton/gists{/gist_id}',
					starred_url: 'https://api.github.com/users/JakeWharton/starred{/owner}{/repo}',
					subscriptions_url: 'https://api.github.com/users/JakeWharton/subscriptions',
					organizations_url: 'https://api.github.com/users/JakeWharton/orgs',
					repos_url: 'https://api.github.com/users/JakeWharton/repos',
					events_url: 'https://api.github.com/users/JakeWharton/events{/privacy}',
					received_events_url: 'https://api.github.com/users/JakeWharton/received_events',
					type: 'User',
					site_admin: false,
					score: 1.0,
				},
				{
					login: 'rafaballerini',
					id: 54322854,
					node_id: 'MDQ6VXNlcjU0MzIyODU0',
					avatar_url: 'https://avatars.githubusercontent.com/u/54322854?v=4',
					gravatar_id: '',
					url: 'https://api.github.com/users/rafaballerini',
					html_url: 'https://github.com/rafaballerini',
					followers_url: 'https://api.github.com/users/rafaballerini/followers',
					following_url: 'https://api.github.com/users/rafaballerini/following{/other_user}',
					gists_url: 'https://api.github.com/users/rafaballerini/gists{/gist_id}',
					starred_url: 'https://api.github.com/users/rafaballerini/starred{/owner}{/repo}',
					subscriptions_url: 'https://api.github.com/users/rafaballerini/subscriptions',
					organizations_url: 'https://api.github.com/users/rafaballerini/orgs',
					repos_url: 'https://api.github.com/users/rafaballerini/repos',
					events_url: 'https://api.github.com/users/rafaballerini/events{/privacy}',
					received_events_url: 'https://api.github.com/users/rafaballerini/received_events',
					type: 'User',
					site_admin: false,
					score: 1.0,
				},
			],
		};
	});

	test('Корректное значение', async () => {
		(axios.get as jest.Mock).mockReturnValue(Promise.resolve(response));
		let url: string = `https://api.github.com/search/users?q=type:user&page=1&per_page=3`;
		const data = await fetchUserDataAdvanced(url);
		expect(axios.get).toBeCalledTimes(1);
		expect(data).toMatchSnapshot();
	});
});

/*
import axios from "axios";
import {fetchUserDataAdvanced} from "./index.ts"
jest.mock('axios')

describe('getData', () => {
    let response;
    beforeEach(() => {
        response = {
            data: [
                {
                    "login": "sindresorhus",
                    "id": 170270,
                    "node_id": "MDQ6VXNlcjE3MDI3MA==",
                    "avatar_url": "https://avatars.githubusercontent.com/u/170270?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/sindresorhus",
                    "html_url": "https://github.com/sindresorhus",
                    "followers_url": "https://api.github.com/users/sindresorhus/followers",
                    "following_url": "https://api.github.com/users/sindresorhus/following{/other_user}",
                    "gists_url": "https://api.github.com/users/sindresorhus/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/sindresorhus/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/sindresorhus/subscriptions",
                    "organizations_url": "https://api.github.com/users/sindresorhus/orgs",
                    "repos_url": "https://api.github.com/users/sindresorhus/repos",
                    "events_url": "https://api.github.com/users/sindresorhus/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/sindresorhus/received_events",
                    "type": "User",
                    "site_admin": false,
                    "score": 1.0
                },
                {
                    "login": "JakeWharton",
                    "id": 66577,
                    "node_id": "MDQ6VXNlcjY2NTc3",
                    "avatar_url": "https://avatars.githubusercontent.com/u/66577?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/JakeWharton",
                    "html_url": "https://github.com/JakeWharton",
                    "followers_url": "https://api.github.com/users/JakeWharton/followers",
                    "following_url": "https://api.github.com/users/JakeWharton/following{/other_user}",
                    "gists_url": "https://api.github.com/users/JakeWharton/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/JakeWharton/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/JakeWharton/subscriptions",
                    "organizations_url": "https://api.github.com/users/JakeWharton/orgs",
                    "repos_url": "https://api.github.com/users/JakeWharton/repos",
                    "events_url": "https://api.github.com/users/JakeWharton/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/JakeWharton/received_events",
                    "type": "User",
                    "site_admin": false,
                    "score": 1.0
                },
                {
                    "login": "rafaballerini",
                    "id": 54322854,
                    "node_id": "MDQ6VXNlcjU0MzIyODU0",
                    "avatar_url": "https://avatars.githubusercontent.com/u/54322854?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/rafaballerini",
                    "html_url": "https://github.com/rafaballerini",
                    "followers_url": "https://api.github.com/users/rafaballerini/followers",
                    "following_url": "https://api.github.com/users/rafaballerini/following{/other_user}",
                    "gists_url": "https://api.github.com/users/rafaballerini/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/rafaballerini/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/rafaballerini/subscriptions",
                    "organizations_url": "https://api.github.com/users/rafaballerini/orgs",
                    "repos_url": "https://api.github.com/users/rafaballerini/repos",
                    "events_url": "https://api.github.com/users/rafaballerini/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/rafaballerini/received_events",
                    "type": "User",
                    "site_admin": false,
                    "score": 1.0
                },
            ]
        }
    })
    test('Корректное значение', async () => {
        axios.get.mockReturnValue(response);
     //   const data = await getData()
     url = `https://api.github.com/search/users?q=type:user&page=1&per_page=3`;
     const data = await fetchUserDataAdvanced()
        expect(axios.get).toBeCalledTimes(1);
      //  expect(data).toEqual(['1', '2', 3])
        expect(data).toMatchSnapshot()
    })
})
*/

/*const getData = require('./getData');
const axios = require('axios')

jest.mock('axios')

describe('getData', () => {
    let response;
    beforeEach(() => {
        response = {
            data: [
                {
                    "id": 1,
                    "name": "Leanne Graham",
                    "username": "Bret",
                    "email": "Sincere@april.biz",
                    "address": {
                        "street": "Kulas Light",
                        "suite": "Apt. 556",
                        "city": "Gwenborough",
                        "zipcode": "92998-3874",
                        "geo": {
                            "lat": "-37.3159",
                            "lng": "81.1496"
                        }
                    },
                    "phone": "1-770-736-8031 x56442",
                    "website": "hildegard.org",
                    "company": {
                        "name": "Romaguera-Crona",
                        "catchPhrase": "Multi-layered client-server neural-net",
                        "bs": "harness real-time e-markets"
                    }
                },
                {
                    "id": 2,
                    "name": "Ervin Howell",
                    "username": "Antonette",
                    "email": "Shanna@melissa.tv",
                    "address": {
                        "street": "Victor Plains",
                        "suite": "Suite 879",
                        "city": "Wisokyburgh",
                        "zipcode": "90566-7771",
                        "geo": {
                            "lat": "-43.9509",
                            "lng": "-34.4618"
                        }
                    },
                    "phone": "010-692-6593 x09125",
                    "website": "anastasia.net",
                    "company": {
                        "name": "Deckow-Crist",
                        "catchPhrase": "Proactive didactic contingency",
                        "bs": "synergize scalable supply-chains"
                    }
                },
                {
                    "id": 3,
                    "name": "Clementine Bauch",
                    "username": "Samantha",
                    "email": "Nathan@yesenia.net",
                    "address": {
                        "street": "Douglas Extension",
                        "suite": "Suite 847",
                        "city": "McKenziehaven",
                        "zipcode": "59590-4157",
                        "geo": {
                            "lat": "-68.6102",
                            "lng": "-47.0653"
                        }
                    },
                    "phone": "1-463-123-4447",
                    "website": "ramiro.info",
                    "company": {
                        "name": "Romaguera-Jacobson",
                        "catchPhrase": "Face to face bifurcated interface",
                        "bs": "e-enable strategic applications"
                    }
                },
            ]
        }
    })
    test('Корректное значение', async () => {
        axios.get.mockReturnValue(response);
        const data = await getData()
        expect(axios.get).toBeCalledTimes(1);
        expect(data).toEqual(['1', '2', 3])
        expect(data).toMatchSnapshot()
    })
})
*/
