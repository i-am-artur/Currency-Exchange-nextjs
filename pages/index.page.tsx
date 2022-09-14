import { GetStaticPropsContext } from "next";
import Link from "next/link";
import { translation } from "../library/Translation/translation";
import { getLanguage } from "../utils/language";
import context from "./context.json";
import { Fragment } from "react";

interface Props {
  i18n: GetStaticPropsContext;
}

export default function Index({ i18n }: Props) {
  const language = getLanguage(i18n);
  const t = translation(language);
  const { locales } = i18n;

  return (
    <Fragment>
      {t(context.home)}
    </Fragment>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: {
      i18n: context,
    },
  };
}
