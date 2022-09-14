import { useContext } from "react";
import GlobalContext from "components/GlobalContext";
import context from "./context.json";
import { translation } from "library/Translation/translation";
import { HomeLink, Wrapper } from "./logo.styled";
import Link from "next/link";

export default function Logo() {
  const { locale } = useContext(GlobalContext);
  const t = translation(locale);

  return (
    <Wrapper>
      <Link href="/">
        <HomeLink>{t(context.logo)}</HomeLink>
      </Link>
    </Wrapper>
  );
}
