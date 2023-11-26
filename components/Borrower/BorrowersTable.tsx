import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Link from 'next/link'
import { Box, Pagination } from '@mui/material';
import { useState } from 'react';
// import { useRouter } from 'next/router';

const rows = [ {
    borrower_id : 1,
    borrower :  "test borrower",
    phone : "+91 7262865086",
    email : "testborrower@gmail.com" 
},
{
    borrower_id : 2,
    borrower :  "test1 borrower",
    phone : "+91 12345678",
    email : "test1borrower@gmail.com"
},
{
    borrower_id : 3,
    borrower :  "test1 borrower",
    phone : "+91 12345678",
    email : "test1borrower@gmail.com"
},
{
    borrower_id : 4,
    borrower :  "test1 borrower",
    phone : "+91 12345678",
    email : "test1borrower@gmail.com"
},
{
    borrower_id : 5,
    borrower :  "test1 borrower",
    phone : "+91 12345678",
    email : "test1borrower@gmail.com"
},
{
    borrower_id : 6,
    borrower :  "test1 borrower",
    phone : "+91 12345678",
    email : "test1borrower@gmail.com"
},
{
    borrower_id : 7,
    borrower :  "test1 borrower",
    phone : "+91 12345678",
    email : "test1borrower@gmail.com"
},
{
    borrower_id : 8,
    borrower :  "test1 borrower",
    phone : "+91 12345678",
    email : "test1borrower@gmail.com"
}
]

export default function BorrowersTable() {
    const [currentPage, setCurrentPage] = useState(1)
    
    const itemsPerPage = 5;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const handlePageChange = (event : React.ChangeEvent<unknown>, page: number) => {
      setCurrentPage(page);
    };

  return (
    <TableContainer component={Paper} >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow  sx={{background:"#B2DFFF"}} >
            <TableCell align="center">Borrower</TableCell>
            <TableCell align="center">Phone</TableCell>
            <TableCell align="center">Email </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { rows.length>0 && rows.slice(indexOfFirstItem, indexOfLastItem).map((row, index) => (
            <TableRow
              key={row.borrower_id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }, background:`${index%2===0? "" : "  #CEF3FF"}` }}
            >
              <TableCell align="center" component="th" scope="row">
              <Link href={`/borrowers/${row?.borrower_id}`} >
                {row.borrower} </Link>
              </TableCell>
              <TableCell align="center">{row.phone}</TableCell>
              <TableCell align="center" >{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Box display="flex" justifyContent="center" p={2} >
      {rows?.length > 0 &&   <Pagination
        count={Math.ceil(rows.length / itemsPerPage)}
        page={currentPage}
        onChange={handlePageChange}
      /> }
      </Box>
    </TableContainer>
  );
}