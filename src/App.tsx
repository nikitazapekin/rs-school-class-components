
import "./global.scss"
import "./normalize.scss"
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainPage from './pages/MainPage'
import ReactHookFormPage from './pages/ReactHookFormPage'
import UncontrolledFormPage from './pages/UncontrolledFormPage'
import { Provider } from 'react-redux';
import { store } from "./store/store"
import AppRoutes from "./utils/routes"
/*
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
]) */

function App() {


  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <AppRoutes />

        </BrowserRouter>
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