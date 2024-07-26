import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import List from './index.tsx';
import * as reduxHooks from 'react-redux';
import { render } from '@testing-library/react';

jest.mock('react-redux');
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
}));

const mockStore = configureStore([]);
const initialState = {
    params: { offset: 0, query: '' },
    users: [],
    isLoading: false,
};
const store = mockStore(initialState);

describe("List Component", () => {
    it('renders correctly', () => {
        const mockDispatchFn = jest.fn();
        jest.spyOn(reduxHooks, 'useDispatch').mockReturnValue(mockDispatchFn);
        jest.spyOn(reduxHooks, 'useSelector').mockImplementation(selector => selector(initialState));

        const component = render(
            <Provider store={store}>
                <MemoryRouter>
                    <List />
                </MemoryRouter>
            </Provider>
        );

        expect(component).toMatchSnapshot();
    });
});




/*
import { MemoryRouter } from "react-router-dom";
import List from "./index.tsx";
import * as reduxHooks from "react-redux";
import { render, 
    //fireEvent, screen 

} from "@testing-library/react";
//import { AddElementToStorage } from "@/store/action-creators/addElementToStorage.ts";
//import { useNavigate } from "react-router-dom";

jest.mock('react-redux');
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
}));
const mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch');

describe("Card Component", () => {
    it('renders correctly', () => {
        const mockDispatchFn = jest.fn();
        mockedDispatch.mockReturnValue(mockDispatchFn);

        const component = render(
            <MemoryRouter>
               <List />
            </MemoryRouter>
        );

        expect(component).toMatchSnapshot();
    })
    });
*/
/*

import { MemoryRouter } from "react-router-dom";
import Card from "./index.tsx";
import * as reduxHooks from "react-redux";
import { render, fireEvent, screen } from "@testing-library/react";
import { AddElementToStorage } from "@/store/action-creators/addElementToStorage.ts";
import { useNavigate } from "react-router-dom";

jest.mock('react-redux');
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
}));
const mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch');

describe("Card Component", () => {
    it('renders correctly', () => {
        const mockDispatchFn = jest.fn();
        mockedDispatch.mockReturnValue(mockDispatchFn);

        const component = render(
            <MemoryRouter>
                <Card
                    user={{
                        id: 1,
                        login: "Nik",
                        node_id: "1",
                        avatar_url: "dcdsc",
                        gravatar_id: "kjj",
                        url: "lmd",
                        html_url: "ldm",
                        followers_url: "ldmv",
                        following_url: "nkdv",
                        gists_url: "ndls",
                        starred_url: "cmk",
                        subscriptions_url: "kekc",
                        organizations_url: "kdc",
                        repos_url: "mld",
                        events_url: "kmd",
                        received_events_url: "dclm",
                        type: "dlcm",
                        site_admin: false,
                        score: 22
                    }}
                />
            </MemoryRouter>
        );

        expect(component).toMatchSnapshot();
    });

    it('testing redux', () => {
        const dispatch = jest.fn();
        mockedDispatch.mockReturnValue(dispatch);

        render(
            <MemoryRouter>
                <Card
                    user={{
                        id: 1,
                        login: "Nik",
                        node_id: "1",
                        avatar_url: "dcdsc",
                        gravatar_id: "kjj",
                        url: "lmd",
                        html_url: "ldm",
                        followers_url: "ldmv",
                        following_url: "nkdv",
                        gists_url: "ndls",
                        starred_url: "cmk",
                        subscriptions_url: "kekc",
                        organizations_url: "kdc",
                        repos_url: "mld",
                        events_url: "kmd",
                        received_events_url: "dclm",
                        type: "dlcm",
                        site_admin: false,
                        score: 22
                    }}
                />
            </MemoryRouter>
        );

        expect(screen.getByRole('checkbox')).toBeInTheDocument();
        fireEvent.click(screen.getByRole('checkbox'));

        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).not.toHaveBeenCalledWith(AddElementToStorage({
            id: 1,
            login: "Nik",
            node_id: "1",
            avatar_url: "dcdsc",
            gravatar_id: "kjj",
            url: "lmd",
            html_url: "ldm",
            followers_url: "ldmv",
            following_url: "nkdv",
            gists_url: "ndls",
            starred_url: "cmk",
            subscriptions_url: "kekc",
            organizations_url: "kdc",
            repos_url: "mld",
            events_url: "kmd",
            received_events_url: "dclm",
            type: "dlcm",
            site_admin: false,
            score: 22
        }));
    });

    it('handles card click correctly', () => {
        const navigate = jest.fn();
        (useNavigate as jest.Mock).mockReturnValue(navigate);

        render(
            <MemoryRouter>
                <Card
                    user={{
                        id: 1,
                        login: "Nik",
                        node_id: "1",
                        avatar_url: "dcdsc",
                        gravatar_id: "kjj",
                        url: "lmd",
                        html_url: "ldm",
                        followers_url: "ldmv",
                        following_url: "nkdv",
                        gists_url: "ndls",
                        starred_url: "cmk",
                        subscriptions_url: "kekc",
                        organizations_url: "kdc",
                        repos_url: "mld",
                        events_url: "kmd",
                        received_events_url: "dclm",
                        type: "dlcm",
                        site_admin: false,
                        score: 22
                    }}
                />
            </MemoryRouter>
        );

        fireEvent.click(screen.getByText('Show details'));

        expect(navigate).toHaveBeenCalledWith('/main/userdata?username=Nik');
    });
});


 
*/