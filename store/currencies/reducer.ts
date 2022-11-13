import { createReducer } from "@reduxjs/toolkit";
import { setBaseCurrency, setSecondCurrency, toggle } from "./actions";
import { Currencies } from "./types";

export interface CurrenciesModel {
  isLoading: boolean;
  baseCurrency: string;
  secondCurrency: string;
  list: Currencies;
  error: unknown;
}

export const initialState: CurrenciesModel = {
  isLoading: false,
  baseCurrency: "USD",
  secondCurrency: "UAH",
  list: <Currencies>{},
  error: null,
};

const authReducer = createReducer(initialState, (builder) => {
  const thunkActions = [setBaseCurrency];
  thunkActions.forEach((el) =>
    builder
      .addCase(el.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(el.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  );
  builder
    .addCase(setBaseCurrency.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.baseCurrency = action.payload.baseCurrency;
      state.list = action.payload.list;
    })
    .addCase(setSecondCurrency, (state, action) => {
      state.secondCurrency = action.payload;
    })
    .addCase(toggle, (state, action) => {
      const currency = state.list[action.payload];
      currency.isFavorite = !currency?.isFavorite;
    });
});

export default authReducer;
