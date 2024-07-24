/*
//import React from 'react'; 
import './index.scss';
import { ErrorBoundaryProps, ErrorBoundaryState } from './types';
import { PureComponent } from 'react';

// Ensure the ErrorBoundary class is using PureComponent from React
export class ErrorBoundary extends PureComponent<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = {
            error: false,
        };
    }
    static getDerivedStateFromError(): ErrorBoundaryState {
		return { error: true };
		}
		componentDidCatch(error: Error) {
			console.log('Error caught by ErrorBoundary:', error);
        this.setState({ error: true });
    }

    handleClose = () => {
        this.setState({ error: false });
    };

    render() {
        if (this.state.error) {
            return (
                <div className="error">
                    <div className="error__overlay" onClick={this.handleClose} data-testid="error__overlay"></div>
                    <div className="error__inner">
                        <p className="error__title">Something went wrong</p>
                        <button className="error__btn" onClick={this.handleClose} data-testid="error__btn">
                            Close
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
*/


import './index.scss';
import { ErrorBoundaryProps, ErrorBoundaryState } from './types';
import { Component } from 'react';

//export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
	export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = {
			error: false,
		};
	}
	static getDerivedStateFromError(): ErrorBoundaryState {
		return { error: true };
		}
	 
	componentDidCatch(error: Error) {
		console.log('Error caught by ErrorBoundary:', error);
		this.setState({ error: true });
	}
	
	handleClose = () => {
		this.setState({ error: false });
	};

	render() {
		if (this.state.error) {
			return (
				<div className="error">
					<div className="error__overlay" onClick={this.handleClose} data-testid="error__overlay"></div>
					<div className="error__inner">
						<p className="error__title">Something went wrong</p>
						<button className="error__btn" onClick={this.handleClose} data-testid="error__btn">
							Close
						</button>
					</div>
				</div>
			);
			}
			
		return this.props.children;
	}
}
/*
*/


/* 
import  { Component, ReactNode } from 'react';
import './index.scss';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  error: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      error: false,
    };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { error: true };
  }

  componentDidCatch(error: Error) {
    console.error('Error caught by ErrorBoundary:', error);
  }

  handleClose = () => {
    this.setState({ error: false });
  };

  render() {
    if (this.state.error) {
      return (
        <div className="error">
          <div className="error__overlay" onClick={this.handleClose} data-testid="error__overlay"></div>
          <div className="error__inner">
            <p className="error__title">Something went wrong</p>
            <button className="error__btn" onClick={this.handleClose} data-testid="error__btn">
              Close
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
*/







/* 
import { Component, ReactNode } from 'react';
import './index.scss';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  error: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      error: false,
    };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { error: true };
  }

  componentDidCatch(error: Error) {
    console.error('Error caught by ErrorBoundary:', error);
  }

  handleClose = () => {
    this.setState({ error: false });
  };

  render() {
    if (this.state.error) {
      return (
        <div className="error">
          <div className="error__overlay" onClick={this.handleClose} data-testid="error__overlay"></div>
          <div className="error__inner">
            <p className="error__title">Something went wrong</p>
            <button className="error__btn" onClick={this.handleClose} data-testid="error__btn">
              Close
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}


*/
/*
import './index.scss';
import { ErrorBoundaryProps, ErrorBoundaryState } from './types';
import { Component } from 'react';

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = {
			error: false,
		};
	}

	static getDerivedStateFromError(): ErrorBoundaryState {
		return { error: true };
	}
	componentDidCatch() {
//	componentDidCatch(error: Error) {
	//	console.log('Error caught by ErrorBoundary:', error);
		this.setState({ error: true });
	}

	handleClose = () => {
		this.setState({ error: false });
	};

	render() {
		if (this.state.error) {
			return (
				<div className="error">
					<div className="error__overlay" onClick={this.handleClose} data-testid="error__overlay"></div>
					<div className="error__inner">
						<p className="error__title">Something went wrong</p>
						<button className="error__btn" onClick={this.handleClose} data-testid="error__btn">
							Close
						</button>
					</div>
				</div>
			);
		}

		return this.props.children;
	}
}
*/