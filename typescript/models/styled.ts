import { StyledComponentBase } from "styled-components";

export type StyledButton = string &
  StyledComponentBase<"button", any, {}, never> &
  any;

export type StyledSpan = string &
  StyledComponentBase<"span", any, {}, never> &
  any;
