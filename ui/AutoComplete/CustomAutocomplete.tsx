// CustomAutocomplete.jsx

import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import CustomInput from '../Inputs/CustomInput';

type CustomAutocompleteProps = {
    options : {label :string}[]
    label : string
}

const CustomAutocomplete = ({ options, label, ...otherProps } : CustomAutocompleteProps) => {
  return (
    <Autocomplete
      {...otherProps}
      options={options}
      getOptionLabel={(option) => option?.label}
      renderInput={(params) => <CustomInput {...params}
      placeholder={label}
    //   label={label}
       />}
    />
  );
};

export default CustomAutocomplete;
