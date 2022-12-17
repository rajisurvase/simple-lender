export interface CommonMuiInputProps {
  error?: boolean;
  label?: string;
  value?: string | Number;
  onChange?: () => void;
  helperText?: string;
  placeholder: string;
  type?: "text" | "email" | "password" | "number" | "tel";
  endAdornment?: JSX.Element;
  startAdornment?: JSX.Element;
}



export {};
