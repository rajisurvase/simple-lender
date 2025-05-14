"use client";

import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Divider,
  Drawer,
  IconButton,
  Pagination,
  Stack,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  Typography,
  styled,
} from "@mui/material";
import React, { useCallback, useRef, useState } from "react";
import TransactionTableHead from "./Table/TransactionTableHead";
import TransactionTableBodyRow from "./Table/TransactionTableBodyRow";
import dynamic from "next/dynamic";
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import AddTransaction, { AddTransactionRef } from "./AddTransaction";
import EditTransaction from "./EditTransaction";
import { useMutation } from "react-query";
import { AddEditTransaction } from "@/api/functions/transaction.api";
import useGetTranscations from "@/hooks/useGetTranscations";
import { ITransactionType } from "@/typescript/types/transcation.type";

const FilterTransactions = dynamic(
  () => import("./Filter/FilterTransactions"),
  { ssr: false }
);

// const DrawerWrapperStyle = styled(Box)`
//   width: 50%;
// `;
// import FilterTransactions from './Filter/FilterTransactions'

const TransactionComponent = () => {
  const formRef = useRef<AddTransactionRef>(null);
  const [isAdd, setIsAdd] = React.useState(false);
  const [isEdit, setIsEdit] = React.useState<ITransactionType>()
  const [currentPage, setCurrentPage] = useState(1)
  const {data : transactions, isLoading} = useGetTranscations({
    limit :10,
    page :currentPage
  })

  const handleClose = React.useCallback(() => {
    setIsAdd(false);
    setIsEdit(undefined)
  }, [setIsAdd, setIsEdit]);

  const {mutateAsync, isLoading: isProccessing} = useMutation({
    mutationFn : AddEditTransaction,
  })

  const handleClick = useCallback((item: ITransactionType)=>{
     setIsEdit(item)
  },[setIsEdit])

  const handleExternalSubmit = () => {
    formRef.current?.submit();
  };

   const handlePageChange = (
      event: React.ChangeEvent<unknown>,
      page: number
    ) => {
      setCurrentPage(page);
    };

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
              {isLoading ? 
              ("Loading...") :
              transactions?.docs.length ? (
                <>
                {transactions.docs.map((item)=>(
                  <TransactionTableBodyRow 
                  key={item._id}
                  item={item}
                  handleClick={()=>{
                    handleClick(item)
                  }}
                  />
                ))}
                </>
              ) : (
                <Alert severity="error">No Data Found..!</Alert>
              )}
          </TableBody>
        </Table>
          
      </TableContainer>
       <Box display="flex" justifyContent="center" p={2}>
                  {Number(transactions?.docs?.length) > 0 && (
                    <Pagination
                      count={transactions?.pages}
                      page={transactions?.page}
                      onChange={handlePageChange}
                    />
                  )}
      </Box> 

      <Drawer
        anchor="right"
        open={isAdd || Boolean(!!isEdit?._id)}
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
          <Typography variant="h6" fontWeight="bold" >{isEdit?._id? "View/Edit" : "Add"} Transaction</Typography>
          <IconButton onClick={handleClose} >
              <HighlightOffRoundedIcon />
          </IconButton>
        </Stack>
        <Box py={1}   >
        <Divider />
        </Box>
        <Box px={1} >
          {isEdit?._id? 
          <EditTransaction
           item={isEdit}
          />
         : <AddTransaction 
           handleFormSubmit={(payload)=>{
            mutateAsync(payload)
           }}
           ref={formRef}
         /> }
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
              onClick={handleExternalSubmit}
              disabled={isProccessing}
            >
              {isProccessing ? <CircularProgress size={13} /> : "Save"}
            </Button>
          </Stack>
        </Box>
      </Drawer>
    </>
  );
};

export default TransactionComponent;
