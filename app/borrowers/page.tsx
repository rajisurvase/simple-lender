"use client"

import BorrowersTable from '@/components/Borrower/BorrowersTable'
import { Box, Button, Card } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Link from 'next/link';
import React from 'react'

const page = () => {
  return (
    <Card style={{ margin: "1rem" }} >
    <Box my={1} textAlign='right' >
      <Link href="/borrowers/create" >
         <Button variant='contained' sx={{borderRadius : '1.5rem', backgroundColor : "#7D8CC4", textTransform:"none"}} endIcon={<AddIcon  sx={{fontSize:'small'}} />} >Add Borrower  </Button>
      </Link>
    </Box>
  <BorrowersTable />
</Card>
  )
}

export default page