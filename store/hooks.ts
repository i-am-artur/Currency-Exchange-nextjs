import { AppDispatch, RootState } from "./index";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { CurrenciesModel } from "./currencies/reducer";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useCurrenciesSelector = (): CurrenciesModel =>
  useAppSelector((state) => state.currencies);
