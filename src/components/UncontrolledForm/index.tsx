import "./index.scss";
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';
import { useForm } from 'react-hook-form';
import React, { useRef } from 'react';
import { useSelector } from "react-redux";
import { coutrySelector } from "../../store/selectors/country.selector";
import { useAppDispatch } from "../../hooks/redux";
import { SetPersonalDataReactHookFormActionCreator } from "../../store/actions/setUserData";
import { useNavigate } from "react-router-dom";

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

    const avatarPreviewRef = useRef<HTMLImageElement>(null);
    const countryInputRef = useRef<HTMLInputElement>(null);
    const errorRef = useRef<{ [key: string]: HTMLParagraphElement | null }>({});
    const fileInputRef = useRef<HTMLInputElement>(null);

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        watch,
        formState: { errors },
    } = useForm<RegisterInterface>({
        resolver: yupResolver(schema),
        context: { countries },
    });

    const onSearch = (searchTerm: string) => {
        setValue('country', searchTerm, { shouldValidate: true });
        if (countryInputRef.current) {
            countryInputRef.current.value = searchTerm;
        }
    };

    const onAvatarChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result as string;
                setValue('avatar', base64String, { shouldValidate: true });  
                if (avatarPreviewRef.current) {
                    avatarPreviewRef.current.src = base64String;
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const passwordValue = watch('password', '');

    const getPasswordStrength = (password: string) => {
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /\d/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        const strengthCount = [hasUpperCase, hasLowerCase, hasNumber, hasSpecialChar].filter(Boolean).length;

        if (strengthCount === 4) return 'Strong';
        if (strengthCount === 3) return 'Medium';
        if (strengthCount > 0) return 'Weak';

        return 'Very Weak';
    };

    const submitForm = (data: RegisterInterface) => {
        console.log("A"+JSON.stringify(data.avatar));
        console.log({ data });
        dispatch(SetPersonalDataReactHookFormActionCreator(data))
        navigate("/")
        reset();
        if (avatarPreviewRef.current) {
            avatarPreviewRef.current.src = '';
        }
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    return (
        <>
            <form className="hform" onSubmit={handleSubmit(submitForm)}>
                <div className="hform__inner">
                    <div className="hform__inner__background"></div>
                    <h1 className="hform__title">Uncontrolled form</h1>

                    <div className="hform__field">
                        <div className="hform__field__preview">
                            <h2 className="hform__field__title">Username</h2>
                            <p ref={(el) => errorRef.current['name'] = el} className="hform__error">{errors.name?.message}</p>
                        </div>
                        <input {...register('name')} type="text" className="hform__input" placeholder="Enter username..." />
                    </div>

                    <div className="hform__field">
                        <div className="hform__field__preview">
                            <h2 className="hform__field__title">Age</h2>
                            <p ref={(el) => errorRef.current['age'] = el} className="hform__error">{errors.age?.message}</p>
                        </div>
                        <input {...register('age')} type="number" className="hform__input" placeholder="Enter age..." />
                    </div>

                    <div className="hform__field">
                        <div className="hform__field__preview">
                            <h2 className="hform__field__title">Email</h2>
                            <p ref={(el) => errorRef.current['email'] = el} className="hform__error">{errors.email?.message}</p>
                        </div>
                        <input {...register('email')} type="email" className="hform__input" placeholder="Enter email..." />
                    </div>

                    <div className="hform__field">
                        <div className="hform__field__preview">
                            <h2 className="hform__field__title">Password</h2>
                            <p ref={(el) => errorRef.current['password'] = el} className="hform__error">{errors.password?.message}</p>
                        </div>
                        <input {...register('password')} type="password" className="hform__input" placeholder="Enter password..." />
                        <p className="hform__strength">Password Strength: {getPasswordStrength(passwordValue)}</p>
                    </div>

                    <div className="hform__field">
                        <div className="hform__field__preview">
                            <h2 className="hform__field__title">Confirm Password</h2>
                            <p ref={(el) => errorRef.current['confirmPassword'] = el} className="hform__error">{errors.confirmPassword?.message}</p>
                        </div>
                        <input {...register('confirmPassword')} type="password" className="hform__input" placeholder="Confirm password..." />
                    </div>

                    <div className="hform__field">
                        <div className="hform__field__preview">
                            <h2 className="hform__field__title">Country</h2>
                            <p ref={(el) => errorRef.current['country'] = el} className="hform__error">{errors.country?.message}</p>
                        </div>
                        <input ref={countryInputRef} type="text" className="hform__input" placeholder="Enter country..." />
                        {countries.filter(item => {
                                const searchTerm = countryInputRef.current?.value.toLowerCase() || '';
                                const fullName = item.toLowerCase();

                                return searchTerm && fullName.startsWith(searchTerm) && fullName !== searchTerm;
                            }).map((item, index) => (
                                <div onClick={() => onSearch(String(item))} className="dropdown-row" key={index}>
                                    {item}
                                </div>
                            ))}
                    </div>

                    <div className="hform__field">
                        <h2 className="hform__field__title">Gender</h2>
                        <select {...register('gender')} className="hform__select">
                            <option value="">Select gender</option>
                            <option value="man">Man</option>
                            <option value="female">Female</option>
                        </select>
                        <p ref={(el) => errorRef.current['gender'] = el} className="hform__error">{errors.gender?.message}</p>
                    </div>

                    <div className="hform__field hform__field__checkbox">
                        <label htmlFor="agreeToTerms" className="hform__agree">
                            <input {...register('agreeToTerms')} type="checkbox" id="agreeToTerms" />
                            <p className="hform__agree__text">I agree to the terms of service</p>
                        </label>
                        <p ref={(el) => errorRef.current['agreeToTerms'] = el} className="hform__error">{errors.agreeToTerms?.message}</p>
                    </div>

                    <div className="hform__field">
                        <h2 className="hform__field__title">Avatar</h2>
                        <input ref={fileInputRef} type="file" className="hform__input" accept=".png, .jpeg" onChange={onAvatarChange} />
                        <p ref={(el) => errorRef.current['avatar'] = el} className="hform__error">{errors.avatar?.message}</p>
                        {avatarPreviewRef.current && <img ref={avatarPreviewRef} alt="Avatar Preview" className="hform__avatar-preview" />}
                    </div>

                    <div className="hform__field">
                        <input type="submit" className="hform__submit" />
                    </div>
            
                </div>

            </form>
        </>
    );
};

export default UncontrolledForm;







/*
import "./index.scss";
import React, { useRef } from 'react';
import { useSelector } from "react-redux";
import { coutrySelector } from "../../store/selectors/country.selector";
import { useAppDispatch } from "../../hooks/redux";
import { SetPersonalDataReactHookFormActionCreator } from "../../store/actions/setUserData";
import { useNavigate } from "react-router-dom";
import * as yup from 'yup';
import { SetFormErrorsActionCreator } from "../../store/actions/setFormErrors";
import { schema } from './schema';  

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
    
    const formRef = useRef<HTMLFormElement>(null);
    const errorsRef = useRef<Record<string, string>>({});

const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formRef.current) {
        const formData = new FormData(formRef.current);
        const rawObject = Object.fromEntries(formData);
        const data: RegisterInterface = {
            name: rawObject.name as string,
            email: rawObject.email as string,
            password: rawObject.password as string,
            confirmPassword: rawObject.confirmPassword as string,
            age: Number(rawObject.age), 
            gender: rawObject.gender as string,
            country: rawObject.country as string,
            agreeToTerms: rawObject.agreeToTerms === 'on',  
            avatar: rawObject.avatar instanceof File ? URL.createObjectURL(rawObject.avatar) : '',  
        };

        try {
            await schema.validate(data, { abortEarly: false, context: { countries } });
            console.log('Validated data:', data);
            
            dispatch(SetPersonalDataReactHookFormActionCreator(data));
         
        } catch (validationErrors) {
            if (validationErrors instanceof yup.ValidationError) {
                const newErrors: Record<string, string> = {};
                validationErrors.inner.forEach(error => {
                    if (error.path) {
                        newErrors[error.path] = error.message;
                    }
                });
                errorsRef.current = newErrors;
         console.log(errorsRef)
     //    dispatch(SetFormErrorsActionCreator(newErrors))
            }
        }
    }
};

    const onAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result as string;
                const imgElement = formRef.current?.querySelector('.hform__avatar-preview') as HTMLImageElement;
                if (imgElement) {
                    imgElement.src = base64String;
                }
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <form className="hform" ref={formRef} onSubmit={handleSubmit} noValidate>
            <div className="hform__inner">
                <div className="hform__inner__background"></div>
                <h1 className="hform__title">Uncontrolled Form</h1>

                <div className="hform__field">
                    <h2 className="hform__field__title">Username</h2>
                    <p className="hform__error">{errorsRef.current.name}</p>
                    <input name="name" type="text" className="hform__input" placeholder="Enter username..." />
                </div>

                <div className="hform__field">
                    <h2 className="hform__field__title">Age</h2>
                    <p className="hform__error">{errorsRef.current.age}</p>
                    <input name="age" type="number" className="hform__input" placeholder="Enter age..." />
                </div>

                <div className="hform__field">
                    <h2 className="hform__field__title">Email</h2>
                    <p className="hform__error">{errorsRef.current.email}</p>
                    <input name="email" type="email" className="hform__input" placeholder="Enter email..." />
                </div>

                <div className="hform__field">
                    <h2 className="hform__field__title">Password</h2>
                    <p className="hform__error">{errorsRef.current.password}</p>
                    <input name="password" type="password" className="hform__input" placeholder="Enter password..." />
                </div>

                <div className="hform__field">
                    <h2 className="hform__field__title">Confirm Password</h2>
                    <p className="hform__error">{errorsRef.current.confirmPassword}</p>
                    <input name="confirmPassword" type="password" className="hform__input" placeholder="Confirm password..." />
                </div>

                <div className="hform__field">
                    <h2 className="hform__field__title">Country</h2>
                    <p className="hform__error">{errorsRef.current.country}</p>
                    <input name="country" type="text" className="hform__input" placeholder="Enter country..." />
                  
                </div>

                <div className="hform__field">
                    <h2 className="hform__field__title">Gender</h2>
                    <select name="gender" className="hform__select">
                        <option value="">Select gender</option>
                        <option value="man">Man</option>
                        <option value="female">Female</option>
                    </select>
                    <p className="hform__error">{errorsRef.current.gender}</p>
                </div>

                <div className="hform__field hform__field__checkbox">
                    <label htmlFor="agreeToTerms" className="hform__agree">
                        <input name="agreeToTerms" type="checkbox" id="agreeToTerms" />
                        <p className="hform__agree__text">I agree to the terms of service</p>
                    </label>
                    <p className="hform__error">{errorsRef.current.agreeToTerms}</p>
                </div>

                <div className="hform__field">
                    <h2 className="hform__field__title">Avatar</h2>
                    <input name="avatar" type="file" className="hform__input" accept=".png, .jpeg" onChange={onAvatarChange} />
                    <p className="hform__error">{errorsRef.current.avatar}</p>
                    <img alt="Avatar Preview" className="hform__avatar-preview" />
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


/* 
import "./index.scss";
import {schema} from "./schema"
import React, {  useState } from 'react';
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

   
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [value, setValueState] = useState<string>("");
    const [avatarPreview, setAvatarPreview] = useState<string | null>(null); 
    
const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
event.preventDefault()
const formData = new FormData(event.target) 
const obj = Object.fromEntries(formData)
console.log(obj)

}
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
                    <input type="text" className="hform__input" placeholder="Enter username..." />
                </div>

                <div className="hform__field">
                    <h2 className="hform__field__title">Age</h2>
                    <p className="hform__error">{errors.age}</p>
                    <input   type="number" className="hform__input" placeholder="Enter age..." />
                </div>

                <div className="hform__field">
                    <h2 className="hform__field__title">Email</h2>
                    <p className="hform__error">{errors.email}</p>
                    <input  type="email" className="hform__input" placeholder="Enter email..." />
                </div>

                <div className="hform__field">
                    <h2 className="hform__field__title">Password</h2>
                    <p className="hform__error">{errors.password}</p>
                    <input   type="password" className="hform__input" placeholder="Enter password..." />
                    <p className="hform__strength">Password Strength: </p>
                </div>

                <div className="hform__field">
                    <h2 className="hform__field__title">Confirm Password</h2>
                    <p className="hform__error">{errors.confirmPassword}</p>
                    <input   type="password" className="hform__input" placeholder="Confirm password..." />
                </div>

                <div className="hform__field">
                    <h2 className="hform__field__title">Country</h2>
                    <p className="hform__error">{errors.country}</p>
                    <input  value={value} onChange={(e) => setValueState(e.target.value)} type="text" className="hform__input" placeholder="Enter country..." />
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
                    <select className="hform__select">
                        <option value="">Select gender</option>
                        <option value="man">Man</option>
                        <option value="female">Female</option>
                    </select>
                    <p className="hform__error">{errors.gender}</p>
                </div>

                <div className="hform__field hform__field__checkbox">
                    <label htmlFor="agreeToTerms" className="hform__agree">
                        <input  type="checkbox" id="agreeToTerms" />
                        <p className="hform__agree__text">I agree to the terms of service</p>
                    </label>
                    <p className="hform__error">{errors.agreeToTerms}</p>
                </div>

                <div className="hform__field">
                    <h2 className="hform__field__title">Avatar</h2>
                    <input  type="file" className="hform__input" accept=".png, .jpeg" onChange={onAvatarChange} />
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