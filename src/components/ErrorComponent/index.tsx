import React, { useState } from 'react';
import './index.scss';

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
			<button className="throw__error" onClick={handleClick}>
				Throw Error
			</button>
		</div>
	);
};

export default ErrorComponent;
