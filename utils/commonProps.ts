import { GetServerSidePropsContext, GetStaticPropsContext } from "next";
import { CurrenciesModel } from "../store/currencies/reducer";
import { getCurrencies } from "../services/currencies";

export interface I18N {
  defaultLocale: string | undefined;
  locales: string[] | undefined;
  locale: string | undefined;
}

export default async function getCommonProps(
  context: GetServerSidePropsContext | GetStaticPropsContext
) {
  const { locales, locale, defaultLocale } = context;

  const baseCurrency = "USD";
  const fetchedCurrencies = await getCurrencies(baseCurrency)
    .then((res) => res.json())
    .then((data) => data.data);

  return {
    i18n: <I18N>{ locales, locale, defaultLocale },
    initialReduxState: {
      currencies: <CurrenciesModel>{
        isLoading: false,
        baseCurrency,
        secondCurrency: "UAH",
        list: fetchedCurrencies,
        error: null,
      },
    },
  };
}
