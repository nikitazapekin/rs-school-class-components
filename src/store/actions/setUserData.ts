import {setPersonalDataReactHookForm}  from "../slices/appSlice"
import { AppDispatch } from '../store';
interface FormTypes {
    name: string;
    email: string;
    password: string;
    age: number;
    gender: string;
    country: string;
    agreeToTerms: boolean;
    confirmPassword: string;
    avatar: string;   

    }
   

export const SetPersonalDataReactHookFormActionCreator = (data: FormTypes) => (dispatch: AppDispatch) => {
//dispatch(setPersonalDataReactHookForm(data.data))
/*
dispatch(setPersonalDataReactHookForm(
    {
        name: data.name,
        age: data.age,

    }
))*/
console.log("DAT", data)
dispatch(setPersonalDataReactHookForm(data))
//dispatch(setPersonalDataReactHookForm({data: data}))
/*
dispatch(setPersonalDataReactHookForm({
    name: data.name,
age: data.age,
email: data.email,
password: data.password,
confirmPassword: data.confirmPassword,
gender: data.gender,
avatar: data.avatar,
isAccept: data.isAccept,
country: data.country
}))*/
/*

*/
}
/*
import { setAddToStoredElement } from '../slices/selectedElementsSlice';
//import { UserItem } from '../types';
export const AddElementToStorage = (user: UserItem) => (dispatch: AppDispatch) => {
	dispatch(setAddToStoredElement(user));
};
*/