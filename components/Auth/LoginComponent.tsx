"use client";
import AuthWrapper from "@/layout/wrapper/AuthWrapper";
import { ILoginForm, loginValidationSchema } from "@/schema/auth.schema";
import CustomAuthButton from "@/ui/Buttons/CustomAuthButton";
import CustomInput from "@/ui/Inputs/CustomInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { CheckBox } from "@mui/icons-material";
import { Box, Stack, Typography, styled } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { Controller, useForm } from "react-hook-form";

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
  const router = useRouter();
  const { control, handleSubmit } = useForm<ILoginForm>({
    resolver: yupResolver(loginValidationSchema),
  });

  const onSubmit = async () => {
    router.push("/");
  };

  return (
    <AuthWrapper
      title="Hello! Welcome Back"
      isShowBottom
      ButtonTxt="Sign up"
      leftText="Don’t have an Account?"
      path="/auth/signup"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
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
            <CustomAuthButton type="submit">
              <Typography>Login</Typography>
            </CustomAuthButton>
          </Box>
        </SignStyle>
      </form>
    </AuthWrapper>
  );
};

export default LoginComponent;
