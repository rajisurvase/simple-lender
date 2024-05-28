"use client";

import { useState } from "react";

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  Box,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
  Typography
} from "@mui/material";
// import { useMutation } from "react-query";
import { signUpMutation } from "@/api/functions/user.api";
import useNotiStack from "@/hooks/useNotistack";
import CustomButton from "../CustomButton/CustomButton";
// import { IFormInput } from "@/interface/common.interface";
import { useRouter } from "next/navigation";
import Link from "next/link";

// ... (your other imports)

const schema = yup.object().shape({
  email: yup.string().email().trim().required().label("Email"),
  firstName: yup.string().trim().required().label("First Name"),
  lastName: yup.string().trim().required().label("Last Name"),
  password: yup.string().trim().min(6).required().label("Password"),
  userName: yup.string().trim().required().label("User Name"),
  confirmPassword: yup
    .string()
    .trim()
    // .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required")
});

const SingUpComponent = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState<Boolean>(false);
  const { toastSuccess, toastError } = useNotiStack();
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema)
  });

  // const { mutateAsync: mutateSignUp, isLoading } = useMutation({
  //   mutationFn: signUpMutation,
  //   mutationKey: ["signUp"],
  //   onSuccess: (res: any) => {
  //     if (res?.message) {
  //       toastSuccess(res?.message);
  //       router.push("/auth/signin");
  //     }
  //   },
  //   onError : ()=>{
  //     toastError("Something went wrong");
  //   }
  // });

  const onSubmit = async () => {
    // mutateSignUp({ ...data, phone: "7262865076", role: ["admin"] });
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Grid container>
        <Grid item sm={1} xs={0} />
        <Grid
          item
          sm={10}
          xs={12}
          sx={{ background: "#CEF3FF", borderRadius: "2rem" }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box textAlign="center" py={10}>
              <Typography variant="h6">LOGO</Typography>
              <Typography variant="h6" py={2}>
                Enter your credentials to access your account
              </Typography>
              <Grid container>
                <Grid item md={4} sm={2} xs={0} />
                <Grid item md={4} xs={12} sm={8}>
                  <Box p={1.5}>
                    <Controller
                      name="firstName"
                      control={control}
                      render={({ field, fieldState: { error } }) => (
                        <TextField
                          fullWidth
                          type="text"
                          size="small"
                          id="outlined-basic"
                          placeholder="First Name"
                          variant="outlined"
                          {...field}
                          helperText={error?.message}
                          error={Boolean(error?.message)}
                        />
                      )}
                    />
                  </Box>

                  <Box p={1.5}>
                    <Controller
                      name="lastName"
                      control={control}
                      render={({ field, fieldState: { error } }) => (
                        <TextField
                          fullWidth
                          type="text"
                          size="small"
                          id="outlined-basic"
                          placeholder="Last Name"
                          variant="outlined"
                          {...field}
                          helperText={error?.message}
                          error={Boolean(error?.message)}
                        />
                      )}
                    />
                  </Box>
                  <Box p={1.5}>
                    <Controller
                      name="userName"
                      control={control}
                      render={({ field, fieldState: { error } }) => (
                        <TextField
                          fullWidth
                          type="text"
                          size="small"
                          id="outlined-basic"
                          placeholder="User Name"
                          variant="outlined"
                          {...field}
                          helperText={error?.message}
                          error={Boolean(error?.message)}
                        />
                      )}
                    />
                  </Box>

                  <Box p={1.5}>
                    <Controller
                      name="email"
                      control={control}
                      render={({ field, fieldState: { error } }) => (
                        <TextField
                          fullWidth
                          type="email"
                          size="small"
                          id="outlined-basic"
                          placeholder="lender@gmail.com"
                          variant="outlined"
                          {...field}
                          helperText={error?.message}
                          error={Boolean(error?.message)}
                        />
                      )}
                    />
                  </Box>

                  <Box p={1.5}>
                    <Controller
                      name="password"
                      control={control}
                      render={({ field, fieldState: { error } }) => (
                        <FormControl size="small" fullWidth variant="outlined">
                          <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? "text" : "password"}
                            placeholder="******"
                            {...field}
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  size="small"
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                  edge="end"
                                >
                                  {showPassword ? (
                                    <VisibilityOff />
                                  ) : (
                                    <Visibility />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            }
                            error={Boolean(error?.message)}
                          />
                          {Boolean(error?.message) && (
                            <FormHelperText error>
                              {error?.message}
                            </FormHelperText>
                          )}
                        </FormControl>
                      )}
                    />
                  </Box>
                  <Box p={1.5}>
                    <Controller
                      name="confirmPassword"
                      control={control}
                      render={({ field, fieldState: { error } }) => (
                        <FormControl size="small" fullWidth variant="outlined">
                          <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? "text" : "password"}
                            placeholder="******"
                            {...field}
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  size="small"
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                  edge="end"
                                >
                                  {showPassword ? (
                                    <VisibilityOff />
                                  ) : (
                                    <Visibility />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            }
                            error={Boolean(error?.message)}
                          />
                          {Boolean(error?.message) && (
                            <FormHelperText error>
                              {error?.message}
                            </FormHelperText>
                          )}
                        </FormControl>
                      )}
                    />
                  </Box>
                  <Box p={1.5}>
                    <CustomButton type="submit" isLoading={false}>
                      Sign Up
                    </CustomButton>
                  </Box>

                  <Box py={1.5}>
                    <Link href="/auth/signin">
                      <Typography>Sign In</Typography>
                    </Link>
                  </Box>

                </Grid>
                <Grid item md={4} sm={2} xs={0} />
              </Grid>
            </Box>
          </form>
        </Grid>
        <Grid item sm={1} xs={0} />
      </Grid>
    </Box>
  );
};

export default SingUpComponent;
