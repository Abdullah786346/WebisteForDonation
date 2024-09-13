import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
};
const idSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    clearState: (state) => {
      return initialState;
    },
    setId: (state, { payload }) => {
      return { ...state, id: payload };
    },
  },
});

export const { clearState, setId } = idSlice.actions;
export default idSlice.reducer;
