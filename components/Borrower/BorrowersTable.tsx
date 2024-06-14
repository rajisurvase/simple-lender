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
import { useMutation, useQuery } from 'react-query';
import { DeleteBorrowerMutation, GetBorrowerList, borrowerType } from '@/api/functions/borrower.api';
import { useAppSelector } from '@/hooks/useAppSelector';
import MuiModalWrapper from '../Model/MuiModalWrapper';
import BorrowersCreate from './BorrowersCreate';
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from '@mui/icons-material/Delete';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import useNotiStack from '@/hooks/useNotistack';

export default function BorrowersTable() {
   const {toastSuccess, toastWarning} = useNotiStack()
    const { isLoggedIn}= useAppSelector((s)=>s.userSlice)
    const [currentPage, setCurrentPage] = useState(1)
    const [open, setOpen] = useState(false)
    const [selectedBorrower, setSelectedBorrower] = useState<borrowerType | undefined>(undefined)
    
    const  {data : borrowerList, refetch} = useQuery({
      queryFn : ()=>GetBorrowerList({
         page : Number(currentPage-1),
         size : 5
      }),
      queryKey : ["borrower", "list", currentPage],
      enabled : !!isLoggedIn
    })

    const {mutateAsync : deleteMutation, isLoading} = useMutation({
      mutationFn : DeleteBorrowerMutation,
      mutationKey : ["borrower", "delete" ],
      onSuccess : (res)=>{
          toastSuccess(res as string)
          refetch()
      },
    })

    const handleClose = ()=>{
      setOpen(false), 
      setSelectedBorrower(undefined)
    }
    const handlePageChange = (event : React.ChangeEvent<unknown>, page: number) => {
      setCurrentPage(page);
    };

    const handleDelete = (row : borrowerType)=>{
      row?.id &&  deleteMutation({id: `${row?.id}` as string})
    }

    const handleAdd =()=>{
      setOpen(true)
      // if(isLoggedIn){
      // } else {
      //   toastWarning('Please Login')
      // }
    }
  return (
    <div>
      {/* <Box my={1} textAlign='right' > 
            <Button onClick={handleAdd} variant='contained' sx={{borderRadius : '1.5rem', backgroundColor : "#7D8CC4", textTransform:"none"}} endIcon={<AddIcon  sx={{fontSize:'small'}} />} >Add Borrower  </Button>
      </Box> */}
    <TableContainer component={Paper} >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow  sx={{background:"#D765FF"}} >
            <TableCell align="center">Full Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Phone </TableCell>
            <TableCell align='right' >D.O.B</TableCell>
            <TableCell align='right' >Address</TableCell>
            <TableCell align='right' >Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Number(borrowerList?.borrowers?.length)>0 && borrowerList?.borrowers?.map((row : borrowerType, index : number) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }, background:`${index%2===0? "" : "  #CEF3FF"}` }}
            >
              <TableCell align="center" component="th" scope="row">
              <Link href={`/borrowers/${row?.id}`} >
                {row?.full_name} </Link>
              </TableCell>
              <TableCell align="center">{row?.email}</TableCell>
              <TableCell align="center" >{row?.phone}</TableCell>
              <TableCell align="center" >{row?.dob}</TableCell>
              <TableCell align="center" >{row?.address}</TableCell>
              <TableCell align='right' >             
                <Tooltip title="Edit" onClick={()=>setSelectedBorrower(row)} >
                <IconButton size="small">
                <EditOutlinedIcon fontSize="small" />
                </IconButton>
                </Tooltip>
                <Tooltip title="Delete" onClick={()=>handleDelete(row)}  >
                <IconButton size="small" disabled={isLoading}   >
                <DeleteIcon fontSize="small"   />
                </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow> 
          ))}
        </TableBody>
      </Table>
      {!borrowerList?.borrowers?.length && <Alert severity="error" >No Data Found..!</Alert>}
      <Box display="flex" justifyContent="center" p={2} >
      {Number(borrowerList?.borrowers?.length) > 0 &&   <Pagination
        count={borrowerList?.count}
        page={currentPage}
        onChange={handlePageChange}
      /> }

      <MuiModalWrapper open={open || !!selectedBorrower?.id} title={`${selectedBorrower?.id? "Edit" : "Add"} Borrower`}  onClose={()=>{
        setOpen(false)
        setSelectedBorrower(undefined)
      }} >
       <BorrowersCreate handleClose={handleClose} selectedBorrower={selectedBorrower} refetch={refetch} />
      </MuiModalWrapper>
      </Box>
    </TableContainer>
    </div>
    
  );
}