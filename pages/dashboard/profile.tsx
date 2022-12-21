import { ProfileUpdateMutation } from "@/api/functions/user.api";
import Seo from "@/components/Seo/Seo";
import { MAX_SIZE_FILE } from "@/config/constants";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
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
import { useEffect } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import * as yup from "yup";

//=== interface ====

interface signUpData {
  message: string;
  status?: Number;
  type?: string;
  error?: {
    status?: Number;
    errorType?: string;
  };
  data: userData;
}

const fileFormSchema = yup
  .mixed()
  .test("fileSize", `Upload file under ${MAX_SIZE_FILE}`, (file) => {
    console.log(file);
    if (file) {
      //if u want to allow only certain file sizes
      return file.size <= MAX_SIZE_FILE;
    }
  });

const schema = yup.object().shape({
  email: yup
    .string()
    .email(validationText.error.email_format)
    .required(validationText.error.enter_email),
  fullName: yup.string().required(validationText.error.fullName),
  username: yup.string().required(validationText.error.username),
  phone: yup.number().min(10).required(validationText.error.phone),
  profile_image: fileFormSchema
});

const Profile = () => {
  const {
    handleSubmit,
    control,
    register,
    reset,
    formState: { errors }
  } = useForm<userData>({
    resolver: yupResolver(schema)
  });
  const { toastSuccess, toastError } = useNotiStack();
  const { isLoading, mutate } = useMutation(ProfileUpdateMutation);
  const { userData } = useAppSelector((state) => state.userSlice);
  const dispatch = useAppDispatch();
  const router = useRouter();

  //   const dispatch=useAppDispatch();
  const onSubmit: SubmitHandler<userData> = (data) => {
    mutate(data, {
      onSuccess: (data: signUpData) => {
        if (data?.status === 200) {
          toastSuccess(data?.message);
          reset();
          dispatch(setLoginData(data?.data));
          setCookieClient("user", JSON.stringify(data.data));
          router.push("/dashboard/profile");
        } else {
          toastError(data?.message);
        }
      }
    });
  };

  useEffect(() => {
    if (userData) {
      reset({
        first_name: userData?.first_name,
        last_name: userData?.last_name,
        fullName: userData?.fullName,
        username: userData?.username,
        phone: userData?.phone,
        email: userData?.email,
        bio: userData?.bio,
        profile_image: userData?.profile_image,
        cover_picture: userData?.cover_picture
      });
    }
  }, [userData]);

  return (
    <>
      <Seo title="Profile" />
      <Wrapper>
        <Container maxWidth="sm">
          <Paper className={styles.loginBox}>
            <h1>Update Profile</h1>
            <form autoSave="true" onSubmit={handleSubmit(onSubmit)}>
              <Controller
                control={control}
                {...register("profile_image")}
                render={({ field: { onChange, value } }) => (
                  <CustomInput
                    label="Enter profile_image"
                    type="file"
                    value={value}
                    onChange={onChange}
                    placeholder="Profile"
                    error={Boolean(errors?.profile_image)}
                    helperText={errors?.profile_image?.message}
                  />
                )}
              />

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

              <CustomButton loading={isLoading} type="submit" disabled={false}>
                <span>Update profile</span>
              </CustomButton>
            </form>
          </Paper>
        </Container>
      </Wrapper>
    </>
  );
};

export default Profile;
