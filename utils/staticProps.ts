import { GetStaticPropsContext } from "next";
import getCommonProps from "./commonProps";

export default async function getCommonStaticProps(
  context: GetStaticPropsContext
) {
  return getCommonProps(context);
}
