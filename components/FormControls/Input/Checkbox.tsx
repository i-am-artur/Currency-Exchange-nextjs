import Input, { CheckboxChecked } from "./Original";

export default function CheckBox(props: CheckboxChecked) {
  return <Input type="checkbox" {...props} />;
}
