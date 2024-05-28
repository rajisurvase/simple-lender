export interface CommonMuiInputProps {
  error?: boolean;
  label?: string;
  value?: string | Number | File | File[];
  onChange?: () => void;
  helperText?: string;
  placeholder: string;
  type?: "text" | "email" | "password" | "number" | "tel" | "file";
  endAdornment?: JSX.Element;
  startAdornment?: JSX.Element;
}

export interface IFormInput {
  email: string;
  password: string;
  // fullName: string;
  userName: string;
  username? : string;
  firstName : string;
  lastName : string;
  confirmPassword : string;
  phone : string;
  role : string[]

}

export interface ButtonType {
  children: JSX.Element;
  variant?: "text" | "outlined" | "contained";
  disabled?: boolean;
  onClick?: () => void;
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
}

export { };

