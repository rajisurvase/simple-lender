import { Avatar, Box, IconButton, Stack, Table, TableBody, TableContainer, TableHead, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import { stringAvatar } from './Table/TransactionTableHead'
import EntriesHead from './Entries/EntriesHead'
import EntriesTableRow from './Entries/EntriesTableRow'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

const EditTransaction = () => {

    const [showDetails, setShowDetails] = useState(false)

  return (
    <Box>
           <Stack display="flex" flexDirection="row" alignItems="center" justifyContent="space-between" >
           <Stack display="flex" flexDirection="row" columnGap={1} alignItems="center"  >
               <Avatar {...stringAvatar('Kent Dodds')}   sx={{ width: 35, height: 35 }} />
                 <Box>
                  <Typography variant='body2' fontWeight="bold" >Name</Typography>
                  <Typography variant='body2' fontWeight="bold" >+91 675****453</Typography>
                 </Box>
            </Stack>
            <Tooltip title="View details" >
             <IconButton onClick={()=>setShowDetails(!showDetails)} >
                {showDetails? <ArrowCircleDownIcon /> :  <ArrowCircleUpIcon /> }
            </IconButton>
            </Tooltip>
           </Stack>
            
            <Box sx={{display : showDetails? "block" : "none", pt : 3}} >
                Details of borrowers
            </Box>

              <TableContainer>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <EntriesHead />
          </TableHead>
          <TableBody>
          <EntriesTableRow />
          </TableBody>
        </Table>
              </TableContainer>
    </Box>
  )
}

export default EditTransaction