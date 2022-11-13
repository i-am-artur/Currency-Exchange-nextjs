import { combineReducers, PreloadedState } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { default as currenciesReducer } from "./currencies/reducer";
import { EnhancedStore } from "@reduxjs/toolkit/dist/configureStore";
import { useMemo } from "react";

export const rootReducer = combineReducers({
  currencies: currenciesReducer,
});

let store: EnhancedStore | undefined;

export type RootState = ReturnType<typeof rootReducer>;

function initStore(initialState: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  });
}

export const initializeStore = (
  preloadedState: PreloadedState<RootState>
): EnhancedStore => {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState: PreloadedState<RootState>) {
  return useMemo(() => {
    return initializeStore(initialState);
  }, [initialState]);
}

export type AppStore = ReturnType<typeof initStore>;
export type AppDispatch = AppStore["dispatch"];
