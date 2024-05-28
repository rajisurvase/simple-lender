"use client";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Link from "@mui/material/Link";
import OutlinedInput from "@mui/material/OutlinedInput";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FormHelperText } from "@mui/material";
// import { useMutation } from "react-query";
// import { signInMutation } from "@/api/functions/user.api";
// import { setCookie } from "nookies";
// import { loginAccessTokenCookieName } from "@/config/constants";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useRouter } from "next/navigation";
import useNotiStack from "@/hooks/useNotistack";
import CustomButton from "../CustomButton/CustomButton";

const schema = yup.object().shape({
  username: yup.string().trim().required().label("User Name"),
  password: yup.string().trim().min(6).required().label("Password")
});

const SignInComponent = () => {
  const dispatch = useAppDispatch();
  const { toastSuccess, toastError } = useNotiStack();
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema)
  });

  // const { mutateAsync: loginAsyncMutation, isLoading } = useMutation({
  //   mutationFn: signInMutation,
  //   mutationKey: ["signIn", "login"],
  //   onError:()=>{
  //     toastError("Invalid Username or Password..!")
  //   }
  // });

  const onSubmit = async () => {
    // loginAsyncMutation(data, {
    //   onSuccess: (res) => {
    //     if (res?.accessToken) {
    //       toastSuccess("Login successfully ...!");
    //       setCookie(null, loginAccessTokenCookieName, res?.accessToken, {
    //         maxAge: 30 * 24 * 60 * 60,
    //         path: "/"
    //       });
    //       setCookie(null, 'userDetails', JSON.stringify(res), {
    //         maxAge: 30 * 24 * 60 * 60,
    //         path: "/"
    //       });
    //       dispatch(
    //         setLoginData({
    //           id: res?.id,
    //           email: res?.email,
    //           roles: res?.roles,
    //           username: res?.username
    //         })
    //       );
    //       router.push("/");
    //     } 
    //   } 
    // })
  };

  return (
    <Box py={9}>
      <Grid container>
        <Grid item sm={1} xs={0} />
        <Grid
          item
          sm={10}
          xs={12}
          p={2}
          sx={{ background: "#CEF3FF", height: "80vh", borderRadius: "2rem" }}
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
                  <Box py={1.5}>
                    <Controller
                      name="username"
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

                  <Box py={1.5}>
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
                  <Box py={1.5}>
                    <CustomButton type="submit" isLoading={false}>
                      Sign In
                    </CustomButton>
                  </Box>

                  <Box py={1.5}>
                    <Link href="/auth/signup">
                      <Typography>Sign up</Typography>
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

export default SignInComponent;
