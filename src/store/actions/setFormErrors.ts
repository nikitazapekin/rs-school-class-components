import { setFormErrors } from "../slices/appSlice";
import { AppDispatch } from "../store";
interface FormTypesErrors {
    name: string;
    email: string;
    password: string;
    age: string;
    gender: string;
    country: string;
    agreeToTerms: string;
    confirmPassword: string;
    avatar: string;

}

export const SetFormErrorsActionCreator = (data: FormTypesErrors) => (dispatch: AppDispatch) => {
    dispatch(setFormErrors(data))
} 