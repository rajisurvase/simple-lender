import React from "react";
import styles from "@/styles/pages/login.module.scss";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import dynamic from "next/dynamic";
import Seo from "@/components/Seo/Seo";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import * as yup from "yup";
import validationText from "@/json/messages/validationText";
import { yupResolver } from "@hookform/resolvers/yup";
import useNotiStack from "@/hooks/useNotistack";

// ==== DYNAMIC IMPORTS =====
const CustomButton = dynamic(() => import("@/ui/Buttons/CustomButton"));
const Wrapper = dynamic(() => import("@/layout/wrapper/Wrapper"));
const CustomInput = dynamic(() => import("@/ui/Inputs/CustomInput"));

//=== TYPES ====
type IFormInput = {
  email: string;
  password: string;
};

const schema = yup.object().shape({
  email: yup
    .string()
    .email(validationText.error.email_format)
    .required(validationText.error.enter_email),
  password: yup
    .string()
    .min(8)
    .max(32)
    .required(validationText.error.enter_password)
});

const Login = () => {
  const {
    handleSubmit,
    control,
    register,
    reset,
    formState: { errors }
  } = useForm<IFormInput>({
    resolver: yupResolver(schema)
  });
  const { toastSuccess } = useNotiStack();
  //   const dispatch=useAppDispatch();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    // dispatch(setLoginData(data));
    toastSuccess("Login success");
    reset();
  };

  return (
    <>
      <Seo title="Login Page" />
      <Wrapper>
        <Container maxWidth="sm">
          <Paper className={styles.loginBox}>
            <h1>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Controller
                control={control}
                {...register("email")}
                render={({ field: { onChange, value } }) => (
                  <CustomInput
                    label="Enter email*"
                    type="text"
                    value={value}
                    onChange={onChange}
                    placeholder="Enter username"
                    error={Boolean(errors?.email)}
                    helperText={errors?.email?.message}
                  />
                )}
              />

              <Controller
                control={control}
                {...register("password")}
                render={({ field: { onChange, value } }) => (
                  <CustomInput
                    label="Enter password*"
                    value={value}
                    type="password"
                    onChange={onChange}
                    placeholder="Enter password"
                    error={Boolean(errors?.password)}
                    helperText={errors?.password?.message}
                  />
                )}
              />

              <CustomButton type="submit" disabled={false}>
                <span>Submit</span>
              </CustomButton>
            </form>
          </Paper>
        </Container>
      </Wrapper>
    </>
  );
};

export default Login;
