// Test ---------------------- Importing the Redux Toolkit ---------------
import { createSlice } from "@reduxjs/toolkit";

// Test ---------------------- Creating initialState -------------------
const initialState = {
  word: "",
};

// Test --------------------- Creating the slice ------------------------
export const searchWordSlice = createSlice({
  name: "searchWord",
  initialState,
  reducers: {
    setWord: (state, action) => {
      state.word = action.payload;
    },
  },
});

// Test --------------------- Exporting the actions ---------------------
export const { setWord } = searchWordSlice.actions;

// Test --------------------- Exporting the Reducers Functions -------
export default searchWordSlice.reducer;
