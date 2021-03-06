import React from "react";

import FormControl from "@material-ui/core/FormControl";
import TextField, {
  StandardTextFieldProps as TextFieldProps,
} from "@material-ui/core/TextField";

import { WidgetProps } from "@rjsf/core";

export type TextWidgetProps = WidgetProps & TextFieldProps;

const TextWidget = ({
  id,
  required,
  readonly,
  disabled,
  type,
  label,
  value,
  onChange,
  onBlur,
  onFocus,
  autofocus,
  options,
  schema,
  formContext,
  rawErrors,
  ...textFieldProps
}: TextWidgetProps) => {
  const _onChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    onChange(value === "" ? options.emptyValue : value);
  const _onBlur = ({ target: { value } }: React.FocusEvent<HTMLInputElement>) =>
    onBlur(id, value);
  const _onFocus = ({
    target: { value },
  }: React.FocusEvent<HTMLInputElement>) => onFocus(id, value);

  return (
    <FormControl
      fullWidth={true}
      //error={!!rawErrors}
      required={required}>
      <TextField
        id={id}
        label={label || schema.title}
        autoFocus={autofocus}
        required={required}
        disabled={disabled || readonly}
        type={type || (schema.type as string)}
        value={value || value === 0 ? value : ""}
        onChange={_onChange}
        onBlur={_onBlur}
        onFocus={_onFocus}
        {...(textFieldProps as TextFieldProps)}
      />
    </FormControl>
  );
};

export default TextWidget;
