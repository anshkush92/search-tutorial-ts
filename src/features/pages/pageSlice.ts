// Test ---------------------- Importing the Redux Toolkit ---------------
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Test --------------------- Creating the slice ------------------------
type PageSliceState = {
  page: number;
};

const initialState: PageSliceState = {
  page: 0,
};

// Test --------------------- Exporting the actions ---------------------
export const PageSlice = createSlice({
  name: "Page",
  initialState,
  reducers: {
    changePageHandler: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
});

// Test --------------------- Exporting the Reducers Functions -------
export const { changePageHandler } = PageSlice.actions;
export default PageSlice.reducer;
