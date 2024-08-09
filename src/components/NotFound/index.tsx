import { Link } from '@remix-run/react';
import './index.scss';
 import React from 'react';
const NotFound = () => {
	 
	 
	return (
		<div className="not">
			<p className="not__title">404</p>
			<p className="not__text">Page was not found</p>
	<Link to="/">
	Back to homepage
	</Link>
		</div>
	);
};

export default NotFound;
