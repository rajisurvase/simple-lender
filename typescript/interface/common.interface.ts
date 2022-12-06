export interface CommonMuiInputProps  {
    error: boolean;
    label: string;
    value: string;
    onChange: () => void;
    helperText?: string;
    placeholder: string;
    type: "text" | "email" | "password" | "number";
    endAdornment?: JSX.Element;
    startAdornment?: JSX.Element;
  };

export {}