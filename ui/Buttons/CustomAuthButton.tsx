"use client";

import { ButtonType } from "@/typescript/interface/common.interface";
import { Box, styled } from "@mui/material";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { memo, useEffect, useMemo, useState } from "react";

const CustomAuthButtonStyle = styled(Box)`
   padding : 0.5rem 0rem;
  .auth_button_style {
    background-color: #000000;
    color: #fff;
    width: 100%;
    transition: width 0.3s;
  }

  &:hover {
  .auth_button_style{
    width: 100%;
    background-color : #D289FF
  }
  }
`

const CustomButtonMemo = ({
  children,
  variant = "contained",
  disabled = false,
  onClick,
  color = "inherit",
  size = "medium",
  fullWidth = false,
  endIcon,
  startIcon,
  type,
  loading = false
}: ButtonType) => {


  return (
    <CustomAuthButtonStyle>
    <Button
      className={"auth_button_style"}
      variant={variant}
      disabled={disabled || loading}
      disableElevation
      onClick={onClick}
      color={color}
      size={size}
      fullWidth={fullWidth}
      endIcon={endIcon}
      startIcon={startIcon}
      type={type}
    >
      {loading ? <CircularProgress size={20} color="inherit" /> : children}
    </Button>
    </CustomAuthButtonStyle>
  );
};

const CustomAuthButton = memo(CustomButtonMemo);

export default CustomAuthButton;
