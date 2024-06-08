import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import {  forwardRef, useId } from "react";
import { CommonMuiInputProps } from "@/typescript/interface/common.interface";
import { Typography } from "@mui/material";

const CustomInputWith_forwardRef = ({
  error = false,
  label,
  value,
  onChange,
  helperText = "",
  placeholder = "",
  type,
  ...props
}: CommonMuiInputProps) => {
  const id =useId()
  return (
    <FormControl error={error} fullWidth>
      <Typography textAlign="left" >{label}</Typography>
      <TextField
              {...props}
              size="small"
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
