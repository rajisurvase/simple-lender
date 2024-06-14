import TransactionComponent from '@/components/Transaction'
import { Card } from '@mui/material'
import React from 'react'

const page = () => {
  return(
    <Card style={{ margin: "1rem" }}>
      <TransactionComponent />
    </Card>
  )
}

export default page