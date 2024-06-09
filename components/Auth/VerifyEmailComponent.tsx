"use client";
import AuthWrapper from "@/layout/wrapper/AuthWrapper";
import {
  IForgetPassForm,
  forgetPasswordValidationSchema,
} from "@/schema/auth.schema";
import CustomAuthButton from "@/ui/Buttons/CustomAuthButton";
import CustomInput from "@/ui/Inputs/CustomInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Stack, Typography, styled } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useCallback, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import MuiModalWrapper from "../Model/MuiModalWrapper";
import CustomButton from "@/ui/Buttons/CustomButton";

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

const VerifyEmailComponent = () => {
  const router = useRouter();
  const [isMailSent, setIsMailSent] = useState(false);

  const toggleMailSentModal = useCallback(() => {
    setIsMailSent((prevValue) => !prevValue);
  }, []);

  const { control, handleSubmit } = useForm<IForgetPassForm>({
    resolver: yupResolver(forgetPasswordValidationSchema),
  });

  const onSubmit = async () => {
    toggleMailSentModal();
  };

  return (
    <>
      <AuthWrapper title="VERIFY YOUR EMAIL!" isShowBottom={false}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <SignStyle>
            <Box className="sign_in_input">
              <Controller
                name="email"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <CustomInput
                    placeholder="Enter email address"
                    label="Registered Email"
                    {...field}
                    error={Boolean(error?.message)}
                    helperText={error?.message}
                  />
                )}
              />
            </Box>

            <Box className="sign_in_input">
              <CustomAuthButton type="submit">
                <Typography>Continue</Typography>
              </CustomAuthButton>
            </Box>
          </SignStyle>
        </form>
      </AuthWrapper>

      {isMailSent && (
        <MuiModalWrapper
          title=""
          open={isMailSent}
          onClose={toggleMailSentModal}
        >
          <Stack alignItems="center" justifyContent="center" padding={4}>
            <MailOutlineIcon
              sx={{ height: "96px", width: "96px", display: "inline-block" }}
            />

            <Typography variant="h5" mt={3}>
              An OTP has been sent on your email successfully
            </Typography>

            <Stack direction="row" justifyItems="end">
              <CustomAuthButton type="button" onClick={toggleMailSentModal}>
                <Typography>Ok</Typography>
              </CustomAuthButton>
            </Stack>
          </Stack>
        </MuiModalWrapper>
      )}
    </>
  );
};

export default VerifyEmailComponent;
