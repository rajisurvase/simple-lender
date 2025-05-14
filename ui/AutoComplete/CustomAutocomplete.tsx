import React from "react";
import Autocomplete, { AutocompleteProps } from "@mui/material/Autocomplete";
// import CustomInput from '../Inputs/CustomInput';

// type CustomAutocompleteProps = {
//     options : {label :string}[]
//     label : string
//     onInputChange? :(event: React.SyntheticEvent, value: string, reason: AutocompleteInputChangeReason) => void,
//     inputValue? :string
// }

// const CustomAutocomplete = ({ options, label,inputValue,onInputChange, ...otherProps } : CustomAutocompleteProps) => {
function CustomAutocomplete<
  T,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false
>(props: AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>) {
  
  return <Autocomplete {...props} />;
}

export default CustomAutocomplete;
