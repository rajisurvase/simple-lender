import CustomInput from "@/ui/Inputs/CustomInput";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import React from "react";
import Wrapper from "@/layout/wrapper/Wrapper";
import styles from "@/styles/pages/login.module.scss";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

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

  return (
    <Wrapper>
      <Container maxWidth="sm">
        <Paper className={styles.loginBox}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              control={control}
              {...register("email", {
                required: "Enter email",
                maxLength: 20
              })}
              render={({ field: { onChange, value } }) => (
                <CustomInput
                  label="Username*"
                  value={value}
                  onChange={onChange}
                  placeholder="Enter username"
                  error={Boolean(errors?.email)}
                  helperText={errors?.email?.message}
                />
              )}
            />
          </form>
        </Paper>
      </Container>
    </Wrapper>
  );
};

export default Login;
