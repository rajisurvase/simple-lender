import { CommonMuiInputProps } from "@/interface/common.interface";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import {  forwardRef, useId } from "react";

const CustomInputWith_forwardRef = ({
  error = false,
  label,
  value,
  onChange,
  helperText = "",
  placeholder = "",
  type,
  // startAdornment="",
  // endAdornment
}: CommonMuiInputProps) => {
  const id = useId();
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
        // startAdornment={startAdornment}
        // endAdornment={endAdornment}
      />
      {error && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

CustomInputWith_forwardRef.displayName = "CustomInput";

const CustomInput = forwardRef(CustomInputWith_forwardRef);

export default CustomInput;
