import { Language, LanguageItem, LanguageList } from "./language-select.styled";
import { useContext } from "react";
import GlobalContext from "components/GlobalContext";
import Link from "next/link";
import { useRouter } from "next/router";

export default function LanguageSelect() {
  const { locales, locale } = useContext(GlobalContext);
  const { pathname } = useRouter();

  return (
    <LanguageList>
      {locales.map((el: string) => (
        <LanguageItem key={el}>
          <Link href={pathname} locale={el}>
            <Language selected={locale === el}>{el.toUpperCase()}</Language>
          </Link>
        </LanguageItem>
      ))}
    </LanguageList>
  );
}
