

import { render} from '@testing-library/react';
import Details from "./page"
 
describe('MyApp Component', () => {
 
  it('renders an async component with searchParams', async () => {
  
    render(await Details({ searchParams: {query: 'type:user', page: '1', user: "d"} }));
  
  });
    })
 

/*

// Details.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import Details from "./page";
import '@testing-library/jest-dom';

const mock = new MockAdapter(axios);

describe("Details component", () => {
  it("renders user data correctly", async () => {
    const user = "testuser";
    const userData = {
      login: "testuser",
      id: 1,
      node_id: "MDQ6VXNlcjE=",
      avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/testuser",
      html_url: "https://github.com/testuser",
      followers_url: "https://api.github.com/users/testuser/followers",
      following_url: "https://api.github.com/users/testuser/following{/other_user}",
      gists_url: "https://api.github.com/users/testuser/gists{/gist_id}",
      starred_url: "https://api.github.com/users/testuser/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/testuser/subscriptions",
      organizations_url: "https://api.github.com/users/testuser/orgs",
      repos_url: "https://api.github.com/users/testuser/repos",
      events_url: "https://api.github.com/users/testuser/events{/privacy}",
      received_events_url: "https://api.github.com/users/testuser/received_events",
      type: "User",
      site_admin: false,
      score: 1.0,
    };

    mock.onGet(`https://api.github.com/users/${user}`).reply(200, userData);

    // @ts-ignore
    render(<Details searchParams={{ user }} />);

    expect(await screen.findByText(/testuser/i)).toBeInTheDocument();
    expect(await screen.findByText(/https:\/\/github.com\/testuser/i)).toBeInTheDocument();
  });
});
*/