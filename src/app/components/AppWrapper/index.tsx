"use client"
import { useSelector } from "react-redux";
import App from "../App";
import { getUsersSelector } from "../../../redux/selectors/getUsersSelector";
import React from "react";
const AppWrapper = () => {
    const users = useSelector(getUsersSelector)
    return ( 
        <>
        <App users={users}/>
        </>
     );
}
 
export default AppWrapper;

