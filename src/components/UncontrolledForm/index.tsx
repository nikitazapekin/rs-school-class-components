import "./index.scss";
import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { coutrySelector } from "../../store/selectors/country.selector";
import { useAppDispatch } from "../../hooks/redux";
import { SetPersonalDataReactHookFormActionCreator } from "../../store/actions/setUserData";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import * as yup from "yup";
import { schema } from "./schema"
import { getPasswordStrength } from "../../helpers/passwordStrength";
const UncontrolledForm = () => {
    const navigate = useNavigate();
    const countries = useSelector(coutrySelector);
    const dispatch = useAppDispatch();
    const avatarPreviewRef = useRef<HTMLImageElement>(null);

    const nameRef = useRef<HTMLInputElement>(null);
    const ageRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const confirmPasswordRef = useRef<HTMLInputElement>(null);
    const countryRef = useRef<HTMLInputElement>(null);
    const genderRef = useRef<HTMLSelectElement>(null);
    const agreeToTermsRef = useRef<HTMLInputElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const errorRef = useRef<{ [key: string]: HTMLParagraphElement | null }>({});
    const [password, setPassword] = useState<string>("")

    const validateForm = async () => {
        const formData = {
            name: nameRef.current?.value || "",
            age: ageRef.current?.value || "",
            email: emailRef.current?.value || "",
            password: passwordRef.current?.value || "",
            confirmPassword: confirmPasswordRef.current?.value || "",
            country: countryRef.current?.value || "",
            gender: genderRef.current?.value || "",
            agreeToTerms: agreeToTermsRef.current?.checked || false,
            avatar: avatarPreviewRef.current?.src || "",
        };

        try {
            await schema.validate(formData, { abortEarly: false });
            return formData;
        } catch (errors) {
            if (errors instanceof yup.ValidationError) {
                errors.inner.forEach((error) => {
                    if (error.path && errorRef.current[error.path]) {
                        errorRef.current[error.path]!.innerText = error.message || "";
                    }
                });
            }
            return null;
        }
    };

    const onAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result as string;
                if (avatarPreviewRef.current) {
                    avatarPreviewRef.current.src = base64String;
                }
            };
            reader.readAsDataURL(file);
        }
    };
    const submitForm = async (event: React.FormEvent) => {
        event.preventDefault();

        Object.keys(errorRef.current).forEach(key => {
            if (errorRef.current[key]) {
                errorRef.current[key]!.innerText = "";
            }
        });

        const validatedData = await validateForm();
        if (validatedData) {

            dispatch(SetPersonalDataReactHookFormActionCreator(
                {

                    name: validatedData.name,
                    age: Number(validatedData.age),
                    email: validatedData.email,
                    password: validatedData.password,
                    confirmPassword: validatedData.confirmPassword,
                    country: validatedData.country,
                    gender: validatedData.gender,
                    agreeToTerms: Boolean(validatedData.agreeToTerms),
                    avatar: validatedData.avatar
                })
            )

            navigate("/");
            if (avatarPreviewRef.current) {
                avatarPreviewRef.current.src = "";
            }
            if (fileInputRef.current) {
                fileInputRef.current.value = "";
            }
        }
    };
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }
    return (
        <form className="hform" onSubmit={submitForm}>
            <div className="hform__inner">
                <div className="hform__inner__background"></div>
                <h1 className="hform__title">Uncontrolled form</h1>

                <div className="hform__field">
                    <div className="hform__field__preview">
                        <h2 className="hform__field__title">Username</h2>
                        <p ref={error => (errorRef.current["name"] = error)} className="hform__error" />
                    </div>
                    <input
                        ref={nameRef}
                        type="text"
                        className="hform__input"
                        placeholder="Enter username..."
                    />
                </div>

                <div className="hform__field">
                    <div className="hform__field__preview">
                        <h2 className="hform__field__title">Age</h2>
                        <p ref={error => (errorRef.current["age"] = error)} className="hform__error" />
                    </div>
                    <input
                        ref={ageRef}
                        type="number"
                        className="hform__input"
                        placeholder="Enter age..."
                    />
                </div>

                <div className="hform__field">
                    <div className="hform__field__preview">
                        <h2 className="hform__field__title">Email</h2>
                        <p ref={error => (errorRef.current["email"] = error)} className="hform__error" />
                    </div>
                    <input
                        ref={emailRef}
                        type="email"
                        className="hform__input"
                        placeholder="Enter email..."
                    />
                </div>

                <div className="hform__field">
                    <div className="hform__field__preview">
                        <h2 className="hform__field__title">Password</h2>
                        <p ref={error => (errorRef.current["password"] = error)} className="hform__error" />
                    </div>
                    <input
                        ref={passwordRef}
                        type="password"
                        className="hform__input"
                        placeholder="Enter password..."
                        onChange={(event) => handleChange(event)}
                    />
                    <div className="hform__strength">
                        Password Strength: {getPasswordStrength(password).message}
                        <progress
                                className={`hform__strength__progress ${getPasswordStrength(password).class}` }

                            max={100}
                            value={getPasswordStrength(password).value}
                        />
                    </div>
                </div>
                <div className="hform__field">
                    <div className="hform__field__preview">
                        <h2 className="hform__field__title">Confirm Password</h2>
                        <p ref={error => (errorRef.current["confirmPassword"] = error)} className="hform__error" />
                    </div>
                    <input
                        ref={confirmPasswordRef}
                        type="password"
                        className="hform__input"
                        placeholder="Confirm password..."
                    />
                </div>

                <div className="hform__field">
                    <div className="hform__field__preview">
                        <h2 className="hform__field__title">Country</h2>
                        <p ref={error => (errorRef.current["country"] = error)} className="hform__error" />
                    </div>
                    <input
                        ref={countryRef}
                        type="text"
                        id="country"
                        list="countriesList"
                        autoComplete="on"
                        name="country"
                        className="hform__input"
                        placeholder="Country"
                    />
                    <datalist id="countriesList">
                        {countries.map((country) => (
                            <option key={country}>{country}</option>
                        ))}
                    </datalist>
                </div>

                <div className="hform__field">
                <div className="hform__field__preview">
              <h2 className="hform__field__title">Gender</h2>
         
                    <p ref={error => (errorRef.current["gender"] = error)} className="hform__error" />
             
            </div>
                    <select ref={genderRef} className="hform__select">
                        <option value="">Select gender</option>
                        <option value="man">Man</option>
                        <option value="female">Female</option>
                    </select>
                </div>

                <div className="hform__field hform__field__checkbox">
                <div className="hform__field__preview">
              <h2 className="hform__field__title">Agree term</h2>
             
                    <p ref={error => (errorRef.current["agreeToTerms"] = error)} className="hform__error" />
             
            </div>
                    <label htmlFor="agreeToTerms" className="hform__agree">
                        <input
                            ref={agreeToTermsRef}
                            type="checkbox"
                            id="agreeToTerms"
                        />
                        <p className="hform__agree__text">
                            I agree to the terms of service
                        </p>
                    </label>
                </div>

                <div className="hform__field">
                <div className="hform__field__preview">
              <h2 className="hform__field__title">Avatar</h2>
        
            <p ref={error => (errorRef.current["avatar"] = error)} className="hform__error" />
             
            </div>
                    <input
                        ref={fileInputRef}
                        type="file"
                        className="hform__input"
                        accept=".png, .jpeg"
                        onChange={onAvatarChange}
                    />
                    <img ref={avatarPreviewRef} alt="Avatar Preview" className="hform__avatar-preview" />
                </div>

<button type="submit" className="submit-btn">Submit</button>
            </div>
        </form>
    );
};

export default UncontrolledForm;
