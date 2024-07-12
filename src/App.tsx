//import { Component, ChangeEvent } from 'react';
import Header from './components/Header';
import List from './components/List';
import { ErrorBoundary } from './components/ErrorBoundary';
import './global.scss';
import './normalize.scss';
import ErrorComponent from './components/ErrorComponent';
import useSearch from './hooks/useSearch';

const App = () => {
	const { handleInputChange, handleClick, isFetching, users, handleNext, handlePrev, query } = useSearch();

	return (
		<>
			<ErrorBoundary>
				<div className="container">
					<Header handleClick={handleClick} handleInputChange={handleInputChange} />

					<List
						handleNext={handleNext}
						handlePrev={handlePrev}
						users={users}
						isFetching={isFetching}
						typedValue={query}
					/>
					<ErrorBoundary>
						<ErrorComponent />
					</ErrorBoundary>
				</div>

				<button // onClick={getCurrentPage}
				>
					{' '}
					sdsd
				</button>
			</ErrorBoundary>
		</>
	);
};

export default App;

/*
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
interface AppState {
  typedValue: string;
  users: UserItem[];
  limit: number;
  offset: number;
  amountOfPages: number;
  isFetching: boolean;
}
class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      typedValue: '',
      users: [],
      limit: 10,
      offset: 1,
      amountOfPages: 0,
      isFetching: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }
  componentDidMount() {
    const storedPrompt = localStorage.getItem('prompt');
    if (storedPrompt) {
      this.setState({ typedValue: storedPrompt }, () => {
        this.fetchUserData(storedPrompt);
      });
    } else {
      this.fetchUserData('');
    }
  }
  handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const newValue = event.target.value;
    localStorage.setItem('prompt', newValue);
    this.setState({ typedValue: newValue, offset: 1 });
  }

  handleClick = () => {
    this.setState({ isFetching: true }, () => {
      this.fetchUserData(this.state.typedValue);
    });
  };

  handleNext = () => {
    window.scrollTo(0, 0);
    this.setState(
      (prevState) => ({
        offset: prevState.offset + 1,
      }),
      this.handleClick,
    );
  };

  handlePrev = () => {
    window.scrollTo(0, 0);
    this.setState(
      (prevState) => ({
        offset: prevState.offset - 1,
      }),
      this.handleClick,
    );
  };

  async fetchUserData(prompt: string) {
    try {
      const res = await getUserData(this.state.limit, this.state.offset, prompt);
      this.setState({ users: res, isFetching: false });
    } catch (error) {
      console.error('Error fetching user data:', error);
      this.setState({ isFetching: false });
    }
  }

  render() {
    const { users } = this.state;

    return (
      <>
        <ErrorBoundary>
          <div className="container">
            <Header handleInputChange={this.handleInputChange} handleClick={this.handleClick} />

            <List
              typedValue={this.state.typedValue}
              users={users}
              handleNext={this.handleNext}
              handlePrev={this.handlePrev}
              isFetching={this.state.isFetching}
            />
            <ErrorBoundary>
              <ErrorComponent />
            </ErrorBoundary>
          </div>
        </ErrorBoundary>
      </>
    );
  }
}

export default App;
*/
