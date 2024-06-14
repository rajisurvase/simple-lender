import { Table, TableBody, TableContainer, TableHead } from '@mui/material'
import React from 'react'
import TransactionTableHead from './Table/TransactionTableHead'
import TransactionTableBodyRow from './Table/TransactionTableBodyRow'

const TransactionComponent = () => {
  return (
    <TableContainer >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
            <TransactionTableHead />
        </TableHead>
        <TableBody>
           <TransactionTableBodyRow />
           <TransactionTableBodyRow />
           <TransactionTableBodyRow />
           <TransactionTableBodyRow />
           <TransactionTableBodyRow />
           <TransactionTableBodyRow />

        </TableBody>
        </Table>
        </TableContainer>
  )
}

export default TransactionComponent