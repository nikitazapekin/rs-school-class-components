 
import { ErrorBoundaryProps, ErrorBoundaryState } from './types';
import { Component } from 'react';
import styles from "./index.module.scss";

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
				<div className={styles.error}>
					<div className={styles.error__overlay} onClick={this.handleClose} data-testid="error__overlay"></div>
					<div className={styles.error__inner}>
						<p className={styles.error__title}>Something went wrong</p>
						<button className={styles.error__btn} onClick={this.handleClose} data-testid="error__btn">
							Close
						</button>
					</div>
				</div>
			);
		}

		return this.props.children;
	}
}
