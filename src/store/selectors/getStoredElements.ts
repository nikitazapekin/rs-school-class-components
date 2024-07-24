import { RootState } from "../store";
export const storedUsersSelector = (state: RootState) => state.appSlice.storedElements || []