
import Stack from "@mui/material/Stack";
import dynamic from "next/dynamic";
import React from "react";

const AddIcCallIcon = dynamic(() => import("@mui/icons-material/AddIcCall"));
const AirlineSeatFlatIcon = dynamic(() => import("@mui/icons-material/AirlineSeatFlat"));

const CustomButton = dynamic(() => import( "@/ui/Buttons/CustomButton"));




const AllButtons = () => {
  return (
    <Stack spacing={2} padding={2}>
      <CustomButton type="button" disabled={false}>
        <span>Contained </span>
      </CustomButton>

      <CustomButton type="button" disabled>
        <span>disabled </span>
      </CustomButton>

      <CustomButton type="button" variant="text">
        <span>Text variant </span>
      </CustomButton>

      <CustomButton type="button" variant="outlined">
        <span>Outlined </span>
      </CustomButton>

      <CustomButton
        type="button"
        variant="outlined"
        endIcon={<AddIcCallIcon />}
        startIcon={<AirlineSeatFlatIcon />}
      >
        <span>With icon </span>
      </CustomButton>
    </Stack>
  );
};

export default AllButtons;
