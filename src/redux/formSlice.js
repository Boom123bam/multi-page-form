import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "form",
  initialState: {
    step: 3,
    data: {},
  },
  reducers: {
    nextStep: (state) => {
      state.step += 1;
    },
    prevStep: (state) => {
      if (state.step > 1) state.step -= 1;
    },
    editData: (state, action) => {
      state.data = { ...state.data, ...action.payload };
      console.log(state.data);
    },
  },
});

// Action creators are generated for each case reducer function
export const { nextStep, prevStep, editData } = formSlice.actions;

export default formSlice.reducer;
