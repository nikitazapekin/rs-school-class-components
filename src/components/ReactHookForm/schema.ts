import * as yup from 'yup';

const regExpEmail = new RegExp(/^\S+@\S+\.\S+$/);

// Определяем тип контекста, который включает поле countries
interface ValidationContext {
    countries: string[];
}

export const schema = yup.object().shape({
    username: yup.string()
        .trim()
        .required('Field is required')
        .min(2, 'The name must be at least 2 characters long')
        .test('is-first-letter-uppercase', 'The first character must be leading', value => {
            if (!value) return false;
            return /^[A-ZА-Я]/.test(value);
        }),

    email: yup.string()
        .required('Field is required')
        .matches(regExpEmail, 'Invalid email format'),

    password: yup.string()
        .required('Field is required')
        .min(6, 'Password must be at least 6 characters long')
        .test('password-strength', 'Password is too weak', value => {
            if (!value) return false;

            const hasUpperCase = /[A-Z]/.test(value);
            const hasLowerCase = /[a-z]/.test(value);
            const hasNumber = /\d/.test(value);
            const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);

            const strengthCount = [hasUpperCase, hasLowerCase, hasNumber, hasSpecialChar].filter(Boolean).length;

            return strengthCount >= 3; // Достаточная сложность пароля
        })
        .test('password-strength-message', 'The password must contain at least three of the following: uppercase letter, lowercase letter, number, special character', value => {
            if (!value) return false;

            const hasUpperCase = /[A-Z]/.test(value);
            const hasLowerCase = /[a-z]/.test(value);
            const hasNumber = /\d/.test(value);
            const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);

            const strengthCount = [hasUpperCase, hasLowerCase, hasNumber, hasSpecialChar].filter(Boolean).length;

            return strengthCount >= 3;
        }),

    confirmPassword: yup.string()
        .oneOf([yup.ref('password'), ''], 'Passwords must match')
        .required('Field is required'),

    age: yup.number()
        .required('Field is required')
        .positive('Age must be a positive number')
        .integer('Age must be an integer')
        .max(100, 'Please enter a correct age'),

    gender: yup.string()
        .required('Field is required')
        .oneOf(['man', 'female'], 'Choose the correct gender'),

    country: yup.string()
        .required('Field is required')
        .test('is-valid-country', 'Invalid country selected', function(value) {
            const { countries } = this.options.context as ValidationContext;
            return countries.includes(value || '');
        }),

    agreeToTerms: yup.boolean()
        .required('Consent required')
        .oneOf([true], 'Consent required'),



        avatar: yup.string()
        .required('Avatar is required')
        .test('is-valid-format', 'Invalid file format, only PNG or JPEG is allowed', (value) => {
            if (!value) return false;
            const validFormats = ['data:image/jpeg;base64', 'data:image/png;base64'];
            return validFormats.some(format => value.startsWith(format));
        }),
        
});

/*
import * as yup from 'yup';

const regExpEmail = new RegExp(/^\S+@\S+\.\S+$/);

export const schema = yup.object().shape({
    username: yup.string()
        .trim()
        .required('Field is required')
        .min(2, 'The name must be at least 2 characters long')
        .test('is-first-letter-uppercase', 'The first character must be leading', value => {
            if (!value) return false;
            return /^[A-ZА-Я]/.test(value);
        }),

    email: yup.string()
        .required('Field is required')
        .matches(regExpEmail, 'Invalid email format'),

    password: yup.string()
        .required('Field is required')
        .min(6, 'Password must be at least 6 characters long')
        .test('password-strength', 'Password is too weak', value => {
            if (!value) return false;

            const hasUpperCase = /[A-Z]/.test(value);
            const hasLowerCase = /[a-z]/.test(value);
            const hasNumber = /\d/.test(value);
            const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);

            const strengthCount = [hasUpperCase, hasLowerCase, hasNumber, hasSpecialChar].filter(Boolean).length;

            return strengthCount >= 3; // Достаточная сложность пароля
        })
        .test('password-strength-message', 'The password must contain at least three of the following: uppercase letter, lowercase letter, number, special character', value => {
            if (!value) return false;

            const hasUpperCase = /[A-Z]/.test(value);
            const hasLowerCase = /[a-z]/.test(value);
            const hasNumber = /\d/.test(value);
            const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);

            const strengthCount = [hasUpperCase, hasLowerCase, hasNumber, hasSpecialChar].filter(Boolean).length;

            return strengthCount >= 3;
        }),

    confirmPassword: yup.string()
        .oneOf([yup.ref('password'), ''], 'Passwords must match')
        .required('Field is required'),

    age: yup.number()
        .required('Field is required')
        .positive('Age must be a positive number')
        .integer('Age must be an integer')
        .max(100, 'Please enter a correct age'),

    gender: yup.string()
        .required('Field is required')
        .oneOf(['man', 'female'], 'Choose the correct gender'),

    country: yup.string()
        .required('Field is required')
        .test('is-valid-country', 'Invalid country selected', function(value) {
            const { options } = this;
            const { countries } = options.context;
            return countries.includes(value);
        }),

    agreeToTerms: yup.boolean()
        .required('Consent required')
        .oneOf([true], 'Consent required'),
});

*/
 