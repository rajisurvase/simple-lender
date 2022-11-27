import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import React, { memo, useId } from "react";
import { MuiInputProps } from "@/types/common.type";



const CustomInput = memo(
  ({
    error = false,
    label,
    value = "",
    onChange = null,
    helperText = "",
    placeholder = ""
  }: MuiInputProps) => {
    const id = useId();
    return (
      <FormControl error={error} fullWidth >
        {label}
        <OutlinedInput
          error={error}
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
        {error && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    );
  }
);

CustomInput.displayName = "CustomInput";

export default CustomInput;
