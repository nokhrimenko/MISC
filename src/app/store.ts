/* eslint-disable import/no-cycle */
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import cardsReducer from "@redux/cardsSlice";

export const store = configureStore({
  reducer: {
    cards: cardsReducer,
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
