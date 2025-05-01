import React, { useEffect } from "react";

import { Stack } from "@mui/material";
import Button from "@mui/material/Button";
import { Container, Box, Avatar } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CustomInput from "@/ui/Inputs/CustomInput";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  IUpdateProfileSchemaType,
  updateProfileSchema,
} from "@/schema/auth.schema";
import { useAppSelector } from "@/hooks/useAppSelector";

const ProfilePage = () => {
  // IUpdateProfileType
  const {userData} = useAppSelector((s)=>s.userSlice)

  const { control, handleSubmit } = useForm<IUpdateProfileSchemaType>({
    resolver: yupResolver(updateProfileSchema),
    mode : "all",
    defaultValues : userData || {}
  });

  const onSubmit = handleSubmit((data) => {
    // mutateAsync(data)
  });


  return (
    <Container maxWidth="sm">
      <form onSubmit={onSubmit}>
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
              <Controller
                name="first_name"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <CustomInput
                    placeholder="First name"
                    {...field}
                    error={Boolean(error?.message)}
                    helperText={error?.message}
                    
                  />
                )}
              />
              <Controller
                name="last_name"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <CustomInput
                    placeholder="Last name"
                    {...field}
                    error={Boolean(error?.message)}
                    helperText={error?.message}
                    
                  />
                )}
              />
            </Stack>
            <Box py={1}>
              <Controller
                name="email"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <CustomInput
                    placeholder="Email"
                    {...field}
                    error={Boolean(error?.message)}
                    helperText={error?.message}
                  />
                )}
              />
            </Box>
            <Box py={1}>
              <Controller
                name="phone"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <CustomInput
                    placeholder="Phone"
                    type="number"
                    {...field}
                    error={Boolean(error?.message)}
                    helperText={error?.message}
                  />
                )}
              />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant="contained"
                color="secondary"
                startIcon={<DeleteIcon />}
                disabled
              >
                DELETE ACCOUNT
              </Button>
            </Box>
          </Box>
        </Box>
      </form>
    </Container>
  );
};

export default ProfilePage;
