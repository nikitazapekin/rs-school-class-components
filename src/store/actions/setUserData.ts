import { setPersonalDataReactHookForm } from "../slices/appSlice";
import { AppDispatch } from "../store";
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

export const SetPersonalDataReactHookFormActionCreator =
  (data: FormTypes) => (dispatch: AppDispatch) => {
    dispatch(setPersonalDataReactHookForm(data));
  };
