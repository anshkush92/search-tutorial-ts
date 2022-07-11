import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// Test ---------------------- Importing the Redux Toolkit ---------------

// Test --------------------- Creating the slice ------------------------
type totalRowsState = {
  totalRows: number;
  previousTotalRows: number;
};

const initialState: totalRowsState = {
  totalRows: 10,
  previousTotalRows: 0,
};

// Test --------------------- Exporting the actions ---------------------
export const totalRowsSlice = createSlice({
  name: "totalRows",
  initialState,
  reducers: {
    increaseRows: (state, action: PayloadAction<number>) => {
      state.totalRows += action.payload;
    },
    decreaseRows: (state, action: PayloadAction<number>) => {
      state.totalRows -= action.payload;
    },
    previousRows: (state) => {
      state.previousTotalRows = state.totalRows;
    },
  },
});

// Test --------------------- Exporting the Reducers Functions -------
export const { increaseRows, decreaseRows, previousRows } =
  totalRowsSlice.actions;
export default totalRowsSlice.reducer;
