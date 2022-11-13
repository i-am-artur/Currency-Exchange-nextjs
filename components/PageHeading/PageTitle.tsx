import { Heading } from "./page-title.styled,";

interface Props {
  pageTitle: string;
}

export default function PageTitle({ pageTitle }: Props) {
  return <Heading>{pageTitle}</Heading>;
}
