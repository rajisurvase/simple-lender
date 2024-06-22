import { Stack, TableCell, TableRow, Typography } from '@mui/material'
import dayjs from 'dayjs'
import React from 'react'

const EntriesTableRow = () => {
  return (
    <TableRow
    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    // onClick={handleClick && handleClick}
  >
    <TableCell component="th" scope="row">
    <Stack display="flex" flexDirection="row" columnGap={1} alignItems="center"  >
      <Typography variant='body2' fontWeight="bold">{dayjs()?.format("MMM D, YYYY h:mm A")}</Typography>          
     </Stack>
    </TableCell>
    <TableCell align="right"><Typography variant='body2' color="red" fontWeight="bold" >-</Typography></TableCell>
    <TableCell align="right"><Typography variant='body2' color="green" fontWeight="bold" >₹800</Typography></TableCell>
  </TableRow>
  )
}

export default EntriesTableRow