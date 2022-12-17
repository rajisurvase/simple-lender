import { signUpMutation } from "@/api/functions/user.api";
import Seo from "@/components/Seo/Seo";
import useNotiStack from "@/hooks/useNotistack";
import validationText from "@/json/messages/validationText";
import Wrapper from "@/layout/wrapper/Wrapper";
import { setCookieClient } from "@/lib/functions/storage.lib";
import { setLoginData } from "@/reduxtoolkit/slices/userSlice";
import styles from "@/styles/pages/login.module.scss";
import { userData } from "@/types/common.type";
import CustomButton from "@/ui/Buttons/CustomButton";
import CustomInput from "@/ui/Inputs/CustomInput";
import { yupResolver } from "@hookform/resolvers/yup";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { useRouter } from "next/router";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import * as yup from "yup";

//=== interface ====
interface IFormInput {
  email: string;
  password: string;
  fullName: string;
  username: string;
  phone: Number;
  bio: string;
}

interface signUpData {
  message: string;
  status?: Number;
  type?: string;
  error?: {
    status?: Number;
    errorType?: string;
  };
  data: userData;
  token: string;
}

const schema = yup.object().shape({
  email: yup
    .string()
    .email(validationText.error.email_format)
    .required(validationText.error.enter_email),
  password: yup
    .string()
    .min(8)
    .max(32)
    .required(validationText.error.enter_password),

  fullName: yup.string().required(validationText.error.fullName),
  username: yup.string().required(validationText.error.username),
  phone: yup.number().min(10).required(validationText.error.phone),
  bio: yup.string()
});

const SignUp = () => {
  const {
    handleSubmit,
    control,
    register,
    reset,
    formState: { errors }
  } = useForm<IFormInput>({
    resolver: yupResolver(schema)
  });
  const { toastSuccess, toastError } = useNotiStack();
  const { isLoading, mutate, isError } = useMutation(signUpMutation);
  const dispatch = useDispatch();
  const router = useRouter();

  //   const dispatch=useAppDispatch();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    mutate(data, {
      onSuccess: (data: signUpData) => {
        if (data?.status === 200) {
          toastSuccess(data?.message);
          reset();
          dispatch(setLoginData(data?.data));
          setCookieClient("token", data.token);
          setCookieClient("user", JSON.stringify(data.data));
          router.push("/dashboard/profile");
        } else {
          toastError(data?.message);
        }
      }
    });
  };

  return (
    <>
      <Seo title="Create Account" />
      <Wrapper>
        <Container maxWidth="sm">
          <Paper className={styles.loginBox}>
            <h1>Create Account</h1>
            <form autoSave="true" onSubmit={handleSubmit(onSubmit)}>
              <Controller
                control={control}
                {...register("fullName")}
                render={({ field: { onChange, value } }) => (
                  <CustomInput
                    label="Enter Name"
                    type="text"
                    value={value}
                    onChange={onChange}
                    placeholder="Enter name"
                    error={Boolean(errors?.fullName)}
                    helperText={errors?.fullName?.message}
                  />
                )}
              />

              <Controller
                control={control}
                {...register("username")}
                render={({ field: { onChange, value } }) => (
                  <CustomInput
                    label="Enter username"
                    type="text"
                    value={value}
                    onChange={onChange}
                    placeholder="Enter username"
                    error={Boolean(errors?.username)}
                    helperText={errors?.username?.message}
                  />
                )}
              />

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
                {...register("phone")}
                render={({ field: { onChange, value } }) => (
                  <CustomInput
                    label="Enter phone*"
                    value={value}
                    onChange={onChange}
                    placeholder="Enter phone"
                    error={Boolean(errors?.phone)}
                    helperText={errors?.phone?.message}
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

              <CustomButton loading={isLoading} type="submit" disabled={false}>
                <span>Submit</span>
              </CustomButton>
            </form>
          </Paper>
        </Container>
      </Wrapper>
    </>
  );
};

export default SignUp;
