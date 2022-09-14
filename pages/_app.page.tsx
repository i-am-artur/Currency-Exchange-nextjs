import GlobalStyles from "styles/global.styled";
import { AppProps } from "next/app";
import { Fragment } from "react";
import GlobalContext from "components/GlobalContext";
import { Main } from "./_app.page.styled";
import Header from "../features/Header/Header";

function MyApp({ Component, pageProps }: AppProps) {
  const { i18n } = pageProps;

  return (
    <Fragment>
      <GlobalContext.Provider value={i18n}>
        <GlobalStyles />
        <Header />
        <Main>
          <Component {...pageProps} />
        </Main>
      </GlobalContext.Provider>
    </Fragment>
  );
}

export default MyApp;
