import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllCards } from "../Api/graphQl";
// eslint-disable-next-line import/no-cycle
import { RootState } from "../app/store";
import { IProperty } from "../types/commontTypes";

interface ICardsSlice {
  cards: Array<IProperty>;
  loading: boolean;
  allCards: Array<IProperty>;
}

const initialState: ICardsSlice = {
  cards: [],
  loading: false,
  allCards: [],
};

export const getInitialState = createAsyncThunk(
  "cardsSlide/getAll",
  async () => {
    const response = await getAllCards();
    return response;
  }
);

export const cardsSlice = createSlice({
  name: "cardsSlice",
  initialState,
  reducers: {
    filterCards: (state, action) => {
      state.cards = state.allCards.filter(({ name }) =>
        name.toLowerCase().includes(action.payload)
      );
      state.loading = false;
    },
    enableLoading: (state) => {
      state.loading = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getInitialState.pending, (state) => {
        state.loading = true;
      })
      .addCase(getInitialState.fulfilled, (state, action) => {
        state.loading = false;
        state.cards = action.payload;
        state.allCards = action.payload;
      });
  },
});

export const { filterCards, enableLoading } = cardsSlice.actions;

export const cards = (state: RootState) => state.cards.cards;
export const loading = (state: RootState) => state.cards.loading;

export default cardsSlice.reducer;
