import { OrganizationInterface, UserInterface } from "@/constants/types";
import { createSlice } from "@reduxjs/toolkit";

type UserAuthState = UserInterface | OrganizationInterface;
const initialState: UserAuthState = {} as UserAuthState;

const userSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      return { ...state, ...payload };
    },
    handleChange: (state, { payload }) => {
      const { name, value } = payload;
      return { ...state, [name]: value };
    },
    clearState: (state) => {
      return initialState;
    },
  },
});

export const { setUser, clearState, handleChange } = userSlice.actions;
export default userSlice.reducer;
