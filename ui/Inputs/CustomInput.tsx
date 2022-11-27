import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import React, { memo, useId } from "react";
import { CommonMuiInputProps } from "@/types/common.type";

const CustomInput = memo(
  ({
    error = false,
    label,
    value,
    onChange,
    helperText = "",
    placeholder = "",
    type,
    startAdornment,
    endAdornment,

  }: CommonMuiInputProps) => {
    const id = useId();
    return (
      <FormControl error={error} fullWidth>
        {label}
        <OutlinedInput
          error={error}
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          startAdornment={startAdornment}
          endAdornment={endAdornment}
        />
        {error && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    );
  }
);

CustomInput.displayName = "CustomInput";

export default CustomInput;
