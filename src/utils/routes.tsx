import { Route, Routes } from "react-router-dom";

import { UNCONTROLLED_FORM } from "./consts";

import { REACT_HOOK_FORM, MAIN_PAGE } from "./consts";
import ReactHookFormPage from "../pages/ReactHookFormPage";
import MainPage from "../pages/MainPage";
import UncontrolledFormPage from "../pages/UncontrolledFormPage";
export const publicRoutes = [
  {
    path: REACT_HOOK_FORM,
    Component: ReactHookFormPage,
  },
  {
    path: MAIN_PAGE,
    Component: MainPage,
  },
  {
    path: UNCONTROLLED_FORM,
    Component: UncontrolledFormPage,
  },
];

const AppRoutes = () => {
  return (
    <Routes>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </Routes>
  );
};
export default AppRoutes;
