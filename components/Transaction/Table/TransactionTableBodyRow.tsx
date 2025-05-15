import { Avatar, Box, Stack, TableCell, TableRow, Typography } from '@mui/material'
import React from 'react'
import { stringAvatar } from './TransactionTableHead'
import dayjs from 'dayjs'
import { ITransactionType } from '@/typescript/types/transcation.type'
import { INTEREST_TYPES } from '@/config/constants'


type TransactionTableBodyRowProps ={
  handleClick? : ()=>void,
  item : ITransactionType
}
const TransactionTableBodyRow = ({handleClick, item}:TransactionTableBodyRowProps) => {

  return (
    <TableRow
    sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor:"pointer" }}
    onClick={handleClick && handleClick}
  >
    <TableCell component="th" scope="row">
    <Stack display="flex" flexDirection="row" columnGap={1} alignItems="center"  >
              <Avatar {...stringAvatar(item.borrower_name.toUpperCase())}   sx={{ width: 35, height: 35 }} />
                 <Box>
                  <Typography variant='body2' fontWeight="bold">{item.borrower_name}</Typography>
                  <Typography variant='body2' fontWeight="bold" >{dayjs(item.transaction_date)?.format("MMM D, YYYY")}</Typography>
                 </Box>
              </Stack>
    </TableCell>
    <TableCell align="right"><Typography variant='body2' fontWeight="bold" color="red" >₹{Number(item.principal_amount)?.toFixed(2)}</Typography></TableCell>
    <TableCell align="right"><Typography variant='body2' fontWeight="bold">{item.interest_value} ({item.interest_type === INTEREST_TYPES.PERCENTAGE ? "%" : ""})</Typography></TableCell>
    <TableCell align="right"><Typography variant='body2' fontWeight="bold" color="green" >₹{Number(8000)?.toFixed(2)}</Typography></TableCell>
    <TableCell align="right"><Typography variant='body2' fontWeight="bold" color="green" >₹{Number(200)?.toFixed(2)}</Typography></TableCell>
    <TableCell align="right"><Typography variant='body2' fontWeight="bold" color="green" >₹{Number(8200)?.toFixed(2)}</Typography></TableCell>
  </TableRow>
  )
}

export default TransactionTableBodyRow