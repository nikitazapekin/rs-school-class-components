/*import  { Component } from 'react';

interface ErrorComponentState {
  hasError: boolean;
}

class ErrorComponent extends Component<{}, ErrorComponentState> {
  constructor(props: {}) {
    super(props);
    this.state = { hasError: false };
  }

  handleClick = () => {
    this.setState({ hasError: true });
  };

  render() {
    if (this.state.hasError) {
      throw new Error('I crashed!!');
    }

    return <button  className="throw__error" onClick={this.handleClick}>Crash</button>;
  }
}

export default ErrorComponent;
*/

import { Component } from 'react';
import './index.scss';
interface State {
	counter: number;
}

class ErrorComponent extends Component<{}, State> {
	constructor(props: {}) {
		super(props);
		this.state = { counter: 0 };
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState(({ counter }) => ({
			counter: counter + 1,
		}));
	}

	render() {
		if (this.state.counter === 1) {
			throw new Error('I crashed!!');
		}
		return (
			<div>
				<button className="throw__error" onClick={this.handleClick}>
					Throw Error
				</button>
			</div>
		);
	}
}

export default ErrorComponent;
/*
 */
