import { Route, Routes, Navigate } from "react-router-dom"

import {
   
} from "./consts"

import { REACT_HOOK_FORM, MAIN_PAGE } from "./consts"
import ReactHookFormPage from "../pages/ReactHookFormPage"
import MainPage from "../pages/MainPage"
export const publicRoutes = [
    {
        path: REACT_HOOK_FORM,
        Component: ReactHookFormPage
     },
     {
      path: MAIN_PAGE,
      Component: MainPage
   },
  
]
 
const AppRoutes = ( )=> {
 
 
      return (

         
         <Routes>
            {publicRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} /> // Use Component as JSX
            ))}
 
         </Routes>
   )
      
};
export default AppRoutes