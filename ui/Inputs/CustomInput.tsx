import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import {  forwardRef, useId } from "react";
import { CommonMuiInputProps } from "@/typescript/interface/common.interface";

const CustomInputWith_forwardRef = ({
  error = false,
  label,
  value,
  onChange,
  helperText = "",
  placeholder = "",
  type,
}: CommonMuiInputProps) => {
  const id =useId()
  return (
    <FormControl error={error} fullWidth>
      {label}
      <TextField
        error={error}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {error && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

CustomInputWith_forwardRef.displayName = "CustomInput";

const CustomInput = forwardRef(CustomInputWith_forwardRef);

export default CustomInput;
