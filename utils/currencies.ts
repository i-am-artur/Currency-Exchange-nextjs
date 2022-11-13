import { Currencies, Currency } from "store/currencies/types";
import { useMemo } from "react";
import { CurrenciesModel } from "../store/currencies/reducer";

export function useCodes(currencies: Currencies) {
  return useMemo(() => {
    return currencies ? getCurrenciesCodes(currencies) : [];
  }, [currencies]);
}

export function getCurrenciesCodes(currencies: Currencies) {
  return Object.values(currencies).map((el) => el.code);
}

export function filter(condition: string, currencies: CurrenciesModel) {
  return Object.values(currencies.list).filter(
    (currency) =>
      currency.code !== currencies.baseCurrency &&
      currency.code.includes(condition)
  );
}

export function getSortedCurrencies(currencies: Currency[]) {
  return currencies.sort((currency1, currency2) => {
    if (currency1.isFavorite && currency2.isFavorite) {
      return currency1.code.localeCompare(currency2.code);
    }

    return currency1.isFavorite ? -1 : 1;
  });
}
