"use client";

import {
  Box,
  Button,
  Card,
  Grid,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import useNotiStack from "@/hooks/useNotistack";

const schema = yup
  .object({
    borrower: yup.string().required("Borrower Name is a required field"),
    phone: yup
      .string()
      .required("Phone number is required")
      .matches(/^\d+$/, "Invalid phone number")
      .min(10, "Phone number must be at least 10 digits")
      .max(10, "Phone number must not exceed 10 digits"),
    email: yup
      .string()
      .required("Email is required")
      .test("email", "Invalid email address", (value) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailRegex.test(value as string);
      }),
      address : yup.string(),
      age : yup.string().matches(/^\d+$/, "Invalid phone number"),
      city: yup.string(),
      state : yup.string(),
      pincode : yup.string()
  })
  .required();
const Create = () => {
  const router = useRouter();
  const { toastSuccess } = useNotiStack();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = () => {
    toastSuccess("Borrower created successfully");
    router.push("/borrowers");
    reset();
  };

  return (
    <Box m={2}>
      <Card>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid p={3} container spacing={3}>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <TextField
                size="small"
                fullWidth
                label="Borrower Name"
                {...register("borrower")}
              />
              <Typography color="red">
                {errors?.borrower?.message as string}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <TextField
                type="text"
                {...register("phone")}
                size="small"
                fullWidth
                label="Phone"
                {...register("phone")}
              />
              <Typography color="red">
                {errors?.phone?.message as string}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <TextField
                type="text"
                size="small"
                fullWidth
                label="Borrower Email"
                {...register("email")}
              />
              <Typography color="red">
                {errors?.email?.message as string}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <TextField
                type="text"
                size="small"
                fullWidth
                label="Address"
                {...register("address")}
              />
              <Typography color="red">
                {errors?.address?.message as string}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <TextField
                type="text"
                size="small"
                fullWidth
                label="Age"
                {...register("age")}
              />
              <Typography color="red">
                {errors?.age?.message as string}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <TextField
                type="text"
                size="small"
                fullWidth
                label="City"
                {...register("city")}
              />
              <Typography color="red">
                {errors?.city?.message as string}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <TextField
                type="text"
                size="small"
                fullWidth
                label="State"
                {...register("state")}
              />
              <Typography color="red">
                {errors?.state?.message as string}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <TextField
                type="text"
                size="small"
                fullWidth
                label="Pin code"
                {...register("pincode")}
              />
              <Typography color="red">
                {errors?.pincode?.message as string}
              </Typography>
            </Grid>
          </Grid>
          <Grid p={3} container spacing={2}>
            <Grid item xs={12} sm={6} md={8} textAlign="center" />
            <Grid item xs={12} sm={6} md={4} textAlign="center">
              <Stack direction="row" spacing={2}>
                <Button
                  variant="outlined"
                  fullWidth
                  onClick={() => router.push("/borrowers")}
                >
                  Cancel
                </Button>
                <Button variant="contained" type="submit" fullWidth>
                  Submit
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </form>
      </Card>
    </Box>
  );
};

export default Create;
