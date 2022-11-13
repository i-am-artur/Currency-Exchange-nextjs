import styled from "styled-components";

type Props = {
  type?: string;
};

export const Input = styled.input<Props>`
  ${({ type }) => type === "checkbox" && `height: 18px`};
`;
