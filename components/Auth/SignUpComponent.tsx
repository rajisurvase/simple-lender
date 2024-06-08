"use client";
import AuthWrapper from "@/layout/wrapper/AuthWrapper";
import { ISignupForm, signupValidationSchema } from "@/schema/auth.schema";
import CustomAuthButton from "@/ui/Buttons/CustomAuthButton";
import CustomInput from "@/ui/Inputs/CustomInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Typography, styled } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
import { Controller, useForm } from "react-hook-form";

// Correct the styled component name and fix the text-align property
const SignStyle = styled(Box)`
  .sign_in_input {
    padding: 0.2rem 0rem;
  }
`;

const SignUpComponent = () => {
  const router = useRouter()
  const { control, handleSubmit } = useForm<ISignupForm>({
    resolver: yupResolver(signupValidationSchema),
  });

  const onSubmit = async () => {
    router.push("/auth/signin")
  };
  return (
    <AuthWrapper
      title="Sign up to get started!"
      isShowBottom
      ButtonTxt="Login"
      leftText="Already have an Account?"
      path="/auth/signin"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <SignStyle>
          <Box className="sign_in_input">
            <Controller
              name="firstName"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <CustomInput
                  placeholder="First name"
                  label="First name"
                  {...field}
                   error={Boolean(error?.message)}
                   helperText={error?.message}
                  />
              )}
            />
          </Box>
          <Box className="sign_in_input">
          <Controller
              name="lastName"
              control={control}
              render={({ field, fieldState: { error } }) => (
            <CustomInput placeholder="Last name" label="Last name"
              {...field}
              error={Boolean(error?.message)}
              helperText={error?.message}
            />
          )}
          />
          </Box>
          <Box className="sign_in_input">
            <Controller
              name="email"
              control={control}
              render={({ field, fieldState: { error } }) => (
            <CustomInput placeholder="Email" label="Email"
             {...field}
             error={Boolean(error?.message)}
             helperText={error?.message}
            />
          )}
          />
          </Box>
          <Box className="sign_in_input">
            <Controller
              name="phone"
              control={control}
              render={({ field, fieldState: { error } }) => (
            <CustomInput placeholder="Phone number" label="Phone number"
             {...field}
             type="number"
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
            <CustomInput placeholder="**********" label="Password" 
            type="password"

              {...field}
              error={Boolean(error?.message)}
              helperText={error?.message}
            />
          )}
          />
          </Box>
          <Box className="sign_in_input">
            <Controller
              name="confirmPassword"
              control={control}
              render={({ field, fieldState: { error } }) => (
            <CustomInput placeholder="**********" label="Confirm Password"
              {...field}
              type="password"
              error={Boolean(error?.message)}
              helperText={error?.message}
             />
            )}
            />
          </Box>
          <Box className="sign_in_input">
            <CustomAuthButton type="submit">
              <Typography>Sign up</Typography>
            </CustomAuthButton>
          </Box>
        </SignStyle>
      </form>
    </AuthWrapper>
  );
};

export default SignUpComponent;
