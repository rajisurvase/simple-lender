import assest from '@/json/assest'
import { Box } from '@mui/material'
import Image from 'next/image'
import React from 'react'

type MainLogoComponentProps = {
 width : number,
 height : number
}
const MainLogoComponent = ({width=110, height=66 } : MainLogoComponentProps) => {
  return (
    <Box py={2} textAlign="center" >
    <Image
     src={assest?.whitelogo}
     alt="assest?.whitelogo"
     width={width}
     height={height}
    />
  </Box>
  )
}

export default MainLogoComponent