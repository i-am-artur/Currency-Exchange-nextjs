import GlobalStyles from "styles/global.styled";
import App from "next/app";
import GlobalContext from "components/GlobalContext";
import { Container, Main } from "./_app.page.styled";
import Header from "../features/Header/Header";
import { SessionProvider } from "next-auth/react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import InitApp from "../features/InitApp/InitApp";
config.autoAddCss = false;

export default class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <GlobalContext.Provider value={router}>
        <GlobalStyles />
        <SessionProvider session={pageProps.session}>
          <Header />
          <Main>
            <Container>
              <InitApp initialReduxState={pageProps?.initialReduxState}>
                <Component {...pageProps} />
              </InitApp>
            </Container>
          </Main>
        </SessionProvider>
      </GlobalContext.Provider>
    );
  }
}
