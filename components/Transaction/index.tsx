"use client";

import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  Typography,
  styled,
} from "@mui/material";
import React, { useCallback, useState } from "react";
import TransactionTableHead from "./Table/TransactionTableHead";
import TransactionTableBodyRow from "./Table/TransactionTableBodyRow";
import dynamic from "next/dynamic";
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import AddTransaction from "./AddTransaction";
import EditTransaction from "./EditTransaction";

const FilterTransactions = dynamic(
  () => import("./Filter/FilterTransactions"),
  { ssr: false }
);

// const DrawerWrapperStyle = styled(Box)`
//   width: 50%;
// `;
// import FilterTransactions from './Filter/FilterTransactions'

const TransactionComponent = () => {
  const [isAdd, setIsAdd] = React.useState(true);
  const [isEdit, setIsEdit] = React.useState<{id: string}>()
  const handleClose = React.useCallback(() => {
    setIsAdd(false);
    setIsEdit(undefined)
  }, [setIsAdd, isAdd, setIsEdit, isEdit]);

  const handleClick = useCallback((item : {id: string})=>{
     setIsEdit(item)
  },[isEdit, setIsEdit])

  return (
    <>
      <FilterTransactions
        handleAdd={() => {
          setIsAdd(true);
        }}
      />
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TransactionTableHead />
          </TableHead>
          <TableBody>
            <TransactionTableBodyRow handleClick={()=>handleClick({id: "dsfsdfsdf"})} />
            <TransactionTableBodyRow />
            <TransactionTableBodyRow />
            <TransactionTableBodyRow />
            <TransactionTableBodyRow />
            <TransactionTableBodyRow />
          </TableBody>
        </Table>
      </TableContainer>
      <Drawer
        anchor="right"
        open={isAdd || Boolean(!!isEdit?.id)}
        onClose={handleClose}
        sx={{
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: {
              xs: "90%", // 90% width on extra small screens
              md: "50%", // 60% width on medium screens
            },
            boxSizing: "border-box",
          }
        }}
      >
        <Stack display="flex" direction="row" justifyContent="space-between" px={1} alignItems="center" >
          <Typography variant="h6" fontWeight="bold" >{isEdit?.id? "View/Edit" : "Add"} Transaction</Typography>
          <IconButton>
              <HighlightOffRoundedIcon />
          </IconButton>
        </Stack>
        <Box py={1}   >
        <Divider />
        </Box>
        <Box px={1} >
          {isEdit?.id? 
          <EditTransaction />
         : <AddTransaction /> }
        </Box>
        <Box mt="auto"> {/* This pushes the buttons to the bottom */}
          <Stack
            px={1}
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          columnGap={2}
            p={2}
            bgcolor="background.paper" // Adjust as needed
          >
            <Button type="button" variant="outlined" fullWidth onClick={handleClose}>
              Cancel
            </Button>
            <Button
              type="button"
              variant="contained"
              fullWidth
              sx={{ background: "#D765FF" }}
              onClick={() => {
                // Handle save action
                // handleClose(); // Close drawer after save
              }}
            >
              Save
            </Button>
          </Stack>
        </Box>
      </Drawer>
    </>
  );
};

export default TransactionComponent;
