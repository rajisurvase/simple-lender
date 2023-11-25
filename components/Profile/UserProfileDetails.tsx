import React from "react";
import { Box, Typography } from "@mui/material";
import CustomAvatar from "@/ui/Avatar/CustomAvatar";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button"

const UserProfileDetails = () => {
  return (
    <Box textAlign="center" p={3} >
      <CustomAvatar
        alt="Remy Sharp"
        image="https://image.shutterstock.com/mosaic_250/301519563/1139558762/stock-photo-image-of-hesitant-unshaven-european-male-with-thick-beard-holds-chin-purses-lips-with-clueless-1139558762.jpg"
        size={200}
        variant="dot"
      />

      <Grid container textAlign="left" >
        <Grid item xs={0} sm={4} />
        <Grid item xs={12} sm={4}>
          <Box>
            <Typography py={2} >Full Name : Piraji survase</Typography>
            <Typography py={2} >Email: pirajisurvase@gmail.com</Typography>
            <Button> Logout </Button>
          </Box>
        </Grid>
        <Grid item xs={0} sm={4} />

      </Grid>
    </Box>
  );
};

export default UserProfileDetails;
