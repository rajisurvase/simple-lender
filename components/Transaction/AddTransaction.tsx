import { period } from "@/app/calculator/page";
import CustomAutocomplete from "@/ui/AutoComplete/CustomAutocomplete";
import CustomDatePicker from "@/ui/DatePicker/CustomDatePicker";
import CustomInput from "@/ui/Inputs/CustomInput";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";
import React, { useState } from "react";

const AddTransaction = () => {
  const [checkDuration, setCheckDuration] = useState(1);
  const [rateType, setRateType] = useState<string>();

  const handleChange = (event: SelectChangeEvent<number>) => {
    setCheckDuration(event.target.value as unknown as number);
  };

  console.log("rateType", rateType);

  return (
    <Box>
      <CustomAutocomplete options={[]} label="Search borrower" />
      <Grid container py={2} spacing={2}>
        <Grid item xs={12} md={6}>
          <CustomInput
            label="Principle Amount"
            placeholder="Ex.1000"
            type="number"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography textAlign="left">Transaction date</Typography>
          <CustomDatePicker label="" value={dayjs()} onChange={() => {}} />
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <Typography>Interest Rate</Typography>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              value={rateType}
              onChange={(e) => setRateType(e.target.value)}
              name="radio-buttons-group"
            >
              <Stack display={"flex"} flexDirection={"row"}>
                <FormControlLabel
                  value="percentage"
                  control={<Radio />}
                  label="Percentage"
                />
                <FormControlLabel
                  value="flat"
                  control={<Radio />}
                  label="Flat"
                />
              </Stack>
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={6} sx={{ display : rateType? "block": "none"}} >
          {rateType && (
            <CustomInput
              label={
                rateType === "percentage"
                  ? "Percentage Value(%)"
                  : "Flat Amount"
              }
              placeholder={rateType === "percentage" ? "2(%)" : "Ex.1000"}
              type="number"
            />
          )}
        </Grid>
        <Grid item xs={12} md={6} sx={{ display : rateType? "block": "none"}}>
          {rateType === "flat" && (
            <>
              <Typography>Duration</Typography>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={checkDuration}
                size="small"
                onChange={handleChange}
                fullWidth
              >
                {period?.map((item, index) => (
                  <MenuItem key={index} value={item?.value}>
                    {item?.name}
                  </MenuItem>
                ))}
              </Select>
            </>
          )}
        </Grid>
        <Grid item xs={12}>
          <CustomInput
            placeholder="Description/note"
            label="Description/note"
            multiline
            rows={3}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddTransaction;
