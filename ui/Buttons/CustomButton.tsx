import Button from "@mui/material/Button";
import React, { memo, useEffect, useState } from "react";
import styles from "@/styles/components/button.module.scss";

interface ButtonType  {
  children: JSX.Element;
  variant?: "text" | "outlined" | "contained";
  disabled?: boolean;
  onClick?: () => {};
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  type: "button" | "submit" | "reset";
  endIcon?: JSX.Element;
  startIcon?: JSX.Element;
  loading?: boolean;
};

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
      {children}
    </Button>
  );
};

const CustomButton = memo(CustomButtonMemo);

export default CustomButton;
