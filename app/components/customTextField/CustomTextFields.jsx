import { TextField } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";

export const CustomTextField = ({
  name,
  label,
  type,
  required,
  control,
  variant = "filled",
  color = "primary",
  defaultValue,
  textFieldProps,
  aria_describedby,
  onChange,
  onFocus,
  onBlur,
  className
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <TextField
          {...field}
          type={type}
          label={label}
          variant={variant}
          fullWidth
          color={color}
          required={required}
          aria-describedby={aria_describedby}
          sx={{ mt: 2 }}
          className={className}
          {...textFieldProps}
          onBlur={(e) => {
            field.onBlur(e);
            onBlur?.(e);
          }}
          onChange={(e) => {
            field.onChange(e);
            onChange?.(e);
          }}
          onFocus={(e) => {
            onFocus?.(e);
          }}
        />
      )}
    />
  );
};
