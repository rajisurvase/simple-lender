import { TableCell, TableRow } from '@mui/material'
import React from 'react'

const EntriesHead = () => {
  return (
    <TableRow>
            <TableCell>
             ENTRIES
            </TableCell>
            <TableCell align="right">YOU GAVE&nbsp;(₹)</TableCell>
            <TableCell align="right">YOU GOT&nbsp;(₹)</TableCell>
    </TableRow>
  )
}

export default EntriesHead