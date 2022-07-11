// Test ---------------------- Importing the Redux Toolkit ---------------
import { createSlice } from "@reduxjs/toolkit";

// Test --------------------- Structure of the Slice --------------------
const initialState = {
  isDarkMode: false,
};

// Test --------------------- Creating the slice ------------------------
export const changeThemeSlice = createSlice({
  name: "changeTheme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

// Test --------------------- Exporting the actions ---------------------
export const { toggleTheme } = changeThemeSlice.actions;

// Test --------------------- Exporting the Reducers Functions -------
export default changeThemeSlice.reducer;
