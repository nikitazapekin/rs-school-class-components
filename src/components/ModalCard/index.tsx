import React from 'react';
import { clearStoredElementsByIdActionCreator } from "@/store/action-creators/removeStoredElementByIdActionCreator";
import "./index.scss";
import { useAppDispatch } from "@/hooks/redux";
import { CSVLink } from 'react-csv';

interface UserItem {
    user: {
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
}

const ModalCard = ({ user }: UserItem) => {
    const dispatch = useAppDispatch();

    const handleRemove = () => {
        dispatch(clearStoredElementsByIdActionCreator(user.id));
    };

    const csvHeaders = [
        { label: 'Login', key: 'login' },
        { label: 'Id', key: 'id' },
        { label: 'Node ID', key: 'node_id' },
        { label: 'Avatar URL', key: 'avatar_url' },
        { label: 'Gravatar ID', key: 'gravatar_id' },
        { label: 'URL', key: 'url' },
        { label: 'HTML URL', key: 'html_url' },
        { label: 'Followers URL', key: 'followers_url' },
        { label: 'Following URL', key: 'following_url' },
        { label: 'Gists URL', key: 'gists_url' },
        { label: 'Starred URL', key: 'starred_url' },
        { label: 'Subscriptions URL', key: 'subscriptions_url' },
        { label: 'Organizations URL', key: 'organizations_url' },
        { label: 'Repos URL', key: 'repos_url' },
        { label: 'Events URL', key: 'events_url' },
        { label: 'Received Events URL', key: 'received_events_url' },
        { label: 'Type', key: 'type' },
        { label: 'Site Admin', key: 'site_admin' },
        { label: 'Score', key: 'score' }
    ];

    const csvData = [user];

    return (
        <div className="modal__card">
            <div className="modal__card__inner">
                <img src={user.avatar_url} alt="avatar" className="modal__card__avatar" />
                <p className="modal__card__title">
                    {user.login}
                </p>
                <div className="modal__card__btns">
                    <CSVLink data={csvData} headers={csvHeaders} filename={`${user.login}_details.csv`}>
                        <button className="modal__card__btn">Download</button>
                    </CSVLink>
                    <button className="modal__card__btn modal__card__clear" onClick={handleRemove}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ModalCard;





/*
import { clearStoredElementsByIdActionCreator } from "@/store/action-creators/removeStoredElementByIdActionCreator";
import "./index.scss"
import { useAppDispatch } from "@/hooks/redux";
import { CSVLink } from 'react-csv';
interface UserItem {
    user: {

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
}

const ModalCard = ({ user }: UserItem) => {

    const dispatch = useAppDispatch()
    const handleRemove = () => {
        dispatch(clearStoredElementsByIdActionCreator(user.id))
     
    }


    const csvHeaders = [
     
         {label: 'Login', key: 'login'},
    {label: 'Id', key: 'id'},
    {label: 'Node_id',  key: "node_id"},

    ];

 
    const csvData = [
        { username: 'user1', telephone: '123-456-7890', id: '1' },
        { username: 'user2', telephone: '098-765-4321', id: '2' }
    ];

    return (
        <div className="modal__card">
            <div className="modal__card__inner">
                <img src={user.html_url} alt="avatar" className="modal__card__avatar" />
                <p className="modal__card__title">
                    {user.login}
                </p>
                <div className="modal__card__btns">
                    <button className="modal__card__btn">Download</button>
                    <button className="modal__card__btn modal__card__clear" onClick={handleRemove}>Delete</button>
                    <CSVLink data={csvData} headers={csvHeaders} filename={"users.csv"}>Download me</CSVLink>
                </div>
            </div>
        </div>
    );
}
export default ModalCard;
 
*/

/*

import  { ThemeProvider } from './components/ThemeContext';
import Background from './components/Background';
 import ErrorComponent from './components/ErrorComponent';
import Modal from './components/Modal';
//import trigger
const App = () => {
    const storedUsers = useSelector(storedUsersSelector);

    const { handleInputChange, handleClick, isFetching, users, handleNext, handlePrev, query } = useSearch();
    //const [triggerGetPokemonByName, { data, error, isLoading }] = useLazyGetPokemonByNameQuery();

    const handleButtonClick = () => {
     //   triggerGetPokemonByName('bulbasaur');
    };

    useEffect(() => {
        console.log(storedUsers);
    }, [storedUsers]);

    const csvHeaders = [
        { label: 'Username', key: 'username' },
        { label: 'Telephone', key: 'telephone' },
        { label: 'ID', key: 'id' }
    ];

 
    const csvData = [
        { username: 'user1', telephone: '123-456-7890', id: '1' },
        { username: 'user2', telephone: '098-765-4321', id: '2' }
    ];

    return (
        <>
            <ErrorBoundary>
                <ThemeProvider>
                    <div className="container">
                        <Header handleClick={handleClick} handleInputChange={handleInputChange} />
                        <List
                            handleNext={handleNext}
                            handlePrev={handlePrev}
                            users={users}
                            isFetching={isFetching}
                            typedValue={query}
                        />
                        {storedUsers.length > 0 && (
                            <StoredUsersButton />
                        )}
                        <Modal />
                        <ErrorBoundary>
                            <ErrorComponent />
                        </ErrorBoundary>
                    </div>
                    <button onClick={handleButtonClick}>Fetch Pokemon</button>
                    <Background />
                    <CSVLink data={csvData} headers={csvHeaders} filename={"users.csv"}>Download me</CSVLink>
                </ThemeProvider>
            </ErrorBoundary>
        </>
    );
};

export default App;
*/