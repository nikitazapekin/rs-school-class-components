import { RootState } from "../store";

export const historySelector = (state: RootState) => {
  return state.appSlice.history;
};
