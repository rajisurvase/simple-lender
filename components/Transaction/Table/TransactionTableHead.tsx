import {  TableCell, TableRow, Typography } from '@mui/material'
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
            <TableCell  >
            <Typography variant="body1" fontWeight="bold"  >Name</Typography>
            </TableCell>
            <TableCell align="right"><Typography variant="body1" fontWeight="bold"  >Principal&nbsp;(₹)</Typography></TableCell>
            <TableCell align="right"><Typography variant="body1" fontWeight="bold"  >R.O.I&nbsp;(%/Flat)</Typography></TableCell>
            <TableCell align="right"><Typography variant="body1" fontWeight="bold"  >Adjusted. Prin&nbsp;(₹)</Typography></TableCell>
            <TableCell align="right"><Typography variant="body1" fontWeight="bold"  >Interest Amt&nbsp;(₹)</Typography></TableCell>
            <TableCell align="right"><Typography variant="body1" fontWeight="bold"  >Total Amt&nbsp;(₹)</Typography></TableCell>
          </TableRow>
  )
}

export default TransactionTableHead