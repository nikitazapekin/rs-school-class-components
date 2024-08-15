/*

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"


const schema = yup
  .object({
    firstName: yup.string().required(),
    age: yup.number().positive().integer().required(),
  })
  .required()


export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = (data: any) => console.log(data)


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} />
      <p>{errors.firstName?.message}</p>


      <input {...register("age")} />
      <p>{errors.age?.message}</p>


      <input type="submit" />
    </form>
  )
}

*/
/*
import { useForm } from "react-hook-form"


export default function App() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()
  const onSubmit = (data) => console.log(data)


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("firstName", { required: true })}
        aria-invalid={errors.firstName ? "true" : "false"}
      />
      {errors.firstName?.type === "required" && (
        <p role="alert">First name is required</p>
      )}


      <input
        {...register("mail", { required: "Email Address is required" })}
        aria-invalid={errors.mail ? "true" : "false"}
      />
      {errors.mail && <p role="alert">{errors.mail.message}</p>}


      <input type="submit" />
    </form>
  )
}
*/
/*
import { useForm, SubmitHandler } from "react-hook-form"


interface IFormInput {
  firstName: string
  lastName: string
  age: number
}


export default function App() {
  const { register, handleSubmit } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", { required: true, maxLength: 20 })} />
      <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
      <input type="number" {...register("age", { min: 18, max: 99 })} />
      <input type="submit" />
    </form>
  )
}
  */
/*
import ReactDOM from "react-dom"
import { useForm, SubmitHandler } from "react-hook-form"

enum GenderEnum {
  female = "female",
  male = "male",
  other = "other",
}

interface IFormInput {
  firstName: string
  gender: GenderEnum
}

export default function App() {
  const { register, handleSubmit } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name</label>
      <input {...register("firstName")} />
      <label>Gender Selection</label>
      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <input type="submit" />
    </form>
  )
}

*/
/* 
*/
import "./global.scss"
import "./normalize.scss"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainPage from './pages/MainPage'
import ReactHookFormPage from './pages/ReactHookFormPage'
import UncontrolledFormPage from './pages/UncontrolledFormPage'
import { Provider } from 'react-redux';
import { store } from "./store/store"

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <>Nothing found</>,
    children: [
      {
        path: "registration-react-hook-form",
        element: <ReactHookFormPage />
      },
      {
        path: "registration-uncontrolled",
        element: <UncontrolledFormPage />
      }
    ]
  }, 

  {
    path: "*",
    element: <MainPage />
  }
])
function App() {
  

  return (
    <>
    <Provider store={store}>

<RouterProvider router={router} />
    </Provider>
    </>
  )
}

export default App


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