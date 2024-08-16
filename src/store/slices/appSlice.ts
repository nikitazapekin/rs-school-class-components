import { createSlice, PayloadAction } from '@reduxjs/toolkit';
 
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
       

interface AppState {
    countries: String[],
    reactHookForm: FormTypes, 
    uncontrolledForm: FormTypes,
  formErrors: FormTypesErrors
}


const initialState: AppState = {
    countries: [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas",
        "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize",
        "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil",
        "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia",
        "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China",
        "Colombia", "Comoros", "Congo", "Congo, Democratic Republic of the", "Costa Rica",
        "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti",
        "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt",
        "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini",
        "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia",
        "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea",
        "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland",
        "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy",
        "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya",
        "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon",
        "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
        "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
        "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia",
        "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique",
        "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand",
        "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia",
        "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea",
        "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar",
        "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia",
        "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe",
        "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone",
        "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia",
        "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka",
        "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan",
        "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago",
        "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine",
        "United Arab Emirates", "United Kingdom", "United States", "Uruguay",
        "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam",
        "Yemen", "Zambia", "Zimbabwe"
    ],
    reactHookForm: {
        name: "",
        age: 0,
        email: "",
        password: "",
      confirmPassword: "",
        gender: "None",
        avatar: "",
        agreeToTerms: false,
        country: ""
    },
  uncontrolledForm: {
    name: "",
    age: 0,
    email: "",
    password: "",
  confirmPassword: "",
    gender: "None",
    avatar: "",
    agreeToTerms: false,
    country: ""
    }, 
   formErrors: {
        name: "",
        age: "",
        email: "",
        password: "",
      confirmPassword: "",
        gender: "",
        avatar: "",
        agreeToTerms: "",
        country: "" 
    }
};
const appSlicee = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setLoading(state, action: PayloadAction<boolean>) {
            console.log('LOOO', action.payload);

        },
setPersonalDataReactHookForm(state, action: PayloadAction<FormTypes>) {
 //   setPersonalDataReactHookForm(state, action: FormTypes) {
   console.log("AC" +action.payload)
   state.reactHookForm = action.payload
  //  state.reactHookForm.age = action.payload.
},
setFormErrors(state, action: PayloadAction<FormTypesErrors>) {
    state.formErrors = action.payload
    console.log("SER ERR", state.formErrors)
}
    },
});
export const {
    setLoading,
setPersonalDataReactHookForm,
setFormErrors
} = appSlicee.actions;
export default appSlicee.reducer;