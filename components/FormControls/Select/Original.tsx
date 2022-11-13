import { FormStyles } from "../form.styled";
import { removeSpaces } from "../utils";
import { SelectHTMLAttributes } from "react";

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: string[];
}

export default function Original(props: Props) {
  const { label = "", options, ...rest } = props;
  const id = removeSpaces(label);

  return (
    <FormStyles>
      {label && <label id={id}>{label}</label>}
      {options.length > 0 && (
        <select id={id} {...rest}>
          {options.map((option) => {
            return (
              <option key={option} value={option}>
                {option}
              </option>
            );
          })}
        </select>
      )}
    </FormStyles>
  );
}
