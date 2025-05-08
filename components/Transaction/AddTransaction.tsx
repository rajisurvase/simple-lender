import { INTEREST_TYPES, PERIODS } from "@/config/constants";
import { useDebounce } from "@/hooks/useDebounce";
import useGetBorrowers from "@/hooks/useGetBorrowers";
import {
  ITransactionSchemaType,
  TransactionSchema,
} from "@/schema/transaction.schema";
import CustomAutocomplete from "@/ui/AutoComplete/CustomAutocomplete";
import CustomDatePicker from "@/ui/DatePicker/CustomDatePicker";
import CustomInput from "@/ui/Inputs/CustomInput";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";
import React, { forwardRef, useImperativeHandle, useState } from "react";
import { Controller, useForm } from "react-hook-form";


type IAddTransactionProps = {
  handleFormSubmit : (val : ITransactionSchemaType) => void
}
export interface AddTransactionRef {
  submit: () => void;
}

const AddTransaction = forwardRef<AddTransactionRef, IAddTransactionProps>(
  ({ handleFormSubmit }, ref)=> {
  const [value, setValue] = useState<string>();;
  const searchValue = useDebounce(value, 500);
  const { isLoading, data: borrowers } = useGetBorrowers({
    limit: 15,
    page: 1,
    search: searchValue,
  });

  const {
    control,
    handleSubmit,
    watch,
  } = useForm<ITransactionSchemaType>({
    resolver: yupResolver(TransactionSchema),
    defaultValues: {
      interest_type: INTEREST_TYPES.PERCENTAGE,
    },
  });

  const rateType = watch("interest_type");

  const onSubmit = handleSubmit((data) => {
    handleFormSubmit(data)
  });

  useImperativeHandle(ref, () => ({
    submit: onSubmit,
  }));

  return (
    <Box>
      <form onSubmit={onSubmit}>
        <Controller
          name="borrower_id"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <CustomAutocomplete
              options={borrowers?.docs || []}
              getOptionLabel={(option) =>
                `${option.first_name} ${option.last_name}`
              }
              isOptionEqualToValue={(option, value) => option._id === value._id}
              inputValue={value}
              renderInput={(params) => (
                <CustomInput
                  placeholder="Search borrower"
                  {...params}
                  error={!!error?.message}
                  helperText={error?.message}
                />
              )}
              onInputChange={(e, val) => {
                setValue(val);
              }}
              loading={isLoading}
              loadingText="Loading..."
              onChange={(e, newValue) => {
                field.onChange(newValue?._id);
              }}
              value={borrowers?.docs.find((_item) => _item._id === field.value)}
            />
          )}
        />
        <Grid container py={2} spacing={2}>
          <Grid item xs={12} md={6}>
            <Controller
              control={control}
              name="principal_amount"
              render={({ ...props }) => (
                <CustomInput
                  label="Principle Amount"
                  placeholder="Ex.1000"
                  type="number"
                  {...props.field}
                  error={!!props.fieldState.error?.message}
                  helperText={props.fieldState.error?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography textAlign="left">Transaction date</Typography>
            <Controller
              control={control}
              name="transaction_date"
              render={({ ...props }) => (
                <CustomDatePicker
                  label=""
                  value={dayjs(props.field.value)}
                  onChange={props.field.onChange}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl>
              <Typography>Interest Rate</Typography>
              <Controller
                name="interest_type"
                control={control}
                render={({ ...props }) => (
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    {...props.field}
                    name="radio-buttons-group"
                  >
                    <Stack display={"flex"} flexDirection={"row"}>
                      <FormControlLabel
                        value={INTEREST_TYPES.PERCENTAGE}
                        control={<Radio />}
                        label="Percentage"
                      />
                      <FormControlLabel
                        value={INTEREST_TYPES.FLAT}
                        control={<Radio />}
                        label="Flat"
                      />
                    </Stack>
                  </RadioGroup>
                )}
              />
            </FormControl>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: rateType ? "block" : "none" }}
          >
              <Controller
                name="interest_value"
                control={control}
                render={({ ...props }) => (
                  <CustomInput
                    label="Interest Value"
                    placeholder={
                      rateType === INTEREST_TYPES.PERCENTAGE
                        ? "2(%)"
                        : "Ex.1000"
                    }
                    type="number"
                    {...props.field}
                    error={!!props.fieldState.error?.message}
                    helperText={props.fieldState.error?.message}
                  />
                )}
              />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: rateType ? "block" : "none" }}
          >
            <Typography>Duration</Typography>
            <Controller
              control={control}
              name="frequency"
              render={({ field, fieldState: { error } }) => (
                <FormControl fullWidth error={!!error?.message} size="small">
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    {...field}
                  >
                    {PERIODS?.map((item, index) => (
                      <MenuItem key={index} value={item?.value}>
                        {item?.name}
                      </MenuItem>
                    ))}
                  </Select>
                  {error?.message && (
                    <FormHelperText>{error.message}</FormHelperText>
                  )}
                </FormControl>
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="note"
              control={control}
              render={({ field, fieldState : {error} }) => (
                <CustomInput
                  placeholder="Description/note"
                  label="Description/note"
                  multiline
                  rows={3}
                  {...field}
                  error={!!error?.message}
                  helperText={error?.message}
                />
              )}
            />
          </Grid>
        </Grid>
      </form>
    </Box>
  );
});

export default AddTransaction;
