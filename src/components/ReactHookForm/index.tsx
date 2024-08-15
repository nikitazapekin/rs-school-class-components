import "./index.scss";
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';
import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import { useSelector } from "react-redux";
//import { countrySelector } from "../../store/selectors/country.selector";
import { coutrySelector } from "../../store/selectors/country.selector";
export interface RegisterInterface {
    username: string;
    email: string;
    password: string;
    age: number;
    gender: string;
    country: string;
    agreeToTerms: boolean;
    confirmPassword: string;
}

const ReactHookForm = () => {
    const countries = useSelector(coutrySelector)
   // const countries = useSelector(countrySelector); // Получаем список стран
    const {
        control,
        register,
        handleSubmit,
        reset,
        setValue, // Используем setValue для обновления поля
        watch,
        formState: { errors },
    } = useForm<RegisterInterface>({
        resolver: yupResolver(schema),
        context: { countries }, // Передаем список стран в контекст
    });

    const [value, setValueState] = useState<string>("");

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValueState(event.target.value);
    };

    const onSearch = (searchTerm: string) => {
        setValue('country', searchTerm, { shouldValidate: true }); // Устанавливаем значение и запускаем валидацию
        setValueState(searchTerm); // Обновляем состояние локального поиска
        console.log("search", searchTerm);
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
        console.log({ data });
        reset();
    };

    return (
        <>
            <form className="hform" onSubmit={handleSubmit(submitForm)}>
                <div className="hform__inner">
                    <div className="hform__inner__background"></div>
                    <h1 className="hform__title">
                        React hook form
                    </h1>
                    <div className="hform__field">
                        <div className="hform__field__preview">
                            <h2 className="hform__field__title">
                                Username
                            </h2>
                            <p className="hform__error">{errors.username?.message}</p>
                        </div>
                        <input  {...register('username')} type="text" className="hform__input"
                            placeholder="Enter username..."
                        />
                    </div>

                    <div className="hform__field">
                        <div className="hform__field__preview">
                            <h2 className="hform__field__title">
                                Age
                            </h2>
                            <p className="hform__error">{errors.age?.message}</p>
                        </div>
                        <input {...register('age')} type="number" className="hform__input"
                            placeholder="Enter age..."
                        />
                    </div>

                    <div className="hform__field">
                        <div className="hform__field__preview">
                            <h2 className="hform__field__title">
                                Email
                            </h2>
                            <p className="hform__error">{errors.email?.message}</p>
                        </div>
                        <input {...register('email')} type="email" className="hform__input"
                            placeholder="Enter email..."
                        />
                    </div>

                    <div className="hform__field">
                        <div className="hform__field__preview">
                            <h2 className="hform__field__title">
                                Password
                            </h2>
                            <p className="hform__error">{errors.password?.message}</p>
                        </div>
                        <input {...register('password')} type="password" className="hform__input"
                            placeholder="Enter password..."
                        />
                        <p className="hform__strength">
                            Password Strength: {getPasswordStrength(passwordValue)}
                        </p>
                    </div>

                    <div className="hform__field">
                        <div className="hform__field__preview">
                            <h2 className="hform__field__title">
                                Confirm Password
                            </h2>
                            <p className="hform__error">{errors.confirmPassword?.message}</p>
                        </div>
                        <input {...register('confirmPassword')} type="password" className="hform__input"
                            placeholder="Confirm password..."
                        />
                    </div>

                    <div className="hform__field">
                        <div className="hform__field__preview">
                            <h2 className="hform__field__title">
                                Country
                            </h2>
                            <p className="hform__error">{errors.country?.message}</p>
                        </div>
                        <input
                            value={value}
                            onChange={onChange}
                            type="text" className="hform__input"
                            placeholder="Enter country..."
                        />
                        {countries
                            .filter(item => {
                                const searchTerm = value.toLowerCase();
                                const fullName = item.toLowerCase();

                                return (
                                    searchTerm &&
                                    fullName.startsWith(searchTerm) &&
                                    fullName !== searchTerm
                                );
                            })
                            .slice(0, 5)
                            .map((item, index) => (
                                <div
                                    onClick={() => onSearch(String(item))}
                                    className="dropdown-row"
                                    key={index}
                                >
                                    {item}
                                </div>
                            ))}
                    </div>

                    <div className="hform__field">
                        <h2 className="hform__field__title">
                            Gender
                        </h2>
                        <select {...register('gender')} className="hform__select">
                            <option value="">Select gender</option>
                            <option value="man">Man</option>
                            <option value="female">Female</option>
                        </select>
                        <p className="hform__error">{errors.gender?.message}</p>
                    </div>

                    <div className="hform__field hform__field__checkbox">
                        <label htmlFor="agreeToTerms" className="hform__agree">
                            <input {...register('agreeToTerms')} type="checkbox" id="agreeToTerms" />
                            <p className="hform__agree__text">
                                I agree to the terms of service
                            </p>
                        </label>
                        <p className="hform__error">{errors.agreeToTerms?.message}</p>
                    </div>

                    <div className="hform__field">
                        <input type="submit" className="hform__submit" />
                    </div>
                </div>
            </form>
        </>
    );
};

