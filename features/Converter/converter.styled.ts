import styled from "styled-components";
import { colors, gap, width } from "styles/theme";

export const Wrapper = styled.div`
  // max-width: ${width.mobile};
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  row-gap: ${gap.general};
`;

export const Result = styled.div`
  font-weight: 500;
  color: ${colors.text_dark};
`;
