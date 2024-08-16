import "./global.scss";
import "./normalize.scss";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./store/store";
import AppRoutes from "./utils/routes";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
