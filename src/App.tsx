import { Component, ChangeEvent } from 'react';
import Header from './components/Header';
import List from './components/List';
import { getUserData } from './API';
import { ErrorBoundary } from './components/ErrorBoundary';
import './global.scss';
import './normalize.scss';
import ErrorComponent from './components/ErrorComponent';
import { AppState  } from './types';
class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      typedValue: '',
      users: null,
      limit: 5,
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
        getUserData(this.state.limit, this.state.offset, storedPrompt).then((res) => {
          this.setState({ users: res });
        });
      });
    } else {
      this.setState({ typedValue: '' }, () => {
        getUserData(this.state.limit, this.state.offset, '').then((res) => {
          this.setState({ users: res });
        });
      });
    }
  }
  handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const newValue = event.target.value;
    localStorage.setItem('prompt', this.state.typedValue);
    this.setState({ typedValue: newValue, offset: 1 });
  }
  handleClick = () => {
    this.setState({ isFetching: true });
    getUserData(this.state.limit, this.state.offset, this.state.typedValue).then((res) => {
      localStorage.setItem('prompt', this.state.typedValue);
      this.setState({ users: res, isFetching: false });
    });
  };
  handleNext = () => {
    window.scrollTo(0, 0);
    this.setState(
      (prevState) => ({
        offset: prevState.offset + 1,
      }),
      () => {
        this.handleClick();
      },
    );
  };

  handlePrev = () => {
    window.scrollTo(0, 0);
    this.setState(
      (prevState) => ({
        offset: prevState.offset - 1,
      }),
      () => {
        this.handleClick();
      },
    );
  };

  render() {
    return (
      <>
        <ErrorBoundary>
          <div className="container">
            <Header handleInputChange={this.handleInputChange} handleClick={this.handleClick} />
            <List
              typedValue={this.state.typedValue}
              users={this.state.users}
              handleNext={this.handleNext}
              handlePrev={this.handlePrev}
              isFetching={this.state.isFetching}
              total={this.state.users?.total_count ? this.state.users?.total_count : 0}
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
 