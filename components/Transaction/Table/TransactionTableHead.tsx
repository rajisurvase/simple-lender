import {  TableCell, TableRow } from '@mui/material'
import React from 'react'

function stringToColor(string: string) {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
}
export function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}
const TransactionTableHead = () => {
  return (
    <TableRow>
            <TableCell>
             Name
            </TableCell>
            <TableCell align="right">Principal&nbsp;(₹)</TableCell>
            <TableCell align="right">R.O.I&nbsp;(% / Flat)</TableCell>
            <TableCell align="right">Adjusted. Prin&nbsp;(₹)</TableCell>
            <TableCell align="right">Interest Amt&nbsp;(₹)</TableCell>
            <TableCell align="right">Total Amt&nbsp;(₹)</TableCell>
          </TableRow>
  )
}

export default TransactionTableHead