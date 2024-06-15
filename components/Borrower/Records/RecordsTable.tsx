import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Link from 'next/link'
import { Alert, Box, Button, IconButton, Pagination, Tooltip, Typography } from '@mui/material';
import { useState } from 'react';
import { useQuery } from 'react-query';
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from '@mui/icons-material/Delete';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import MuiModalWrapper from '@/components/Model/MuiModalWrapper';
import { GetAllRecords, IRecord } from '@/api/functions/record.api';
import RecordCreate from './RecordCreate';

type RecordsTableProps = {
  borrowerId : string
}
export default function RecordsTable({borrowerId}: RecordsTableProps) {

    const [currentPage, setCurrentPage] = useState(1)
    const [open, setOpen] = useState(false)
    const [selectedRecord, setSelectedRecord] = useState<IRecord | undefined>(undefined)
    
    const  {data : recordList, refetch} = useQuery({
      queryFn : ()=>GetAllRecords({
         page : Number(currentPage-1),
         size : 10,
         borrowerId,
      }),
      queryKey : ["record", "list", currentPage],
      enabled : !!borrowerId
    })


    const handleClose = ()=>{
      setOpen(false), 
      setSelectedRecord(undefined)
    }
    const handlePageChange = (event : React.ChangeEvent<unknown>, page: number) => {
      setCurrentPage(page);
    };

  return (
    <div>
      <Box my={1} textAlign='right' > 
          {/* <Link href="/borrowers/create" > */}
            <Button onClick={()=>setOpen(true)} variant='contained' sx={{borderRadius : '1.5rem', backgroundColor : "#7D8CC4", textTransform:"none"}} endIcon={<AddIcon  sx={{fontSize:'small'}} />} >Add Record  </Button>
          {/* </Link> */}
      </Box>
    <TableContainer component={Paper} >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow  sx={{background:"#B2DFFF"}} >
            <TableCell align="center">Borrower</TableCell>
            <TableCell align="center">Principle Amount</TableCell>
            <TableCell align="center">ROI </TableCell>
            <TableCell align='center' >Purchase Date</TableCell>
            <TableCell align='center' >Due Date</TableCell>
            <TableCell align='center' > Status</TableCell>
            <TableCell align='center' > Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Number(recordList?.records?.length)>0 && recordList?.records?.map((row, index : number) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }, background:`${index%2===0? "" : "  #CEF3FF"}` }}
            >
              <TableCell align="center" component="th" scope="row">
              <Link href={`/borrowers/${row?.borrower?.id}/record/${row?.id}`} >
                {row?.borrower?.full_name} </Link>
              </TableCell>
              <TableCell align="center">{row.principleAmount}</TableCell>
              <TableCell align="center" >{row.roi}%</TableCell>
              <TableCell align="center" >{row.purchaseDate}</TableCell>
              <TableCell align="center" >{row.dueDate}</TableCell>
              <TableCell align="center"  > <Typography color={row.status ==="Pending"? "red" : ""} > {row.status}</Typography></TableCell>
              <TableCell align='right' >
              <Tooltip title="Delete" >
                <IconButton size="small">
                <DeleteIcon fontSize="small" />
                </IconButton>
                </Tooltip>
                <Tooltip title="Edit" onClick={()=>setSelectedRecord(row)} >
                <IconButton size="small">
                <EditOutlinedIcon fontSize="small" />
                </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow> 
          ))}
        </TableBody>
      </Table>
      {!recordList?.records?.length && <Alert severity="error" >No Data Found..!</Alert>}
      <Box display="flex" justifyContent="center" p={2} >
      {Number(recordList?.records?.length) > 0 &&   <Pagination
        count={Number(recordList?.count)}
        page={currentPage}
        onChange={handlePageChange}
      /> }

      <MuiModalWrapper open={open || !!selectedRecord?.id} title={`${selectedRecord?.id? "Edit" : "Add"} Record`}  onClose={()=>{
        setOpen(false)
        setSelectedRecord(undefined)
      }} >
       <RecordCreate handleClose={handleClose} selectedRecord={selectedRecord} refetch={refetch} borrowerId={borrowerId} />
      </MuiModalWrapper>
      </Box>
    </TableContainer>
    </div>
    
  );
}