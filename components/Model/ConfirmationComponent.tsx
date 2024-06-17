import React, { useState } from 'react';
import {
  Box,
  Button,
  Modal,
  Typography,
  IconButton,
  Avatar,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  textAlign: 'center',
};

const ConfirmationComponent = () => {
  const [open, setOpen] = useState(true); // Modal is open by default



  return (
    <Modal open={open} >
      <Box sx={style}>
        <IconButton
          aria-label="close"
         
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: 'grey.500',
          }}
        >
          <CloseIcon />
        </IconButton>
        <Avatar sx={{ bgcolor: 'grey.200', mx: 'auto', mb: 2 }}>
          <DeleteIcon sx={{ color: 'black' }} />
        </Avatar>
        <Typography variant="h6" component="h2" gutterBottom>
          Are you sure you want to delete this ride
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu eros
          ipsum. Vestibulum ultricies odio.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
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
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ConfirmationComponent;
