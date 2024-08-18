
import { UNCONTROLLED_FORM, REACT_HOOK_FORM, MAIN_PAGE } from "./consts";
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
