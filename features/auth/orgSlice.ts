import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  image: "example.com/image.jpg",
  address: "",
  city: "",
  country: "",
  state: "",
  zipCode: "",
  email: "",
  phone: "",
  category: "",
  role: "",
  mission: "",
  residents: 0,
  accreditation: "",
  password: "",
};
const orgSlice = createSlice({
  name: "orgAuth",
  initialState,
  reducers: {
    handleChange: (state, { payload }) => {
      const { name, value } = payload;
      return { ...state, [name]: value };
    },
    clearState: (state) => {
      return initialState;
    },
    setOrgDetails: (state, { payload }) => {
      return { ...state, ...payload };
    },
  },
});

export const { handleChange, clearState, setOrgDetails } = orgSlice.actions;
export default orgSlice.reducer;