export default ReactHookForm;



/*

import "./index.scss";
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';
import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { coutrySelector } from "../../store/selectors/country.selector";

export interface RegisterInterface {
    username: string;
    email: string;
    password: string;
    age: number;
    gender: string;
    country: string;
    agreeToTerms: boolean;
    confirmPassword: string;
}

const ReactHookForm = () => {
    const countries = useSelector(coutrySelector)
  //  const countries = useSelector(countrySelector); // Получаем список стран
    const {
        control,
        register,
        handleSubmit,
        reset,
        setValue, // Используем setValue для обновления поля
        watch,
        formState: { errors },
    } = useForm<RegisterInterface>({
        resolver: yupResolver(schema),
        context: { countries }, // Передаем список стран в контекст
    });

    const [value, setValueState] = useState<string>("");

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValueState(event.target.value);
    };

    const onSearch = (searchTerm: string) => {
        setValue('country', searchTerm, { shouldValidate: true }); // Устанавливаем значение и запускаем валидацию
        setValueState(searchTerm); // Обновляем состояние локального поиска
        console.log("search", searchTerm);
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
        console.log({ data });
        reset();
    };

    return (
        <>
            <form className="hform" onSubmit={handleSubmit(submitForm)}>
                <div className="hform__inner">
                    <div className="hform__inner__background"></div>
                    <h1 className="hform__title">
                        React hook form
                    </h1>
                    <div className="hform__field">
                        <div className="hform__field__preview">
                            <h2 className="hform__field__title">
                                Username
                            </h2>
                            <p className="hform__error">{errors.username?.message}</p>
                        </div>
                        <input  {...register('username')} type="text" className="hform__input"
                            placeholder="Enter username..."
                        />
                    </div>

                    <div className="hform__field">
                        <div className="hform__field__preview">
                            <h2 className="hform__field__title">
                                Age
                            </h2>
                            <p className="hform__error">{errors.age?.message}</p>
                        </div>
                        <input {...register('age')} type="number" className="hform__input"
                            placeholder="Enter age..."
                        />
                    </div>

                    <div className="hform__field">
                        <div className="hform__field__preview">
                            <h2 className="hform__field__title">
                                Email
                            </h2>
                            <p className="hform__error">{errors.email?.message}</p>
                        </div>
                        <input {...register('email')} type="email" className="hform__input"
                            placeholder="Enter email..."
                        />
                    </div>

                    <div className="hform__field">
                        <div className="hform__field__preview">
                            <h2 className="hform__field__title">
                                Password
                            </h2>
                            <p className="hform__error">{errors.password?.message}</p>
                        </div>
                        <input {...register('password')} type="password" className="hform__input"
                            placeholder="Enter password..."
                        />
                        <p className="hform__strength">
                            Password Strength: {getPasswordStrength(passwordValue)}
                        </p>
                    </div>

                    <div className="hform__field">
                        <div className="hform__field__preview">
                            <h2 className="hform__field__title">
                                Confirm Password
                            </h2>
                            <p className="hform__error">{errors.confirmPassword?.message}</p>
                        </div>
                        <input {...register('confirmPassword')} type="password" className="hform__input"
                            placeholder="Confirm password..."
                        />
                    </div>

                    <div className="hform__field">
                        <div className="hform__field__preview">
                            <h2 className="hform__field__title">
                                Country
                            </h2>
                            <p className="hform__error">{errors.country?.message}</p>
                        </div>
                        <input
                            value={value}
                            onChange={onChange}
                            type="text" className="hform__input"
                            placeholder="Enter country..."
                        />
                        {countries
                            .filter(item => {
                                const searchTerm = value.toLowerCase();
                                const el = item.toLowerCase();
                                return searchTerm && el.startsWith(searchTerm);
                            })
                            .map((item, index) => (
                                <div
                                    key={index}
                                    onClick={() => onSearch(String(item))}
                                >
                                    {item}
                                </div>
                            ))}
                    </div>

                    <div className="hform__field">
                        <h2 className="hform__field__title">
                            Your gender
                        </h2>
                        <select {...register('gender')} className="hform__gender">
                            <option value="man">Man</option>
                            <option value="female">Female</option>
                        </select>
                        <p className="hform__error">{errors.gender?.message}</p>
                    </div>

                    <div className="hform__field hform__field__checkbox">
                        <label htmlFor="agreeToTerms" className="hform__agree">
                            <input {...register('agreeToTerms')} type="checkbox" id="agreeToTerms" />
                            <p className="hform__agree__text">
                                I agree to the terms of service
                            </p>
                        </label>
                        <p className="hform__error">{errors.agreeToTerms?.message}</p>
                    </div>

                    <div className="hform__field">
                        <input type="submit" className="hform__submit" />
                    </div>
                </div>
            </form>
        </>
    );
};

export default ReactHookForm;
*/

