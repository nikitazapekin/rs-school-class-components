import "./index.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import {schema} from "./schema"
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { coutrySelector } from "../../store/selectors/country.selector";
import { useAppDispatch } from "../../hooks/redux";
import { SetPersonalDataReactHookFormActionCreator } from "../../store/actions/setUserData";
import { useNavigate } from "react-router-dom";
import { RegisterInterface } from "./types"
const ReactHookForm = () => {
  const navigate = useNavigate();
  const countries = useSelector(coutrySelector);
  const dispatch = useAppDispatch();
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

  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);


  const onAvatarChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setValue("avatar", base64String, { shouldValidate: true });
        setAvatarPreview(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const passwordValue = watch("password", "");

  const getPasswordStrength = (password: string) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const strengthCount = [
      hasUpperCase,
      hasLowerCase,
      hasNumber,
      hasSpecialChar,
    ].filter(Boolean).length;
    if (strengthCount === 4) return "Strong";
    if (strengthCount === 3) return "Medium";
    if (strengthCount > 0) return "Weak";

    return "Very Weak";
  };

  const submitForm = (data: RegisterInterface) => {
    dispatch(SetPersonalDataReactHookFormActionCreator(data));
    navigate("/");
    reset();
    setAvatarPreview(null);
  };

  return (
    <>
      <form className="hform" onSubmit={handleSubmit(submitForm)}>
        <div className="hform__inner">
          <div className="hform__inner__background"></div>
          <h1 className="hform__title">React hook form</h1>
          <div className="hform__field">
            <div className="hform__field__preview">
              <h2 className="hform__field__title">Username</h2>
              <p className="hform__error">{errors.name?.message}</p>
            </div>
            <input
              {...register("name")}
              type="text"
              className="hform__input"
              placeholder="Enter username..."
            />
          </div>

          <div className="hform__field">
            <div className="hform__field__preview">
              <h2 className="hform__field__title">Age</h2>
              <p className="hform__error">{errors.age?.message}</p>
            </div>
            <input
              {...register("age")}
              type="number"
              className="hform__input"
              placeholder="Enter age..."
            />
          </div>

          <div className="hform__field">
            <div className="hform__field__preview">
              <h2 className="hform__field__title">Email</h2>
              <p className="hform__error">{errors.email?.message}</p>
            </div>
            <input
              {...register("email")}
              type="email"
              className="hform__input"
              placeholder="Enter email..."
            />
          </div>

          <div className="hform__field">
            <div className="hform__field__preview">
              <h2 className="hform__field__title">Password</h2>
              <p className="hform__error">{errors.password?.message}</p>
            </div>
            <input
              {...register("password")}
              type="password"
              className="hform__input"
              placeholder="Enter password..."
            />
            <p className="hform__strength">
              Password Strength: {getPasswordStrength(passwordValue)}
            </p>
          </div>

          <div className="hform__field">
            <div className="hform__field__preview">
              <h2 className="hform__field__title">Confirm Password</h2>
              <p className="hform__error">{errors.confirmPassword?.message}</p>
            </div>
            <input
              {...register("confirmPassword")}
              type="password"
              className="hform__input"
              placeholder="Confirm password..."
            />
          </div>

          <div className="hform__field">
            <div className="hform__field__preview">
              <h2 className="hform__field__title">Country</h2>
              <p className="hform__error">{errors.country?.message}</p>
            </div>
            <input 
             className="hform__input"
              {...register("country")}
            type="text" id="country" list="countriesList" autoComplete="on" name="country" placeholder="Countr" />
        
        <datalist id="countriesList">
          {countries.map((country) => (
            <option key={country}>{country}</option>
          ))}
          </datalist>
          
          </div>

          <div className="hform__field">
            <h2 className="hform__field__title">Gender</h2>
            <select {...register("gender")} className="hform__select">
              <option value="">Select gender</option>
              <option value="man">Man</option>
              <option value="female">Female</option>
            </select>
            <p className="hform__error">{errors.gender?.message}</p>
          </div>

          <div className="hform__field hform__field__checkbox">
            <label htmlFor="agreeToTerms" className="hform__agree">
              <input
                {...register("agreeToTerms")}
                type="checkbox"
                id="agreeToTerms"
              />
              <p className="hform__agree__text">
                I agree to the terms of service
              </p>
            </label>
            <p className="hform__error">{errors.agreeToTerms?.message}</p>
          </div>

          <div className="hform__field">
            <h2 className="hform__field__title">Avatar</h2>
            <input
              type="file"
              className="hform__input"
              accept=".png, .jpeg"
              onChange={onAvatarChange}
            />

            <p className="hform__error">{errors.avatar?.message}</p>
            {avatarPreview && (
              <img
                src={avatarPreview}
                alt="Avatar Preview"
                className="hform__avatar-preview"
              />
            )}
          </div>

          <div className="hform__field hform__btn">
            <input type="submit" className="hform__submit" disabled={Object.values(errors).some(value =>value.message!="") ? true : false} />
          </div>
        </div>
       
      </form>
    </>
  );
};

export default ReactHookForm;