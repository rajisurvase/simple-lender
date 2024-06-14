"use client";

import {
  Button,
  Grid,
  Stack,
  TextField,
} from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import useNotiStack from "@/hooks/useNotistack";
import {  AddBorrower, EditBorrowerMutation, borrowerType } from "@/api/functions/borrower.api";
import { useMutation } from "react-query";
import Loader from "@/ui/Loader/Loder";
import { AddBorrowerSchema, AddEditBorrowerType } from "@/schema/borrower.schema";
import dayjs from "dayjs";
import CustomDatePicker from "@/ui/DatePicker/CustomDatePicker";


  type BorrowersCreateProps = {
    handleClose : ()=>void,
    selectedBorrower : borrowerType | undefined,
    refetch : ()=>void
  }
const BorrowersCreate = ({handleClose, selectedBorrower, refetch} :BorrowersCreateProps) => {
  const { toastSuccess, toastError } = useNotiStack();
  const {
    register,
    control,
    handleSubmit,
    reset
  } = useForm<AddEditBorrowerType>({
    resolver: yupResolver(AddBorrowerSchema),
    defaultValues : {
      firstName : selectedBorrower?.firstName || "",
      lastName : selectedBorrower?.lastName ?? "",
      dob : dayjs(selectedBorrower?.dob)?.toDate(),
      email : selectedBorrower?.email || "",
      address : selectedBorrower?.address || "", 
      country : selectedBorrower?.country || "", 
      city : selectedBorrower?.city || "", 
      state : selectedBorrower?.state || "",
      phone : selectedBorrower?.phone || "",
      pincode : selectedBorrower?.pincode || ""
    }
  });

  const {mutateAsync : AddNewBorrower, isLoading} = useMutation({
    mutationFn : AddBorrower,
    mutationKey : ["add", "borrower"],
    onSuccess:(response)=>{
      if(response?.id) {
        refetch()
        toastSuccess("Borrower added successfully")
        reset()
        handleClose()
      }
    },
    onError : ()=>{
      toastError("Something went wrong")
    }
  })

  const {mutateAsync : editBorrowerMutation, isLoading : isEditLoading} = useMutation({
    mutationFn : EditBorrowerMutation,
    mutationKey : ["add", "borrower"],
    onSuccess:(response)=>{
      if(response?.id) {
        toastSuccess("Borrower Edit successfully")
        reset()
        handleClose()
        refetch()
      }
    },
    onError : ()=>{
      toastError("Something went wrong")
    }  
  })

  const onSubmit = (data: any) => {
    if(selectedBorrower?.id){
      editBorrowerMutation({...data, id: selectedBorrower?.id})
    } else {
      AddNewBorrower(data)
    }
  };
  

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container columnSpacing={3} rowSpacing={2} pb={2} >
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Controller
            control={control}
            {...register("firstName")}
            render={({ field, fieldState: { error } }) => (
              <TextField
                size="small"
                fullWidth
                label="First Name"
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
            {...register("lastName")}
            render={({ field, fieldState: { error } }) => (
              <TextField
                size="small"
                fullWidth
                label="Last Name"
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
            {...register("email")}
            render={({ field, fieldState: { error } }) => (
              <TextField
                type="text"
                size="small"
                fullWidth
                label="Email"
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
            {...register("dob")}
            render={({ field, fieldState: { error } }) => (
              <CustomDatePicker
              label="Date of birth"
              value={dayjs(field?.value)}
              onChange={field?.onChange}
              error={Boolean(error?.message)}
              helperText={error?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Controller
            control={control}
            {...register("phone")}
            render={({ field, fieldState: { error } }) => (
              <TextField
                type="text"
                size="small"
                fullWidth
                label="Phone"
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
            {...register("address")}
            render={({ field, fieldState: { error } }) => (
              <TextField
                type="text"
                size="small"
                fullWidth
                label="Address"
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
            {...register("country")}
            render={({ field, fieldState: { error } }) => (
              <TextField fullWidth
                type="text"
                size="small"
                label="Country"
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
            {...register("city")}
            render={({ field, fieldState: { error } }) => (
              <TextField
                type="text"
                size="small"
                fullWidth
                label="City"
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
            {...register("state")}
            render={({ field, fieldState: { error } }) => (
              <TextField
                type="text"
                size="small"
                fullWidth
                label="State"
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
            {...register("pincode")}
            render={({ field, fieldState: { error } }) => (
              <TextField
                type="text"
                size="small"
                fullWidth
                label="Pin code"
                {...field}
                helperText={error?.message}
                error={Boolean(error?.message)}
              />
            )}
          />
        </Grid>
        <Grid item xs={0} md={6} sm={6} lg={6} />
        <Grid item xs={12} md={6} sm={6} lg={6}>
          <Stack direction="row" spacing={2}>
            <Button
              variant="outlined"
              fullWidth
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button variant="contained" type="submit" fullWidth disabled={isLoading || isEditLoading} >
              {isEditLoading || isLoading ?  <Loader /> : "Submit"} 
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </form>
  );
};

export default BorrowersCreate;
