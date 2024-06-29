import {
  Avatar,
  Box,
  Divider,
  Grid,
  IconButton,
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

const EditTransaction = () => {
  const [showDetails, setShowDetails] = useState(false);

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
            {...stringAvatar("Kent Dodds")}
            sx={{ width: 35, height: 35 }}
          />
          <Box>
            <Typography variant="body2" fontWeight="bold">
              Name
            </Typography>
            <Typography variant="body2" fontWeight="bold">
              +91 675****453
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
               <Typography>Mr.Piraji Survase</Typography>
               </Box>
               <Box>
               <Typography variant="body2" fontWeight="bold">Email</Typography>
               <Typography>piraji**@gmail.com</Typography>
               </Box>
             </Stack>
             <Stack display="flex" flexDirection="row" justifyContent="space-between"    >
               <Box>
               <Typography variant="body2" fontWeight="bold">Address</Typography>
               <Typography>3354 Sheppard Ave, Toronto, Ontario,  M1S 1T4, Canada.</Typography>
               </Box>
             </Stack>
      </Box>
        </Box>
      <Box sx={{p: 2, border : "1px solid grey", borderRadius : "0.5rem",}} >
        <Stack display="flex" flexDirection="row" py={1}  justifyContent="space-between"  >
          <Box>
            <Typography variant="body2" fontWeight="bold" >ADJUSTED BALANCE</Typography>
            <Typography variant="body1" fontWeight="bold" color="green" >₹600.00</Typography>
          </Box>
          <Box >
            <Typography variant="body2" fontWeight="bold" >NET BALANCE</Typography>
            <Typography variant="body1" fontWeight="bold" color="red" textAlign="right" >₹800.00</Typography>
          </Box>
        </Stack>
        <Divider />
        <Typography variant="body1" fontWeight="bold" py={1} >Modify payment breakdown</Typography>
        <Stack display="flex" flexDirection="row"   justifyContent="space-between"  >
           <Typography variant="body1">Adj Principle Amount</Typography>
           <Typography variant="body1" color="green">₹600.00</Typography>
        </Stack>
        <Stack display="flex" flexDirection="row"   justifyContent="space-between"  >
           <Typography variant="body1">Interest Amount (2%)</Typography>
           <Typography variant="body1" color="green">₹6.00</Typography>
        </Stack>
        <Box py={1} >
        <Divider />
        </Box>
        <Stack display="flex" flexDirection="row"   justifyContent="space-between"  >
           <Typography variant="body1">Total Amount</Typography>
           <Typography variant="body1" color="green">₹606.00</Typography>
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
