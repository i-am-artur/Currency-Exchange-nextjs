import { useState } from "react";
import { HeaderElement, Options, Wrapper } from "./header.styled";
import Logo from "./features/Logo/Logo";
import Navigation from "./features/Navigation/Navigation";
import Burger from "./features/Burger/Burger";
import User from "./features/User/User";

export default function Header() {
  const [isNavDisplayed, setNavDisplayed] = useState(false);

  return (
    <Wrapper>
      <HeaderElement>
        <Logo />
        <Navigation isDisplayed={isNavDisplayed} />
        <Options>
          <User />
          <Burger
            onClickedOutside={() => setNavDisplayed(false)}
            onClick={() => setNavDisplayed(!isNavDisplayed)}
          />
        </Options>
      </HeaderElement>
    </Wrapper>
  );
}
