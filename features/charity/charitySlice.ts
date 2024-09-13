import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  description: "",
  amountNeeded: 0,
  deadline: "",
  image: "",
};
const charitySlice = createSlice({
  name: "charity",
  initialState,
  reducers: {
    handleChange: (state, { payload }) => {
      const { name, value } = payload;
      return { ...state, [name]: value };
    },
    clearState: (state) => {
      return initialState;
    },
  },
});

export const { handleChange, clearState } = charitySlice.actions;
export default charitySlice.reducer;
