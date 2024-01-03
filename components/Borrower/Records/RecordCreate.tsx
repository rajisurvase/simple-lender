"use client";

/* eslint-disable import/no-extraneous-dependencies */
import { Button, FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select, Stack, TextField } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useNotiStack from "@/hooks/useNotistack";
import { useMutation } from "react-query";
import Loader from "@/ui/Loader/Loder";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AddRecord, EditRecordMutation, IRecord } from "@/api/functions/record.api";
import dayjs from "dayjs";

const schema = yup
  .object({
    // borrowerName: yup.string().required('Borrower name is required'),
    principleAmount: yup
      .number()
      .typeError("Principle amount must be a number")
      .positive("Principle amount must be a positive number")
      .required("Principle amount is required"),
    roi: yup
      .number()
      .typeError("Rate of interest must be a number")
      .positive("Rate of interest must be a positive number")
      .required("Rate of interest is required"),
    purchaseDate: yup.date().required("Purchase date is required").typeError("InValid date format"),
    dueDate: yup.date().required("Due date is required").typeError("InValid date format"),
    status: yup.string().required("Status is required")
  })
  .required();

type RecordCreateProps = {
  // eslint-disable-next-line unused-imports/no-unused-vars, no-unused-vars
  handleClose: () => void;
  selectedRecord: IRecord | undefined;
  refetch: () => void;
  borrowerId : string;
};
const RecordCreate = ({
  handleClose,
  selectedRecord,
  refetch,
  borrowerId
}: RecordCreateProps) => {
  
  const { toastSuccess, toastError } = useNotiStack();
  const { register, control, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      principleAmount: selectedRecord?.principleAmount || "",
      roi: selectedRecord?.roi || "",
      purchaseDate: dayjs(selectedRecord?.purchaseDate) || null,
      dueDate: dayjs(selectedRecord?.dueDate) || "",
      status: selectedRecord?.status || "",
      borrower_id : borrowerId
    }
  });

  const { mutateAsync: AddNewRecord, isLoading } = useMutation({
    mutationFn: AddRecord,
    mutationKey: ["add", "record"],
    onSuccess: (response) => {
      if (response?.id) {
        refetch();
        toastSuccess("record added successfully");
        reset();
        handleClose();
      }
    },
    onError: () => {
      toastError("Something went wrong");
    }
  });

  const { mutateAsync: editRecordMutation, isLoading: isEditLoading } =
    useMutation({
      mutationFn: EditRecordMutation,
      mutationKey: ["add", "record"],
      onSuccess: (response) => {
        if (response?.id) {
          toastSuccess("Record Edit successfully");
          reset();
          handleClose();
          refetch();
        }
      },
      onError: () => {
        toastError("Something went wrong");
      }
    });

  const onSubmit = (data: any) => {

    const commonPayload = {
    ...data,
    dueDate : dayjs(data?.dueDate).format("YYYY-MM-DD"),
    purchaseDate : dayjs(data?.purchaseDate).format("YYYY-MM-DD")
    }

    if (selectedRecord?.id) {
      editRecordMutation({ ...commonPayload, id: selectedRecord?.id });
    } else {
      AddNewRecord(commonPayload);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid p={3} container spacing={3}>
        {/* <Grid item xs={12} sm={6} md={6} lg={6}> */}
          {/* <Controller
            control={control}
            {...register("borrowerName")}
            render={({ field, fieldState: { error } }) => (
              <TextField
                size="small"
                fullWidth
                label="Borrower Name"
                {...field}
                InputProps={{
                  readOnly: true
                }}
                helperText={error?.message}
                error={Boolean(error?.message)}
              />
            )}
          /> */}
        {/* </Grid> */}
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Controller
            control={control}
            {...register("principleAmount")}
            render={({ field, fieldState: { error } }) => (
              <TextField
                type="text"
                size="small"
                fullWidth
                label="Principle Amount"
                {...field}
                helperText={error?.message}
                error={Boolean(error?.message)}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Controller
            control={control}
            {...register("roi")}
            render={({ field, fieldState: { error } }) => (
              <TextField
                type="text"
                size="small"
                fullWidth
                label="Rate of Interest (%)"
                {...field}
                helperText={error?.message}
                error={Boolean(error?.message)}
              />
            )}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Controller
            control={control}
            {...register("purchaseDate")}
            render={({ field, fieldState: { error } }) => (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker
                    {...field}
                    slotProps={{
                      textField: {
                        error : Boolean(error?.message),
                         helperText: error?.message,
                        size:"small",
                        placeholder:"Purchase Date"
                      },
                    }}
                  />
                </DemoContainer>
              </LocalizationProvider>
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
        <Controller
            control={control}
            {...register("dueDate")}
            render={({ field, fieldState: { error } }) => (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker
                    {...field}
                    slotProps={{
                      textField: {
                        error : Boolean(error?.message),
                         helperText: error?.message,
                          size:"small",
                         placeholder:"Due Date"
                      },
                    }}
                  />
                </DemoContainer>
              </LocalizationProvider>
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Controller
            control={control}
            {...register("status")}
            render={({ field, fieldState: { error } }) => (
              <FormControl error={Boolean(error?.message)} fullWidth size="small" >
                 <InputLabel id="demo-simple-select-label">Status</InputLabel>
              <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Status"
          {...field} 
        >
          <MenuItem value="Pending">Pending</MenuItem>
          <MenuItem value="Done">Done</MenuItem>
        </Select>
        <FormHelperText>{error?.message}</FormHelperText>
        </FormControl>
            )}
          />
        </Grid>
        <Grid item xs={0} md={6} sm={6} lg={6} />
        <Grid item xs={12} md={6} sm={6} lg={6}>
          <Stack direction="row" spacing={2}>
            <Button variant="outlined" fullWidth onClick={handleClose}>
              Cancel
            </Button>
            <Button
              variant="contained"
              type="submit"
              fullWidth
              disabled={isLoading || isEditLoading}
            >
              {isEditLoading || isLoading ? <Loader /> : "Submit"}
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </form>
  );
};

export default RecordCreate;
