import React, { useState } from 'react';
import {
  Box,
  Button,
  Modal,
  Typography,
  IconButton,
  Avatar,
  Stack,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   boxShadow: 24,
//   p: 4,
//   borderRadius: 2,
//   textAlign: 'center',
// };

type ConfirmationComponentProps = {
  handleConfirmationModel : ()=>void
}

const ConfirmationComponent = ({handleConfirmationModel}:ConfirmationComponentProps ) => {
  // const [open, setOpen] = useState(true); // Modal is open by default



  return (
    // <Modal open={open} >
      <Box>
        {/* <IconButton
          aria-label="close"
         
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: 'grey.500',
          }}
        >
          <CloseIcon />
        </IconButton> */}
        {/* <Avatar sx={{ bgcolor: 'grey.200', mx: 'auto', mb: 2 }}> */}
        <Stack display="flex" flexDirection="row" justifyContent="center" py={2} >
        {/* <IconButton> */}
          <DeleteIcon sx={{ color: 'black',fontSize:"3rem" }}   />
          {/* </IconButton> */}
          </Stack>
        {/* </Avatar> */}
       <Box textAlign="center" >
       <Typography variant="h6" component="h2" gutterBottom>
          Are you sure you want to delete this ride
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu eros
          ipsum. Vestibulum ultricies odio.
        </Typography>
       </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 2 }}>
          <Button
            variant="contained"
            color="error"
            sx={{ mr: 2 }}
            // Close the modal when clicked
          >
            Delete
          </Button>
          <Button
            variant="contained"
            color="secondary"
           // Close the modal when clicked
           onClick={handleConfirmationModel}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    // </Modal>
  );
};

export default ConfirmationComponent;
