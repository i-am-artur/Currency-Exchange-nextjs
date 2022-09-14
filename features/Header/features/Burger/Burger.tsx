import { useEffect } from "react";
import { BurgerButton, BurgerLine } from "./burger.styled";
import { StyledButton, StyledSpan } from "typescript/models/styled";

interface BurgerProps {
  onClickedOutside: () => void;
  onClick: () => void;
}

export default function Burger(props: BurgerProps) {
  const { onClickedOutside, onClick } = props;

  useEffect(() => {
    document.addEventListener("click", clickEvent);
    function clickEvent(event: MouseEvent) {
      if (!isBurgerButtonClicked(event, BurgerButton, BurgerLine)) {
        onClickedOutside();
      }
    }
    return () => document.removeEventListener("click", clickEvent);
  }, []);

  return (
    <BurgerButton onClick={onClick}>
      <BurgerLine />
      <BurgerLine />
      <BurgerLine />
    </BurgerButton>
  );
}

function isBurgerButtonClicked(
  event: MouseEvent,
  burgerButton: StyledButton,
  burgerLine: StyledSpan
) {
  const clickedTarget = event.target as HTMLElement;
  const classList = clickedTarget.classList;

  return (
    classList.contains(burgerButton.styledComponentId) ||
    classList.contains(burgerLine.styledComponentId)
  );
}
