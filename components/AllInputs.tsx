import CustomInput from "@/ui/Inputs/CustomInput";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import regex from "@/lib/regex";
import message from "@/json/message/message";
import dynamic from "next/dynamic";

const AddIcCallIcon = dynamic(() => import("@mui/icons-material/AddIcCall"));
const AirlineSeatFlatIcon = dynamic(
  () => import("@mui/icons-material/AirlineSeatFlat")
);
const Stack = dynamic(() => import("@mui/material/Stack"));

type IFormInput = {
  email: string;
  password: string;
};

const AllInputs = () => {
  const {
    control,
    register,
    formState: { errors }
  } = useForm<IFormInput>({ mode: "onChange" });

  return (
    <Stack spacing={2} padding={2}>
      <Controller
        control={control}
        {...register("email", {
          required: message.error.enter_email,
          pattern: {
            value: regex.emailRegex,
            message: message.error.email_format
          }
        })}
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
        {...register("email", {
          required: message.error.enter_email,
          pattern: {
            value: regex.emailRegex,
            message: message.error.email_format
          }
        })}
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
        {...register("password", {
          required: message.error.enter_password
        })}
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
        {...register("password", {
          required: message.error.enter_password
        })}
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
