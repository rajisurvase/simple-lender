import React from "react";

import {  Stack } from "@mui/material";
import Button from "@mui/material/Button";
import {
  Container,
  Box,
  Avatar
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CustomInput from "@/ui/Inputs/CustomInput";

const ProfilePage = () => {
 
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 4,
        }}
      >
        <Avatar
          sx={{ width: 80, height: 80, mb: 2 }}
          src="/static/images/avatar/1.jpg"
        />
        <Box sx={{ width: "100%" }}>
          <Stack display="flex" flexDirection="row" gap={2} py={1}>
            <CustomInput placeholder="First name" />
            <CustomInput placeholder="Last name" />
          </Stack>
          <Box py={1}>
            <CustomInput placeholder="Email" />
          </Box>
          <Box py={1}>
            <CustomInput placeholder="Phone" type="number" />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<DeleteIcon />}
            >
              DELETE ACCOUNT
            </Button>
          </Box>
          
        </Box>
      </Box>
    </Container>
  );
};

export default ProfilePage;
