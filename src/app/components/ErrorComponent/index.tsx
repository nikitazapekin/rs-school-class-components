import React, { useState } from 'react';
import styles from "./index.module.scss";

const ErrorComponent: React.FC = () => {
	const [counter, setCounter] = useState<number>(0);

	const handleClick = () => {
		setCounter(counter + 1);
	};

	if (counter === 1) {
		throw new Error('I crashed!!');
	}

	return (
		<div>
			<button className={styles.throw__error} onClick={handleClick} data-testid="throw__error">
				Throw Error
			</button>
		</div>
	);
};

export default ErrorComponent;
