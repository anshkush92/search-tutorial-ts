import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import pageReducer from "../features/pages/pageSlice";
import rowsPerPageReducer from "../features/pages/rowsPerPageSlice";
import totalRowsReducer from "../features/pages/totalRowsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    page: pageReducer,
    rowsPerPage: rowsPerPageReducer,
    totalRows: totalRowsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
