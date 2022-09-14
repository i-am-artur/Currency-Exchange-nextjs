import styled from "styled-components";
import { colors, gap, fontSize, media, zIndex } from "styles/theme";

interface NavProps {
  isDisplayed: boolean;
}

export const Nav = styled.nav<NavProps>`
  z-index: ${zIndex.nav};
  display: ${({ isDisplayed }) => (isDisplayed ? "block" : "none")};
  right: 0;
  top: 100%;
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  padding: ${gap.original};
  background-color: ${colors.main_color};
  text-align: end;
  font-size: ${fontSize.menu_large};
  font-weight: bold;

  ${media.Desktop} {
    display: flex;
    justify-content: center;
    position: initial;
    padding: 0;
    font-size: ${fontSize.regular};
  }
`;

export const Menu = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;

  ${media.Desktop} {
    width: 450px;
    display: flex;
    justify-content: space-evenly;
  }
`;

export const MenuItem = styled.li`
  margin-bottom: 16px;

  ${media.Desktop} {
    margin: 0;
  }
`;

export const MenuLink = styled.a`
  color: white;

  &.active {
    color: ${colors.menu_active};
  }
`;
