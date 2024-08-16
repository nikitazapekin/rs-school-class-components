 
import "./index.scss";
import {schema} from "./schema"
import React, { useRef, useState } from 'react';
import { useSelector } from "react-redux";
import { coutrySelector } from "../../store/selectors/country.selector";
import { useAppDispatch } from "../../hooks/redux";
import { SetPersonalDataReactHookFormActionCreator } from "../../store/actions/setUserData";
import { useNavigate } from "react-router-dom";
import * as yup from 'yup';
import { SetFormErrorsActionCreator } from "../../store/actions/setFormErrors";

export interface RegisterInterface {
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


export interface RegisterErrorsInterface {
    name: string;
    email: string;
    password: string;
    age: string;
    gender: string;
    country: string;
    agreeToTerms: string;
    confirmPassword: string;
    avatar: string;   
    [key: string]: string;
}


const UncontrolledForm = () => {
 
    const navigate = useNavigate();
    const countries = useSelector(coutrySelector);
    const dispatch = useAppDispatch();

    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const confirmPasswordRef = useRef<HTMLInputElement>(null);
    const ageRef = useRef<HTMLInputElement>(null);
    const genderRef = useRef<HTMLSelectElement>(null);
    const countryRef = useRef<HTMLInputElement>(null);
    const agreeToTermsRef = useRef<HTMLInputElement>(null);
    const avatarRef = useRef<HTMLInputElement>(null);

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [value, setValueState] = useState<string>("");
    const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
const formErrors = useRef<RegisterErrorsInterface>(
{
    name: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    country: "",
    agreeToTerms:"",
    confirmPassword: "",
    avatar: "",
    
}
)
    const validateForm = async () => {
        const formData: RegisterInterface = {
            name: nameRef.current?.value || '',
            email: emailRef.current?.value || '',
            password: passwordRef.current?.value || '',
            confirmPassword: confirmPasswordRef.current?.value || '',
            age: ageRef.current?.valueAsNumber || 0,
            gender: genderRef.current?.value || '',
            country: countryRef.current?.value || '',
            agreeToTerms: agreeToTermsRef.current?.checked || false,
            avatar: avatarPreview || '',
        };

        try {
            await schema.validate(formData, { abortEarly: false, context: { countries } });
            return formData;
        } catch (validationErrors) {
         //   const newErrors: Record<string, string> = {};
         const newErrors:RegisterErrorsInterface= {
            name: "",
            email: "",
            password: "",
            age: "",
            gender: "",
            country: "",
            agreeToTerms:"",
            confirmPassword: "",
            avatar: "",
         };
            if (validationErrors instanceof yup.ValidationError) {
              
                validationErrors.inner.forEach((error) => {
                    if (error.path) {
                       // console.log("MESSAGE", error.message)
                        newErrors[error.path] = error.message;
                        console.log("ERR PATH", error.path)
                        formErrors.current[error.path] = error.message;

                     //   formErrors.current.[error.path] = error.message
                        }
                        });
                       
               //console.log("ERROR", JSON.stringify(validationErrors))
               console.log("ERRR", validationErrors.errors)
            }
            console.log("NEW", newErrors)
            dispatch(SetFormErrorsActionCreator(newErrors))
          //  setErrors(newErrors);
            return null;
        }
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = await validateForm();
        if (formData) {
            dispatch(SetPersonalDataReactHookFormActionCreator(formData));
            navigate("/");
        }
    };

    const onAvatarChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result as string;
                setAvatarPreview(base64String);
            };
            reader.readAsDataURL(file);
        }
    };
    console.log("FORM", formErrors)

    return (
        <form className="hform" onSubmit={handleSubmit}>
            <div className="hform__inner">
                <div className="hform__inner__background"></div>
                <h1 className="hform__title">Uncontrolled Form</h1>

                <div className="hform__field">
                    <h2 className="hform__field__title">Username</h2>
                    <p className="hform__error">{errors.name}</p>
                    <input ref={nameRef} type="text" className="hform__input" placeholder="Enter username..." />
                </div>

                <div className="hform__field">
                    <h2 className="hform__field__title">Age</h2>
                    <p className="hform__error">{errors.age}</p>
                    <input ref={ageRef} type="number" className="hform__input" placeholder="Enter age..." />
                </div>

                <div className="hform__field">
                    <h2 className="hform__field__title">Email</h2>
                    <p className="hform__error">{errors.email}</p>
                    <input ref={emailRef} type="email" className="hform__input" placeholder="Enter email..." />
                </div>

                <div className="hform__field">
                    <h2 className="hform__field__title">Password</h2>
                    <p className="hform__error">{errors.password}</p>
                    <input ref={passwordRef} type="password" className="hform__input" placeholder="Enter password..." />
                    <p className="hform__strength">Password Strength: </p>
                </div>

                <div className="hform__field">
                    <h2 className="hform__field__title">Confirm Password</h2>
                    <p className="hform__error">{errors.confirmPassword}</p>
                    <input ref={confirmPasswordRef} type="password" className="hform__input" placeholder="Confirm password..." />
                </div>

                <div className="hform__field">
                    <h2 className="hform__field__title">Country</h2>
                    <p className="hform__error">{errors.country}</p>
                    <input ref={countryRef} value={value} onChange={(e) => setValueState(e.target.value)} type="text" className="hform__input" placeholder="Enter country..." />
                    {countries
                        .filter(item => {
                            const searchTerm = value.toLowerCase();
                            const fullName = item.toLowerCase();

                            return searchTerm && fullName.startsWith(searchTerm) && fullName !== searchTerm;
                        })
                        .slice(0, 5)
                        .map((item, index) => (
                            <div onClick={() => setValueState(String(item))} className="dropdown-row" key={index}>
                                {item}
                            </div>
                        ))}
                </div>

                <div className="hform__field">
                    <h2 className="hform__field__title">Gender</h2>
                    <select ref={genderRef} className="hform__select">
                        <option value="">Select gender</option>
                        <option value="man">Man</option>
                        <option value="female">Female</option>
                    </select>
                    <p className="hform__error">{errors.gender}</p>
                </div>

                <div className="hform__field hform__field__checkbox">
                    <label htmlFor="agreeToTerms" className="hform__agree">
                        <input ref={agreeToTermsRef} type="checkbox" id="agreeToTerms" />
                        <p className="hform__agree__text">I agree to the terms of service</p>
                    </label>
                    <p className="hform__error">{errors.agreeToTerms}</p>
                </div>

                <div className="hform__field">
                    <h2 className="hform__field__title">Avatar</h2>
                    <input ref={avatarRef} type="file" className="hform__input" accept=".png, .jpeg" onChange={onAvatarChange} />
                    <p className="hform__error">{errors.avatar}</p>
                    {avatarPreview && <img src={avatarPreview} alt="Avatar Preview" className="hform__avatar-preview" />}
                </div>

                <div className="hform__field">
                    <input type="submit" className="hform__submit" />
                </div>
            </div>
            <button onClick={()=>console.log("CLIIIIIICK"+JSON.stringify(formErrors))}>cdd</button>
        ERR    {JSON.stringify(formErrors)}
        </form>
    );
};

