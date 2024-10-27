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
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import TaskAltSharpIcon from '@mui/icons-material/TaskAltSharp';
import CheckCircleOutlineSharpIcon from '@mui/icons-material/CheckCircleOutlineSharp';

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
  handleConfirmationModel? : ()=>void,
  title : string;
  description : string,
  isShowAction? : boolean,
  btn1Text? : string,
  handleBtnAction? : ()=>void,
  icon : JSX.Element
}

const ConfirmationComponent = ({
  handleConfirmationModel,
  description,
  title,
  isShowAction=false,
  btn1Text="Delete",
  handleBtnAction,
  icon
}:ConfirmationComponentProps ) => {

  return (
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
          {/* <DeleteIcon sx={{ color: 'black',fontSize:"3rem" }}   /> */}
          {/* </IconButton  > */}
          {/* <CheckCircleOutlineSharpIcon sx={{ color: 'blue',fontSize:"3rem" }}  /> */}
          {icon}
          </Stack>
        {/* </Avatar> */}
       <Box textAlign="center" sx={{pb: isShowAction ? 0 : 5}}>
       <Typography variant="h6" component="h2" gutterBottom>
       {title}
        </Typography>
        {description && <Typography variant="body2" color="text.secondary" gutterBottom>
        {description}
        </Typography>}
       </Box>
       {isShowAction &&
       <Box sx={{ display: 'flex', justifyContent: 'center', py: 2 }}>
       <Button
         variant="contained"
         color="error"
         sx={{ mr: 2 }}
        onClick={()=>handleBtnAction && handleBtnAction()}
       >
        {btn1Text}
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
       }
      </Box>
  );
};

export default ConfirmationComponent;
