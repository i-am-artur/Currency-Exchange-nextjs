import { GetStaticPropsContext } from "next";
const { i18n } = require("next.config");

export function getLanguage(context: GetStaticPropsContext) {
  const { locale } = context;

  if (locale) return locale;

  return i18n.defaultLocale;
}
