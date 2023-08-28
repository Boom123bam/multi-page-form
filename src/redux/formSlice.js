import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "form",
  initialState: {
    step: 1,
    data: {},
  },
  reducers: {
    nextStep: (state) => {
      state.step += 1;
    },
    prevStep: (state) => {
      if (state.step > 1) state.step -= 1;
    },
    setStep: (state, action) => {
      state.step = action.payload;
    },
    editData: (state, action) => {
      state.data = { ...state.data, ...action.payload };
      console.log(state.data);
    },
  },
});

// Action creators are generated for each case reducer function
export const { nextStep, prevStep, setStep, editData } =
  formSlice.actions;

export default formSlice.reducer;
