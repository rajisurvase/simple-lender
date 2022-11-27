export type CommonButtonType = {
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
  type?: "button" | "submit" | "reset";
  endIcon?: JSX.Element;
  startIcon?: JSX.Element;
  loading?: boolean;
};

export type CommonMuiInputProps = {
  error: boolean;
  label: string;
  value: string;
  onChange: any;
  helperText?: string;
  placeholder: string;
};
