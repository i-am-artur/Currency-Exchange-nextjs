import { useField } from "formik";
import { FieldHookConfig } from "formik/dist/Field";
import Input from "./Original";
import { ChangeEvent } from "react";
import Error from "../Error/Error";

interface Props {
  label?: string;
  name: string;
  type?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function FormikInput(props: Props & FieldHookConfig<any>) {
  const { label = "", type = "text", onChange: _onChange, ...rest } = props;
  const [field, meta] = useField(props);

  const onChange = (event: ChangeEvent<any>) => {
    field.onChange(event);
    _onChange && _onChange(event);
  };

  return (
    <div>
      <Input label={label} type={type} {...{ ...field, onChange, ...rest }} />
      {meta.touched && meta.error ? <Error>{meta.error}</Error> : null}
    </div>
  );
}
