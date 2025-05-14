import { useDebounce } from '@/hooks/useDebounce';
// import CustomButton from '@/ui/Buttons/CustomButton'
import DataSaverOnRoundedIcon from '@mui/icons-material/DataSaverOnRounded';
// import CustomInput from '@/ui/Inputs/CustomInput'
import { Box, Button, Stack, TextField, Typography, styled } from '@mui/material'
import React, { useMemo, useState } from 'react'

const FilterComponentStyle = styled(Box)`
 .add_button_style{
   
 }
`
type FilterComponentProps = {
    handleAdd : ()=>void,
    handleChangeValue? : (val : string) =>void
}
const FilterComponent = ({handleAdd, handleChangeValue} : FilterComponentProps) => {
 const [value, setValue] = useState("")
 const searchValue = useDebounce(value, 500)

 const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
  setValue(e.target.value)
 }

 useMemo(()=>{
  handleChangeValue && handleChangeValue(searchValue)
 },[searchValue, handleChangeValue])
 
  return (
    <FilterComponentStyle>
        <Stack display="flex" flexDirection="row" justifyContent="space-between" py={2} columnGap={1} >
        <Box>
            <TextField placeholder='Search by name or email' size='small' 
             value={value || ""}
             onChange={handleChange}
            />
        </Box>
        <Button size='small' onClick={handleAdd} variant='outlined' className='add_button_style' type='button' startIcon={<DataSaverOnRoundedIcon />} >
           Add
          </Button>
        </Stack>
    </FilterComponentStyle>
  )
}

export default FilterComponent