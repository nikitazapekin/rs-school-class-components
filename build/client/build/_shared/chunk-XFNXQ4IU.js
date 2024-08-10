import {
  appSlice_default,
  combineReducers,
  configureStore,
  selectedElementsSlice_default,
  themeSlice_default
} from "/build/_shared/chunk-JKX5JPF7.js";

// src/store/store.ts
var rootReducer = combineReducers({
  appSlice: appSlice_default,
  selectedElementsSlice: selectedElementsSlice_default,
  themeSlice: themeSlice_default
});
var store = configureStore({
  reducer: rootReducer
});

export {
  store
};
//# sourceMappingURL=/build/_shared/chunk-XFNXQ4IU.js.map
