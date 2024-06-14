"use client"

import assest from '@/json/assest'
import { Box, Typography, styled } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AuthWrapperStyle = styled(Box)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0; // optional background color for better visualization
`

const CenteredBox = styled(Box)`
  padding: 2rem 3rem ;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
  text-align : center;
  .auth_page_heading {
   fontsize : 0.1rem;
   padding : 0.5rem 0rem
  }
  .bottomActionStyle {
  padding : 0.5rem 0rem
  .link_style {
  color: #0000ff; /* Blue color */
  text-decoration: none; /* Remove underline */
  font-weight: bold; /* Make the text bold */
  transition: color 0.3s, text-decoration 0.3s; /* Smooth transition for hover effects */
}

.link_style:hover {
  color: #000000; /* Change color on hover */
  text-decoration: underline; /* Underline text on hover */
}
  } 
`

type AuthWrapperProps = {
    children : React.ReactNode,
    title : string,
    isShowBottom : boolean,
    leftText? : string,
    ButtonTxt? : string,
    path? : string
}

const AuthWrapper = ({children, title, isShowBottom,path,ButtonTxt,leftText} :AuthWrapperProps) => {
  return (
    <AuthWrapperStyle>
      <CenteredBox>
        <Box className="auth_logo" >
          <Image
           src={assest?.authLogo}
           alt="logo"
           height={137}
           width={176}
          />
        </Box>
        <Typography variant='h4' className='auth_page_heading' >{title}</Typography>
         {children}
         {isShowBottom && 
         
         <Box className="bottomActionStyle">
          <Typography>{leftText} <Link href={path || "/"} className='link_style' >{ButtonTxt}</Link></Typography>
        </Box>}
         
      </CenteredBox>
    </AuthWrapperStyle>
  )
}

export default AuthWrapper