/*

import "./index.scss";
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema';
import { useForm, Controller } from 'react-hook-form';
import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { coutrySelector } from "../../store/selectors/country.selector";
 
export interface RegisterInterface {
    username: string;
    email: string;
    password: string;
    age: number;
    gender: string;
    country: string;
    agreeToTerms: boolean;

    confirmPassword: string;
   // avatar: string | null | undefined | File
  // avatar: string | null;
}

const ReactHookForm = () => {
    const {
        control,
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm<RegisterInterface>({
        resolver: yupResolver(schema),
    });

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
        console.log({ data });
        reset();
    };
const countries = useSelector(coutrySelector)

const [value, setValue] = useState<string>("");

const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
};

 
const onSearch = (searchTerm: string) => {
    console.log("search", searchTerm);
};

 
    return (
        <>
            <form className="hform" onSubmit={handleSubmit(submitForm)}>
                <div className="hform__inner">
                    <div className="hform__inner__background"></div>
                    <h1 className="hform__title">
                        React hook form
                    </h1>
                    <div className="hform__field">
                        <div className="hform__field__preview">
                            <h2 className="hform__field__title">
                                Username
                            </h2>
                            <p className="hform__error">{errors.username?.message}</p>
                        </div>
                        <input  {...register('username')} type="text" className="hform__input"
                            placeholder="Enter username..."
                        />
                    </div>

                    <div className="hform__field">
                        <div className="hform__field__preview">
                            <h2 className="hform__field__title">
                                Age
                            </h2>
                            <p className="hform__error">{errors.age?.message}</p>
                        </div>
                        <input {...register('age')} type="number" className="hform__input"
                            placeholder="Enter age..."
                        />
                    </div>

                    <div className="hform__field">
                        <div className="hform__field__preview">
                            <h2 className="hform__field__title">
                                Email
                            </h2>
                            <p className="hform__error">{errors.email?.message}</p>
                        </div>
                        <input {...register('email')} type="email" className="hform__input"
                            placeholder="Enter email..."
                        />
                    </div>

                    <div className="hform__field">
                        <div className="hform__field__preview">
                            <h2 className="hform__field__title">
                                Password
                            </h2>
                            <p className="hform__error">{errors.password?.message}</p>
                        </div>
                        <input {...register('password')} type="password" className="hform__input"
                            placeholder="Enter password..."
                        />
                        <p className="hform__strength">
                            Password Strength: {getPasswordStrength(passwordValue)}
                        </p>
                    </div>






                    <div className="hform__field">
                        <div className="hform__field__preview">
                            <h2 className="hform__field__title">
                                Confirm Password
                            </h2>
                            <p className="hform__error">{errors.confirmPassword?.message}</p>
                        </div>
                        <input {...register('confirmPassword')} type="password" className="hform__input"
                            placeholder="Confirm password..."
                        />
                    </div>




                    <div className="hform__field">
                        <div className="hform__field__preview">
                            <h2 className="hform__field__title">
                              Country
                            </h2>
                            <p className="hform__error">{errors.password?.message}</p>
                        </div>
                        <input  
                          value={value}
                          onChange={onChange}
                        type="text" className="hform__input"
                            placeholder="Enter country..."
                        />
                            {countries
                        .filter(item => {
                            const searchTerm = value.toLowerCase();
                            const el = item.toLowerCase();
                            return searchTerm && el.startsWith(searchTerm);
                        })
                        .map((item, index) => (
                            <div
                                key={index}  
                                onClick={() => onSearch(String(item))}  
                            >
                                {item}
                            </div>
                        ))}
                    </div>



                    <div className="hform__field">
                        <h2 className="hform__field__title">
                            Your gender
                        </h2>
                        <select {...register('gender')} className="hform__gender">
                            <option value="man">Man</option>
                            <option value="female">Female</option>
                        </select>
                        <p className="hform__error">{errors.gender?.message}</p>
                    </div>

                    <div className="hform__field">
                        <h2 className="hform__field__title">
                            Your country
                        </h2>
                        <select {...register('country')} className="hform__country">
                            <option value="USA">USA</option>
                            <option value="Canada">Canada</option>
                        </select>
                        <p className="hform__error">{errors.country?.message}</p>
                    </div>


                    <div className="hform__field">
                        <h2 className="hform__field__title">
                            You agree to the processing of personal data?
                        </h2>
                        <input {...register('agreeToTerms')} type="checkbox" className="hform__checkbox" />
                        <p className="hform__error">{errors.agreeToTerms?.message}</p>
                    </div>

                    <button className="hform__submit">
                        Submit
                    </button>
                </div>
            </form>
        </>
    );
}

export default ReactHookForm;
*/
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