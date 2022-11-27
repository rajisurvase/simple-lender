import Button from "@mui/material/Button";
import React, { memo } from "react";
import styles from "@/styles/components/button.module.scss";


 type ButtonType = {
  children: JSX.Element;
  variant?: "text" | "outlined" | "contained";
  disabled: boolean;
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
}: ButtonType) => (
  <Button
    className={styles.button}
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


const CustomButton = memo(CustomButtonMemo);

export default CustomButton;
