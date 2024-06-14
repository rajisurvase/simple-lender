import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CustomInput from "@/ui/Inputs/CustomInput";
import CustomAuthButton from "@/ui/Buttons/CustomAuthButton";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IOtpValidationSchema, otpValidationSchema } from "@/schema/auth.schema";
import { useRouter } from "next/navigation";


const OtpVerification = () => {
    const router = useRouter();
    const { control, handleSubmit } = useForm<IOtpValidationSchema>({
        resolver: yupResolver(otpValidationSchema),
      });
    
    const onSubmit = async () => {
        router.push("/auth/reset-password");
    };
    
  return (
    <form onSubmit={handleSubmit(onSubmit)}> 
      <Stack alignItems="center" justifyContent="center">
        <MailOutlineIcon fontSize="large" sx={{ fontSize: "5rem" }} />
        <Typography variant="h6" pb={2}>
          An OTP has been sent on your email successfully.
        </Typography>
        <Stack sx={{ width: "100%" }} rowGap={1} pb={3} >
          <Controller
              name="otp"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <CustomInput
                placeholder="Enter otp"                 
                  {...field}
                  error={Boolean(error?.message)}
                  helperText={error?.message}
                />
              )}
            />
          <CustomAuthButton fullWidth type="submit">
            <Typography>Submit</Typography>
          </CustomAuthButton>
        </Stack>
      </Stack>
    </form>
  );
};

export default OtpVerification;
