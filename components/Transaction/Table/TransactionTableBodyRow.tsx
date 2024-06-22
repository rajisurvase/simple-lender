import { Avatar, Box, Stack, TableCell, TableRow, Typography } from '@mui/material'
import React from 'react'
import { stringAvatar } from './TransactionTableHead'
import dayjs from 'dayjs'


type TransactionTableBodyRowProps ={
  handleClick? : ()=>void
}
const TransactionTableBodyRow = ({handleClick}:TransactionTableBodyRowProps) => {
  return (
    <TableRow
    sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor:"pointer" }}
    onClick={handleClick && handleClick}
  >
    <TableCell component="th" scope="row">
    <Stack display="flex" flexDirection="row" columnGap={1} alignItems="center"  >
              <Avatar {...stringAvatar('Kent Dodds')}   sx={{ width: 35, height: 35 }} />
                 <Box>
                  <Typography variant='body2' fontWeight="bold">Name</Typography>
                  <Typography variant='body2' fontWeight="bold" >{dayjs()?.format("MMM D, YYYY h:mm A")}</Typography>
                 </Box>
              </Stack>
    </TableCell>
    <TableCell align="right">₹10000</TableCell>
    <TableCell align="right">2 (Flat)</TableCell>
    <TableCell align="right">₹8000</TableCell>
    <TableCell align="right">₹200</TableCell>
    <TableCell align="right">₹8200</TableCell>
  </TableRow>
  )
}

export default TransactionTableBodyRow