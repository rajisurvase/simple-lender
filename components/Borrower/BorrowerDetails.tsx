

import { Grid, Typography } from '@mui/material'
import React from 'react'

const BorrowerDetails = () => {
  return (
    <Grid container spacing={2} >
        <Grid item xs={12} sm={6} md={6}  >
            <Grid container spacing={1} >
                <Grid item xs={3} ><Typography fontWeight='bold' >Borrower Name : </Typography></Grid>
                <Grid item xs={9} >Test user</Grid>
            </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={6}  >
            <Grid container spacing={1} >
                <Grid item xs={3} ><Typography fontWeight='bold' >Borrower Name : </Typography></Grid>
                <Grid item xs={9} >Test user</Grid>
            </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={6}  >
            <Grid container spacing={1} >
                <Grid item xs={3} ><Typography fontWeight='bold' >Borrower Name : </Typography></Grid>
                <Grid item xs={9} >Test user</Grid>
            </Grid>
        </Grid>
        
       </Grid>
  )
}

export default BorrowerDetails