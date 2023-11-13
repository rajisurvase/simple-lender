"use client"

import { useAppDispatch } from '@/hooks/useAppDispatch'
import { setLoginData } from '@/reduxtoolkit/slices/userSlice'
import { Button } from '@mui/material'
import { useRouter } from 'next/navigation';
import React from 'react'

const Login = () => {
    const dispatch = useAppDispatch();
    const router = useRouter()

    const handleLogin = ()=>{
        const userData = {
            email : "example@yopmail.com",
            password : "12345678"
        }
        dispatch(setLoginData(userData as any))
        router.push("/")
    }

  return (
    <div>
        <h1>Login </h1>
        <Button onClick={handleLogin} >Login</Button>
    </div>
  )
}

export default Login