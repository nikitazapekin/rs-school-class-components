import { RootState } from "../store";

export const paramsSelector = (state: RootState) => {
  const appSlice = state.appSlice || {};
  return appSlice.params || { query: "", offset: 1, limit: 10, storedValue: "" };
};


/*import { RootState } from "../store";
export const paramsSelector = (state: RootState) => state.appSlice.params || {query: "", offset: 1, limit: 10, storedValue: ""}
*/

/*
import configureMockStore from 'redux-mock-store';
import { paramsSelector } from './getSearchParams'
import { AppStatee } from '../types';
interface RootState {
  appSlice:AppStatee;
}

const mockStore = configureMockStore<RootState>();

describe('paramsSelector', () => {
  it('should return params from state', () => {
    const initialState: RootState = {
      appSlice: {
        isLoading: false,
        error: null,
        storedElements: [],
        users: [],
        params: {
            limit: 10,
            offset: 1,
            query: "",
            storedValue: ""
        },
        selectedElement: null
      }
    };

    const store = mockStore(initialState);
   // const state = store.getState().appSlice.params;
   const state = store.getState()
    const result = paramsSelector(state.appSlice);

    expect(result).toEqual(initialState.appSlice.params);
  });
});
*/