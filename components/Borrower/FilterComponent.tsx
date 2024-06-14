import CustomButton from '@/ui/Buttons/CustomButton'
import DataSaverOnRoundedIcon from '@mui/icons-material/DataSaverOnRounded';
// import CustomInput from '@/ui/Inputs/CustomInput'
import { Box, Button, Stack, TextField, Typography, styled } from '@mui/material'
import React from 'react'

const FilterComponentStyle = styled(Box)`
 .add_button_style{
   
 }
`
type FilterComponentProps = {
    handleAdd : ()=>void
}
const FilterComponent = ({handleAdd} : FilterComponentProps) => {
  return (
    <FilterComponentStyle>
        <Stack display="flex" flexDirection="row" justifyContent="space-between" py={2} columnGap={1} >
        <Box>
            <TextField placeholder='Search by name or email' size='small'  />
        </Box>
        <Button size='small' onClick={handleAdd} variant='outlined' className='add_button_style' type='button' startIcon={<DataSaverOnRoundedIcon />} >
           Add
          </Button>
        </Stack>
    </FilterComponentStyle>
  )
}

export default FilterComponent