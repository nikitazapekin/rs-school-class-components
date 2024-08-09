
 import "~/index.css"
import { useNavigate, useLocation } from "@remix-run/react";
import {Button} from "../Test/button"
const style = {
  color: 'red',
  fontSize: '20px',
};

const NotFound = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBackToHomepage = () => {
	console.log(111)
    navigate('/');
  };
  
  return (
    <div  className="not" data-testid="not-found">
      <p  style={style}  className="not__title">404</p>
      <p className="not__text">Page was not found</p>
      <button onClick={handleBackToHomepage} className="not__button">
        Back to homepage
      </button>


      <Button />
    </div>
  );
};

export default NotFound;

/*
import { ReducerType } from '@reduxjs/toolkit';
//import { Link } from '@remix-run/react';
import './index.scss';
 import React from 'react';
const NotFound = () => {
	 
	 
	return (
		<div className="not" data-testid="not-found">
			<p className="not__title">404</p>
			<p className="not__text">Page was not found</p>
	</div>
	);
};

export default NotFound;
*/
	/*
		<Link to="/">
		Back to homepage
		</Link>
		*/