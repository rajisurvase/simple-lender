"use client"

import { PERIODS } from '@/config/constants';
import { Card,  Grid, MenuItem, Select, SelectChangeEvent, TextField, Typography } from '@mui/material'
import { ChangeEvent, useEffect, useState } from 'react';


export default function Home() {

  const [formValue, setFormValue] = useState({
    amount: '',
    rate: '',
    duration: ''
  })
  const [checkDuration, setCheckDuration] = useState<number>(1);
  const [labelName, setLabelName] = useState<string>('')

  const handleChange = (event : SelectChangeEvent<number>) => {
    setCheckDuration(event.target.value as unknown as number);
  };

  const handleInputChange = (event : ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValue((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };




const TotalInterestEarned =()=>{
return Number(formValue.amount) * (1 + Number(formValue.rate) / 100 * Number(formValue.duration) / checkDuration) - Number(formValue.amount)
}
const Totalvalue =()=>{
 return Number(formValue.amount) * (1 +Number( formValue.rate) / 100 * Number(formValue.duration) / checkDuration)
}

useEffect(() => {
  if(PERIODS?.length){
    setLabelName(PERIODS.find(s => s.value === checkDuration)?.name as string);
  }
}, [checkDuration])

  return (

      <Card style={{ margin: "1rem" }} >
        <Grid container >
          <Grid item xs={12} md={6} p={3} >
            <Grid container sx={{ alignItems: "center", py: 1 }}>
              <Grid item xs={5} >
                <Typography pr={2}>Principle Amount  </Typography>
              </Grid>
              <Grid item xs={2} >
                <Typography> : </Typography>
              </Grid>
              <Grid item xs={5} >
                <TextField fullWidth size='small' type='number' name="amount" value={formValue.amount} onChange={handleInputChange} variant="outlined" />
              </Grid>

            </Grid>
            <Grid container sx={{ alignItems: "center", py: 1 }}>
              <Grid item xs={5}><Typography pr={2}>Rate of Interest (%)  </Typography></Grid>
              <Grid item xs={2} ><Typography> : </Typography></Grid>
              <Grid item xs={5} >
                <TextField fullWidth size='small' type='number' value={formValue.rate} name="rate" onChange={handleInputChange} variant="outlined" />
              </Grid>
            </Grid>
            <Grid container sx={{ alignItems: "center", py: 1 }} >
              <Grid item xs={5} ><Typography pr={2}>Duration </Typography></Grid>
              <Grid item xs={2} ><Typography pr={2}> : </Typography></Grid>
              <Grid item xs={5} >
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={checkDuration}
                    size="small"
                    onChange={handleChange}
                    fullWidth
                  >
                    {PERIODS?.map((item, index) => (
                      // eslint-disable-next-line react/no-array-index-key
                      <MenuItem key={index} value={item?.value}>{item?.name}</MenuItem>
                    ))}
                  </Select>
                </Grid>
            </Grid>

            <Grid container sx={{ alignItems: "center", py: 1 }} >
              <Grid item xs={5} ><Typography pr={2}>Time Period {labelName}  </Typography></Grid>
              <Grid item xs={2} ><Typography> : </Typography></Grid>
              <Grid item xs={5} ><TextField fullWidth size='small' type='number' value={formValue.duration} name="duration" onChange={handleInputChange} variant="outlined" /></Grid>
            </Grid>

          </Grid>
          <Grid item xs={12} md={6} p={3} >
            <div>
              <h4>Interest Earned ₹{TotalInterestEarned()?.toFixed(2)} </h4>
              <h4>Principal Amount ₹ {formValue.amount ? formValue.amount : 0} </h4>
              <h4>Total Value ₹ {Totalvalue()?.toFixed(2)}
             </h4>          
            </div>
          </Grid>
        </Grid>

      </Card>
  )
}