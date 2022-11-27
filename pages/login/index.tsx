import CustomInput from "@/ui/Inputs/CustomInput";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import React from "react";
import Wrapper from "@/layout/wrapper/Wrapper";
import styles from "@/styles/pages/login.module.scss";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import regex from "@/lib/regex";
import message from "@/json/message/message";

type IFormInput = {
  email: string;
  password: string;
};

const Login = () => {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors }
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  console.log(errors)

  return (
    <Wrapper>
      <Container maxWidth="sm">
        <Paper className={styles.loginBox}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              control={control}
              {...register("email", {
                required: message.error.enter_email,
                pattern:{
                    value:regex.emailRegex,
                    message:message.error.email_format
                }
              })}
              render={({ field: { onChange, value } }) => (
                <CustomInput
                  label="Enter email*"
                  value={value}
                  onChange={onChange}
                  placeholder="Enter username"
                  error={Boolean(errors?.email)}
                  helperText={errors?.email?.message}
                />
              )}
            />
         

            <button type="submit">submit</button>
          </form>
        </Paper>
      </Container>
    </Wrapper>
  );
};

export default Login;
