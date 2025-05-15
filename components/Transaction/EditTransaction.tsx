import {
  Avatar,
  Box,
  Divider,
  Grid,
  IconButton,
  Skeleton,
  Stack,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { stringAvatar } from "./Table/TransactionTableHead";
import EntriesHead from "./Entries/EntriesHead";
import EntriesTableRow from "./Entries/EntriesTableRow";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import { ITransactionType } from "@/typescript/types/transcation.type";
import { INTEREST_TYPES } from "@/config/constants";
import useGetBorrowerDetails from "@/hooks/useGetBorrowerDetails";
import { calculateInterest } from "@/lib/calculation";


type IEditTransactionPropsType = {
  item : ITransactionType
}

const EditTransaction = ({item}: IEditTransactionPropsType) => {
  const [showDetails, setShowDetails] = useState(false);
  const {data : borrowerDetails} = useGetBorrowerDetails(item.borrower_id)

  const totalInterest = calculateInterest({amount : item.adjusted_principal, durationType : item.frequency,interestType : item.interest_type,rate : item.interest_value, transactionDate : item.transaction_date})

  return (
    <Box>

      <Stack rowGap={2} >
        <Box sx={{ border : "1px solid grey", borderRadius : "0.5rem", p: 2 }}>
        <Stack
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Stack
          display="flex"
          flexDirection="row"
          columnGap={1}
          alignItems="center"
        >
          <Avatar
            {...stringAvatar(`${item.borrower_name.toUpperCase()}`)}
            sx={{ width: 35, height: 35 }}
          />
          <Box>
            <Typography variant="body2" fontWeight="bold">
              {item.borrower_name}
            </Typography>
            <Typography variant="body2" fontWeight="bold">
              +91 {borrowerDetails?.phone || <Skeleton variant="text" />}
            </Typography>
          </Box>
        </Stack>
        <Tooltip title="View details">
          <IconButton onClick={() => setShowDetails(!showDetails)}>
            {showDetails ? <ArrowCircleDownIcon /> : <ArrowCircleUpIcon />}
          </IconButton>
        </Tooltip>
      </Stack>
      <Box sx={{ display: showDetails ? "block" : "none" }} >
            <Stack display="flex" flexDirection="row" justifyContent="space-between" py={2}  >
               <Box>
               <Typography variant="body2" fontWeight="bold">Full Name</Typography>
               <Typography>{item.borrower_name}</Typography>
               </Box>
               <Box>
               <Typography variant="body2" fontWeight="bold">Email</Typography>
               <Typography>{borrowerDetails?.email}</Typography>
               </Box>
             </Stack>
             <Stack display="flex" flexDirection="row" justifyContent="space-between"    >
               <Box>
               <Typography variant="body2" fontWeight="bold">Address</Typography>
               <Typography>{borrowerDetails?.address || "N/A"}</Typography>
               </Box>
             </Stack>
      </Box>
        </Box>
      <Box sx={{p: 2, border : "1px solid grey", borderRadius : "0.5rem",}} >
        <Stack display="flex" flexDirection="row" py={1}  justifyContent="space-between"  >
          <Box>
            <Typography variant="body2" fontWeight="bold" >ADJUSTED BALANCE</Typography>
            <Typography variant="body1" fontWeight="bold" color="green" >₹{Number(item.adjusted_principal??0).toFixed(2)}</Typography>
          </Box>
          <Box >
            <Typography variant="body2" fontWeight="bold" >NET BALANCE</Typography>
            <Typography variant="body1" fontWeight="bold" color="red" textAlign="right" >₹{Number(item.principal_amount??0).toFixed(2)}</Typography>
          </Box>
        </Stack>
        <Divider />
        <Typography variant="body1" fontWeight="bold" py={1} >Modify payment breakdown</Typography>
        <Stack display="flex" flexDirection="row"   justifyContent="space-between"  >
           <Typography variant="body1">Adj Principle Amount</Typography>
           <Typography variant="body1" color="green">₹{Number(item.adjusted_principal??0).toFixed(2)}</Typography>
        </Stack>
        <Stack display="flex" flexDirection="row"   justifyContent="space-between"  >
           <Typography variant="body1">Interest Amount ({item.interest_value}{item.interest_type ===INTEREST_TYPES.PERCENTAGE? "%" : "Flat"})</Typography>
           <Typography variant="body1" color="green">₹{totalInterest.toFixed(2)}</Typography>
        </Stack>
        <Box py={1} >
        <Divider />
        </Box>
        <Stack display="flex" flexDirection="row"   justifyContent="space-between"  >
           <Typography variant="body1">Total Amount</Typography>
           <Typography variant="body1" color="green">₹{(item.adjusted_principal + totalInterest).toFixed(2)}</Typography>
        </Stack>
      </Box>
      </Stack>
      <TableContainer>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <EntriesHead />
          </TableHead>
          <TableBody>
            <EntriesTableRow />
            <EntriesTableRow />
            <EntriesTableRow />
            <EntriesTableRow />
            <EntriesTableRow />
            <EntriesTableRow />
            <EntriesTableRow />
            <EntriesTableRow />
            <EntriesTableRow />

          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default EditTransaction;
