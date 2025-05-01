"use client";
import { signUpMutation } from "@/api/functions/user.api";
import { QUERYKEY } from "@/config/QueryKey";
import AuthWrapper from "@/layout/wrapper/AuthWrapper";
import { ISignupForm, signupValidationSchema } from "@/schema/auth.schema";
import CheckCircleOutlineSharpIcon from '@mui/icons-material/CheckCircleOutlineSharp';
import CustomAuthButton from "@/ui/Buttons/CustomAuthButton";
import CustomInput from "@/ui/Inputs/CustomInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Typography, styled } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import MuiModalWrapper from "../Model/MuiModalWrapper";
import ConfirmationComponent from "../Model/ConfirmationComponent";
import { ROUTES } from "@/config/routes";

// Correct the styled component name and fix the text-align property
const SignStyle = styled(Box)`
  .sign_in_input {
    padding: 0.2rem 0rem;
  }
`;

const SignUpComponent = () => {
  const [isConfirm, setIsConfirm]=useState(false)
  const router = useRouter()


  const handleClose = useCallback(()=>{
    setIsConfirm(false)
    router.push(ROUTES.LOGIN)
  },[setIsConfirm])

  const { control, handleSubmit } = useForm<ISignupForm>({
    resolver: yupResolver(signupValidationSchema),
  });

  const {mutateAsync, isLoading} = useMutation({
    mutationFn : signUpMutation,
    mutationKey : [QUERYKEY?.auth?.SIGNUP],
    onSuccess:()=>{
        setIsConfirm(true)
    }
  })

  const onSubmit =handleSubmit((data)=> {
    mutateAsync(data)
  });

  return (
    <AuthWrapper
      title="Sign up to get started!"
      isShowBottom
      ButtonTxt="Login"
      leftText="Already have an Account?"
      path={ROUTES.LOGIN}
    >
      <form onSubmit={onSubmit}>
        <SignStyle>
          <Box className="sign_in_input">
            <Controller
              name="first_name"
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
              name="last_name"
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
              name="confirm_password"
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
            <CustomAuthButton type="submit" 
             loading= { isLoading}
            >
              <Typography>Sign up</Typography>
            </CustomAuthButton>
          </Box>
        </SignStyle>
      </form>
      <MuiModalWrapper open={isConfirm} title={``}  onClose={handleClose} >
       <ConfirmationComponent 
       title="Verification confirmation."
       description="An email has been sent to your address. Please verify that you received it at your earliest convenience."

       icon={<CheckCircleOutlineSharpIcon sx={{ color: 'blue',fontSize:"3rem" }}  />}
       handleConfirmationModel={handleClose}
        />
      </MuiModalWrapper>
    </AuthWrapper>
  );
};

export default SignUpComponent;
