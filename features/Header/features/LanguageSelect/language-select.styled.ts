import styled from "styled-components";
import { gap, fontSize } from "styles/theme";

const baseColor = "orangered";

export const LanguageList = styled.ul`
  margin: 0 ${gap.original} 0 0;
  padding: 0;
  display: flex;
  align-items: baseline;
  list-style-type: none;
`;

export const LanguageItem = styled.li`
  padding-left: 5px;
  padding-right: 5px;
  display: flex;
  border-left: 1px solid ${baseColor};

  &:first-child {
    border-left: 1px solid transparent;
  }
`;

type LanguageProps = {
  selected: boolean;
};

export const Language = styled.a<LanguageProps>`
  padding: 0;
  font-size: ${fontSize.original};
  color: ${baseColor};
  border: none;
  background: none;
  font-weight: ${({ selected }) => (selected ? "800" : "normal")};
`;
