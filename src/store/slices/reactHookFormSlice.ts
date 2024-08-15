/*
name (validate for first uppercased letter)
age (should be number, no negative values)
email (validate for email)
2 passwords (should match, display the password strength: 1 number, 1 uppercased letter, 1 lowercased letter, 1 special character)
gender (you can use radio buttons or select control)
accept Terms and Conditions agreement (T&C, can be a checkbox)
input control to upload picture (validate size and extension, allow png jpeg, save in redux store as base64)
autocomplete control to select country (all countries should be stored in the Redux store) Form should contain labels, which should be connected with inputs (look at htmlFor)
*/
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
enum Gender {
man="Man",
woman="Woman",
none=""
}
 interface ReactHookTypes {
name: string,
age: number,
email: string,
firstPassword: string,
secondPassword: string,
gender: Gender,
avatar: string,
isAccept: boolean,
country: string
 }
const initialState: ReactHookTypes = {
    name: "",
    age: 0,
    email: "",
    firstPassword: "",
    secondPassword: "",
    gender: Gender.none,
    avatar: "",
    isAccept: false,
    country: ""
};
const appSlicee = createSlice({
	name: 'app',
	initialState,
	reducers: {
		setLoading(state, action: PayloadAction<boolean>) {
			console.log('LOOO', action.payload);
		 
		},
        setFormFields(state, action: PayloadAction<ReactHookTypes>) {
            
        }
	 
	},
});
export const {
	setLoading,
 
} = appSlicee.actions;
export default appSlicee.reducer;