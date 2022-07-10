import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// Test ---------------------- Importing the Redux Toolkit ---------------

// Test --------------------- Creating the slice ------------------------
type rowsPerPageProps = {
  rowsPerPage: number;
};

const initialState: rowsPerPageProps = {
  rowsPerPage: 5,
};

// Test --------------------- Exporting the actions ---------------------
const rowsPerPageSlice = createSlice({
  name: "rowsPerPage",
  initialState,
  reducers: {
    changeRowsPerPageHandler: (state, action: PayloadAction<number>) => {
      state.rowsPerPage = action.payload;
    },
  },
});

// Test --------------------- Exporting the Reducers Functions -------
export const { changeRowsPerPageHandler } = rowsPerPageSlice.actions;
export default rowsPerPageSlice.reducer;
