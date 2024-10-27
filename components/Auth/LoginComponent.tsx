"use client";
import { signInMutation } from "@/api/functions/user.api";
import { loginAccessTokenCookieName } from "@/config/constants";
import { QUERYKEY } from "@/config/QueryKey";
import AuthWrapper from "@/layout/wrapper/AuthWrapper";
import { setCookieClient } from "@/lib/_helper";
import { ILoginForm, loginValidationSchema } from "@/schema/auth.schema";
import BackDropCom from "@/ui/BackDrop/BackDropCom";
import CustomAuthButton from "@/ui/Buttons/CustomAuthButton";
import CustomInput from "@/ui/Inputs/CustomInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { CheckBox } from "@mui/icons-material";
import { Box, Stack, Typography, styled } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { setCookie } from "nookies";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useMutation } from "react-query";

// Correct the styled component name and fix the text-align property
const SignStyle = styled(Box)`
  .sign_in_input {
    padding: 0.2rem 0rem;
  }
  ,
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
`;

const LoginComponent = () => {
  const router = useRouter()
  const [isRediecting , setIsRedirecting] = useState(false)
  const { control, handleSubmit } = useForm<ILoginForm>({
    resolver: yupResolver(loginValidationSchema),
  });

  const {mutateAsync, isLoading} = useMutation({
    mutationFn : signInMutation,
    mutationKey : [QUERYKEY?.auth?.SIGNIN],
    onSuccess :(response)=>{
         if(response?.status ===200){
              setCookieClient(loginAccessTokenCookieName, response?.data?.token)
              setIsRedirecting(true)
              router.push("/")  
         }
    }
  })

  const onSubmit = handleSubmit((data)=>{
    mutateAsync(data)
  })

  return (
    <AuthWrapper
      title="Hello! Welcome Back"
      isShowBottom
      ButtonTxt="Sign up"
      leftText="Don’t have an Account?"
      path="/auth/signup"
    >
      <BackDropCom open={isRediecting} />
      <form onSubmit={onSubmit}>
        <SignStyle>
          <Box className="sign_in_input">
            <Controller
              name="email"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <CustomInput
                  placeholder="Enter email address"
                  label="Email"
                  {...field}
                  error={Boolean(error?.message)}
                  helperText={error?.message}
                />
              )}
            />
          </Box>
          <Box className="sign_in_input">
            <Controller
              name="password"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <CustomInput
                  type="password"
                  placeholder="**********"
                  label="Password"
                  {...field}
                  error={Boolean(error?.message)}
                  helperText={error?.message}
                />
              )}
            />
          </Box>

          <Stack direction="row" justifyContent="space-between" mt={1}>
            <Stack direction="row" gap={1}>
              <CheckBox />
              <Typography variant="body1">Remember me</Typography>
            </Stack>

            <Link href={"/auth/forget-password"}>Forget Password?</Link>
          </Stack>
          <Box className="sign_in_input">
            <CustomAuthButton type="submit" loading={isLoading} >
              <Typography>Login</Typography>
            </CustomAuthButton>
          </Box>
        </SignStyle>
      </form>
    </AuthWrapper>
  );
};

export default LoginComponent;
