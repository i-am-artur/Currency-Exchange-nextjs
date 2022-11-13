import styled from "styled-components";
import { gap, width } from "styles/theme";

export const Wrapper = styled.div`
  // max-width: ${width.mobile};
  width: 100%;
  // margin-left: ${gap.original};
  // margin-right: ${gap.original};
  display: flex;
  flex-direction: column;
  row-gap: ${gap.general};
`;
