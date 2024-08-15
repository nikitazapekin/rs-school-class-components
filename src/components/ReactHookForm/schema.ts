import * as yup from 'yup';

const regExpEmail = new RegExp(/^\S+@\S+\.\S+$/);


export const schema = yup.object().shape({
 
        username: yup.string()
        .trim()
        .required('Field is requered')
        .min(2, 'The name must be at least 2 characters long')
        .test('is-first-letter-uppercase', 'The first character must be leading', value => {
            if (!value) return false;
            return /^[A-ZА-Я]/.test(value);
        }),
    

        
    email: yup.string()
    .required('Field is requered')
        .matches(regExpEmail, 'Invalid mail format'),
 

password: yup.string()
.required('Field is requered')
    .min(6, 'Password must be at least 6 characters long')
    .test('password-strength', 'Password is too weak', value => {
        if (!value) return false;

    
        const hasUpperCase = /[A-Z]/.test(value);
        const hasLowerCase = /[a-z]/.test(value);
        const hasNumber = /\d/.test(value);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);

      
        const strengthCount = [hasUpperCase, hasLowerCase, hasNumber, hasSpecialChar].filter(Boolean).length;

       
        if (strengthCount >= 3) {
            if (strengthCount === 4) {
                return true; 
            }
            return true;  
        } else {
            return false;  
        }
    })
    .test('password-strength-message', 'The password must contain at least three of the following: uppercase letter, lowercase letter, number, special character', value => {
        if (!value) return false;
 
        const hasUpperCase = /[A-Z]/.test(value);
        const hasLowerCase = /[a-z]/.test(value);
        const hasNumber = /\d/.test(value);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);

      
        const strengthCount = [hasUpperCase, hasLowerCase, hasNumber, hasSpecialChar].filter(Boolean).length;

      
        if (strengthCount < 3) {
            return false; 
        } 
        return true;  
    }),






    confirmPassword: yup.string()
    .oneOf([yup.ref('password'), ""], 'Passwords must match')
    .required('Field is requered'),


 
    age: yup.number()
    .required('Field is requered')
        .positive('Age must be a positive number')
        .integer('Age must be an integer')
        .max(100, 'Please enter correct age'),
      

    gender: yup.string()
    .required('Field is requered')
        .oneOf(['man', 'female'], 'Choose the correct gender'),

    country: yup.string()
    .required('Field is requered')
        .oneOf(['USA', 'Canada'], 'Choose the correct country'),
        agreeToTerms: yup.boolean()
        .required('Consent required')
        .oneOf([true], 'Consent required'),



/*
        avatar: yup
        .mixed()
        .required('Обязательное поле')
        .test('fileSize', 'Файл слишком большой', (value) => {
            if (!value) return false;
            return (value as File).size <= 1024 * 1024; 
        })
        .test('fileType', 'Недопустимый формат', (value) => {
            if (!value) return false;
            const fileType = (value as File).type;
            return ['image/jpeg', 'image/png', 'image/gif'].includes(fileType);
            }),
  */


            /*
            avatar: yup.string()
            .nullable()
            .test('is-base64', 'Некорректный формат изображения', (value) => {
                if (!value) return true; // Skip validation if no avatar
                const base64Regex = /^data:image\/(png|jpeg|jpg|gif);base64,/;
                return base64Regex.test(value);
            }),
            */
});

/*
        avatar: yup
        .mixed()
        .required('Обязательное поле')
        .test('fileSize', 'Файл слишком большой', (value) => {
            if (!value) return false;
            return (value as File).size <= 1024 * 1024; // Максимальный размер 1MB
        })
        .test('fileType', 'Недопустимый формат', (value) => {
            if (!value) return false;
            const fileType = (value as File).type;
            return ['image/jpeg', 'image/png', 'image/gif'].includes(fileType);
        }),
*/

/*
import * as yup from 'yup';

const regExpEmail = new RegExp(/^\S+@\S+\.\S+$/);
const regExpPhone = new RegExp(/^\+?[1-9][0-9]{7,14}$/);

export const schema = yup.object().shape({
    username: yup.string().trim().required('Обязательное поле').min(2, 'Необходимо минимум 2 символа'),
    email: yup.string().required('Обязательное поле').matches(regExpEmail, 'Неверный формат почты'),
   
    password: yup.string().required('Обязательное поле').min(6, 'Необходимо минимум 6 символов'),
});
*/


/*
username: string;
    email: string;
    
    password: string;
    age: number;
    gender: string;
    country: string;
    avatar: string;
    agreeToTerms: boolean;
    */