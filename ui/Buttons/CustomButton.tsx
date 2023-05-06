"use client";

import styles from "@/styles/components/button.module.scss";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { memo, useEffect, useState } from "react";
import { ButtonType } from "@/interface/common.interface";


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
  const [className, setClassName] = useState(styles.button);

  useEffect(() => {
    if (variant === "text") {
      setClassName(styles.buttonText);
    } else if (variant === "outlined") {
      setClassName(styles.buttonOutlined);
    } else {
      setClassName(styles.button);
    }
  }, [variant]);

  return (
    <Button
      className={className}
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
      {loading && <CircularProgress size={15} color="inherit" />}
      {children}
    </Button>
  );
};

const CustomButton = memo(CustomButtonMemo);

export default CustomButton;