export default UncontrolledForm;
 
/*
import "./index.scss";
import {schema} from "./schema"
import React, { useRef, useState } from 'react';
import { useSelector } from "react-redux";
import { coutrySelector } from "../../store/selectors/country.selector";
import { useAppDispatch } from "../../hooks/redux";
import { SetPersonalDataReactHookFormActionCreator } from "../../store/actions/setUserData";
import { useNavigate } from "react-router-dom";
import * as yup from 'yup';

export interface RegisterInterface {
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

const UncontrolledForm = () => {
    const navigate = useNavigate();
    const countries = useSelector(coutrySelector);
    const dispatch = useAppDispatch();

    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const confirmPasswordRef = useRef<HTMLInputElement>(null);
    const ageRef = useRef<HTMLInputElement>(null);
    const genderRef = useRef<HTMLSelectElement>(null);
    const countryRef = useRef<HTMLInputElement>(null);
    const agreeToTermsRef = useRef<HTMLInputElement>(null);
    const avatarRef = useRef<HTMLInputElement>(null);

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [value, setValueState] = useState<string>("");
    const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

    const validateForm = async () => {
        const formData: RegisterInterface = {
            name: nameRef.current?.value || '',
            email: emailRef.current?.value || '',
            password: passwordRef.current?.value || '',
            confirmPassword: confirmPasswordRef.current?.value || '',
            age: ageRef.current?.valueAsNumber || 0,
            gender: genderRef.current?.value || '',
            country: countryRef.current?.value || '',
            agreeToTerms: agreeToTermsRef.current?.checked || false,
            avatar: avatarPreview || '',
        };

        try {
            await schema.validate(formData, { abortEarly: false, context: { countries } });
            return formData;
        } catch (validationErrors) {
            const newErrors: Record<string, string> = {};
            if (validationErrors instanceof yup.ValidationError) {
                validationErrors.inner.forEach((error) => {
                    if (error.path) {
                        newErrors[error.path] = error.message;
                    }
                });
            }
            setErrors(newErrors);
            return null;
        }
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = await validateForm();
        if (formData) {
            dispatch(SetPersonalDataReactHookFormActionCreator(formData));
            navigate("/");
        }
    };

    const onAvatarChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result as string;
                setAvatarPreview(base64String);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <form className="hform" onSubmit={handleSubmit}>
            <div className="hform__inner">
                <div className="hform__inner__background"></div>
                <h1 className="hform__title">Uncontrolled Form</h1>

                <div className="hform__field">
                    <h2 className="hform__field__title">Username</h2>
                    <p className="hform__error">{errors.name}</p>
                    <input ref={nameRef} type="text" className="hform__input" placeholder="Enter username..." />
                </div>

                <div className="hform__field">
                    <h2 className="hform__field__title">Age</h2>
                    <p className="hform__error">{errors.age}</p>
                    <input ref={ageRef} type="number" className="hform__input" placeholder="Enter age..." />
                </div>

                <div className="hform__field">
                    <h2 className="hform__field__title">Email</h2>
                    <p className="hform__error">{errors.email}</p>
                    <input ref={emailRef} type="email" className="hform__input" placeholder="Enter email..." />
                </div>

                <div className="hform__field">
                    <h2 className="hform__field__title">Password</h2>
                    <p className="hform__error">{errors.password}</p>
                    <input ref={passwordRef} type="password" className="hform__input" placeholder="Enter password..." />
                    <p className="hform__strength">Password Strength: </p>
                </div>

                <div className="hform__field">
                    <h2 className="hform__field__title">Confirm Password</h2>
                    <p className="hform__error">{errors.confirmPassword}</p>
                    <input ref={confirmPasswordRef} type="password" className="hform__input" placeholder="Confirm password..." />
                </div>

                <div className="hform__field">
                    <h2 className="hform__field__title">Country</h2>
                    <p className="hform__error">{errors.country}</p>
                    <input ref={countryRef} value={value} onChange={(e) => setValueState(e.target.value)} type="text" className="hform__input" placeholder="Enter country..." />
                    {countries
                        .filter(item => {
                            const searchTerm = value.toLowerCase();
                            const fullName = item.toLowerCase();

                            return searchTerm && fullName.startsWith(searchTerm) && fullName !== searchTerm;
                        })
                        .slice(0, 5)
                        .map((item, index) => (
                            <div onClick={() => setValueState(String(item))} className="dropdown-row" key={index}>
                                {item}
                            </div>
                        ))}
                </div>

                <div className="hform__field">
                    <h2 className="hform__field__title">Gender</h2>
                    <select ref={genderRef} className="hform__select">
                        <option value="">Select gender</option>
                        <option value="man">Man</option>
                        <option value="female">Female</option>
                    </select>
                    <p className="hform__error">{errors.gender}</p>
                </div>

                <div className="hform__field hform__field__checkbox">
                    <label htmlFor="agreeToTerms" className="hform__agree">
                        <input ref={agreeToTermsRef} type="checkbox" id="agreeToTerms" />
                        <p className="hform__agree__text">I agree to the terms of service</p>
                    </label>
                    <p className="hform__error">{errors.agreeToTerms}</p>
                </div>

                <div className="hform__field">
                    <h2 className="hform__field__title">Avatar</h2>
                    <input ref={avatarRef} type="file" className="hform__input" accept=".png, .jpeg" onChange={onAvatarChange} />
                    <p className="hform__error">{errors.avatar}</p>
                    {avatarPreview && <img src={avatarPreview} alt="Avatar Preview" className="hform__avatar-preview" />}
                </div>

                <div className="hform__field">
                    <input type="submit" className="hform__submit" />
                </div>
            </div>
        </form>
    );
};

export default UncontrolledForm;
*/