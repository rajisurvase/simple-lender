"use client";
import AuthWrapper from "@/layout/wrapper/AuthWrapper";
import {
  IResetPassForm,
  resetPasswordValidationSchema,
} from "@/schema/auth.schema";
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

const ResetPasswordComponent = () => {
  const router = useRouter();
  const { control, handleSubmit } = useForm<IResetPassForm>({
    resolver: yupResolver(resetPasswordValidationSchema),
  });

  const onSubmit = async () => {
    router.push("/auth/signin");
  };

  return (
    <AuthWrapper title="Reset Your Password" isShowBottom={false}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SignStyle>
          <Box className="sign_in_input">
            <Controller
              name="password"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <CustomInput
                  placeholder="Enter new password"
                  label="New Password"
                  {...field}
                  error={Boolean(error?.message)}
                  helperText={error?.message}
                />
              )}
            />
          </Box>
          <Box className="sign_in_input">
            <Controller
              name="confirm_password"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <CustomInput
                  type="password"
                  placeholder="**********"
                  label="Confirm Password"
                  {...field}
                  error={Boolean(error?.message)}
                  helperText={error?.message}
                />
              )}
            />
          </Box>

          <Box className="sign_in_input">
            <CustomAuthButton type="submit">
              <Typography>RESET PASSWORD</Typography>
            </CustomAuthButton>
          </Box>
        </SignStyle>
      </form>
    </AuthWrapper>
  );
};

export default ResetPasswordComponent;
