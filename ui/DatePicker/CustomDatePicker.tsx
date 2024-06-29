import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import { Dayjs } from 'dayjs';

type CustomDatePickerProps = {
    label : string, 
    value :  Dayjs | null,
    onChange : ( s: Dayjs | null) =>void,
    error? : Boolean,
    helperText? : string
}
const CustomDatePicker = ({ label, value, onChange, error, helperText, ...props } : CustomDatePickerProps) => (
  <LocalizationProvider dateAdapter={AdapterDayjs} >
    <DatePicker
      label={label}
      value={value}
      onChange={onChange}
      {...props}
      slotProps={{
        textField: { size: 'small', error :Boolean(error), helperText, style: {width : "100%"} },
      }}
      
    />
  </LocalizationProvider>
);

export default CustomDatePicker;
