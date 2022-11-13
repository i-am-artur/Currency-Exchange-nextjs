import { Wrapper } from "./error.styled";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Error({ children }: Props) {
  return <Wrapper>{children}</Wrapper>;
}
