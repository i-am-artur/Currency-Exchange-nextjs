import { FormStyles } from "../form.styled";
import { removeSpaces } from "../utils";
import { Input } from "./input.styled";
import { ChangeEvent } from "react";

interface Text {
  label?: string;
  // type?: "text" | "number" | "email" | "password" | "checkbox";
  type?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface CheckboxChecked extends Text {
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

type Props = Text | CheckboxChecked;

export default function Original(props: Props) {
  const { label = "", type = "text", ...rest } = props;
  const id = removeSpaces(label);

  return (
    <FormStyles>
      {label && <label htmlFor={id}>{label}</label>}
      <Input id={id} type={type} {...rest} />
    </FormStyles>
  );
}
