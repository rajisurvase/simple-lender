import CustomInput from "@/ui/Inputs/CustomInput";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import dynamic from "next/dynamic";
import Stack from "@mui/material/Stack";
import * as yup from "yup";
import validationText from "@/json/messages/validationText";
import { yupResolver } from "@hookform/resolvers/yup";

// ==== DYNAMIC IMPORTS =====

const AddIcCallIcon = dynamic(() => import("@mui/icons-material/AddIcCall"));
const AirlineSeatFlatIcon = dynamic(
  () => import("@mui/icons-material/AirlineSeatFlat")
);

// === TYPES ====

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

const AllInputs = () => {
  const {
    control,
    register,
    formState: { errors }
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
    mode: "onChange"
  });

  return (
    <Stack spacing={2} padding={2}>
      <Controller
        control={control}
        {...register("email")}
        render={({ field: { onChange, value } }) => (
          <CustomInput
            label="Enter email with validation*"
            value={value}
            type="text"
            onChange={onChange}
            placeholder="Enter username"
            error={Boolean(errors?.email)}
            helperText={errors?.email?.message}
          />
        )}
      />

      <Controller
        control={control}
        {...register("email")}
        render={({ field: { onChange, value } }) => (
          <CustomInput
            label="with icon*"
            value={value}
            type="text"
            onChange={onChange}
            placeholder="Enter username"
            error={Boolean(errors?.email)}
            helperText={errors?.email?.message}
            startAdornment={<AddIcCallIcon />}
            endAdornment={<AirlineSeatFlatIcon />}
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

      <Controller
        control={control}
        {...register("password")}
        render={({ field: { onChange, value } }) => (
          <CustomInput
            label="With err*"
            value={value}
            type="password"
            onChange={onChange}
            placeholder="err"
            error
            helperText="this is err"
          />
        )}
      />
    </Stack>
  );
};

export default AllInputs;
