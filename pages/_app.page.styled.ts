import styled from "styled-components";
import { gap, width } from "../styles/theme";

export const Main = styled.main`
  max-width: ${width.tablet};
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  flex: 1;
  flex-direction: column;
  display: flex;
`;

export const Container = styled.div`
  margin-right: ${gap.general};
  margin-left: ${gap.general};
`;
