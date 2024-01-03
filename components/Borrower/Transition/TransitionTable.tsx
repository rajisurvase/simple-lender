import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Link from 'next/link'
import { Alert, Box, Button, IconButton, Pagination, Tooltip } from '@mui/material';
import { useState } from 'react';
import { useQuery } from 'react-query';
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from '@mui/icons-material/Delete';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import MuiModalWrapper from '@/components/Model/MuiModalWrapper';
import TransitionCreate from './TransitionCreate';
import { GetAllTransaction, ITransaction } from '@/api/functions/transaction.api';
// import RecordCreate from './RecordCreate';

type TransitionTableProps = {
  recordId : string
}
export default function TransitionTable({recordId}: TransitionTableProps) {

    const [currentPage, setCurrentPage] = useState(1)
    const [open, setOpen] = useState(false)
    const [selectedTransaction, setSelectedTransaction] = useState<ITransaction | undefined>(undefined)
    
    const  {data : transactionList, refetch} = useQuery({
      queryFn : ()=>GetAllTransaction({
         page : Number(currentPage-1),
         size : 10,
         recordId: "20001"
      }),
      queryKey : ["transaction", "list"],
      enabled : !!recordId
    })


    const handleClose = ()=>{
      setOpen(false), 
      setSelectedTransaction(undefined)
    }
    const handlePageChange = (event : React.ChangeEvent<unknown>, page: number) => {
      setCurrentPage(page);
    };

  return (
    <div>
      <Box my={1} textAlign='right' > 
          {/* <Link href="/borrowers/create" > */}
            <Button onClick={()=>setOpen(true)} variant='contained' sx={{borderRadius : '1.5rem', backgroundColor : "#7D8CC4", textTransform:"none"}} endIcon={<AddIcon  sx={{fontSize:'small'}} />} >Add Transition  </Button>
          {/* </Link> */}
      </Box>
    <TableContainer component={Paper} >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow  sx={{background:"#B2DFFF"}} >
            <TableCell align="center">Transition Date</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Withdrawals Amount </TableCell>
            <TableCell align='center' >Deposit Amount </TableCell>
            <TableCell align='center' >Balance</TableCell>
            <TableCell align='right' >Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Number(transactionList?.transation?.length)>0 && transactionList?.transation?.map((row, index : number) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }, background:`${index%2===0? "" : "  #CEF3FF"}` }}
            >
              <TableCell align="center" component="th" scope="row">
              <Link href={`/borrowers/${row?.id}`} >
                {row.id} </Link>
              </TableCell>
              <TableCell align="center">{row.description}</TableCell>
              <TableCell align="center" >{row.withdrawAmount|| "-"}</TableCell>
              <TableCell align="center" >{row.depositAmount || "-"}</TableCell>
              <TableCell align="center" >0.00</TableCell>
              <TableCell align='right' >
              <Tooltip title="Delete" >
                <IconButton size="small">
                <DeleteIcon fontSize="small" />
                </IconButton>
                </Tooltip>
                <Tooltip title="Edit" onClick={()=>setSelectedTransaction(row)} >
                <IconButton size="small">
                <EditOutlinedIcon fontSize="small" />
                </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow> 
          ))}
        </TableBody>
      </Table>
      {!transactionList?.transation?.length && <Alert severity="error" >No Data Found..!</Alert>}
      <Box display="flex" justifyContent="center" p={2} >
      {Number(transactionList?.transation?.length) > 0 &&   <Pagination
        count={Number(transactionList?.count)}
        page={currentPage}
        onChange={handlePageChange}
      /> }

      <MuiModalWrapper open={open || !!selectedTransaction?.id} title={`${selectedTransaction?.id? "Edit" : "Add"} Transaction`}  onClose={()=>{
        setOpen(false)
        setSelectedTransaction(undefined)
      }} >
       <TransitionCreate handleClose={handleClose} selectedTransaction={selectedTransaction} refetch={refetch} borrowerId={recordId} />
      </MuiModalWrapper>
      </Box>
    </TableContainer>
    </div>
    
  );
}