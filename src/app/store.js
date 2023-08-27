import { configureStore } from "@reduxjs/toolkit";
import formReducer from "../redux/formSlice";

export default configureStore({
  reducer: {
    form: formReducer,
  },
});
