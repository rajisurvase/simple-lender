// "use client"

import DataSaverOnRoundedIcon from '@mui/icons-material/DataSaverOnRounded';
import { Box, Button, Stack, TextField, styled } from '@mui/material'
import React from 'react'

const FilterTransactionsStyle = styled(Box)`
  padding: 0px 1rem;
 .add_button_style{
   
 }
`
type FilterTransactionsProps = {
    handleAdd : ()=>void
}
const FilterTransactions = ({handleAdd} : FilterTransactionsProps) => {
  return (
    <FilterTransactionsStyle>
        <Stack display="flex" flexDirection="row" justifyContent="space-between" py={2} columnGap={1} >
        <Box>
            <TextField placeholder='Search by name or email' size='small'  />
        </Box>
        <Button size='small' onClick={handleAdd} variant='outlined' className='add_button_style' type='button' startIcon={<DataSaverOnRoundedIcon />} >
           Add
          </Button>
        </Stack>
    </FilterTransactionsStyle>
  )
}

export default FilterTransactions