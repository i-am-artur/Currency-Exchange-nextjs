import { useContext } from "react";
import { translation } from "library/Translation/translation";
import { Menu, MenuItem, MenuLink, Nav } from "./navigation.styled";
import GlobalContext from "components/GlobalContext";
import Link from "next/link";
const context = require("./context.json");

interface Props {
  isDisplayed: boolean;
}

export default function Navigation(props: Props) {
  const { isDisplayed } = props;
  const { locale } = useContext(GlobalContext);
  const t = translation(locale);

  const navLinks = Object.keys(context);

  return (
    <Nav isDisplayed={isDisplayed}>
      <Menu>
        {navLinks.map((link) => (
          <MenuItem key={link}>
            <Link href={context[link].path} locale={locale}>
              <MenuLink>{t(context[link]).toUpperCase()}</MenuLink>
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </Nav>
  );
}
