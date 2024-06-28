import React, { ChangeEvent, MouseEvent, useState } from 'react';
import { AppBar, Toolbar, Button, Container, Box, Avatar, TextField, Typography, IconButton, InputAdornment } from '@mui/material';
import { Delete as DeleteIcon, Edit as EditIcon, Visibility, VisibilityOff } from '@mui/icons-material';
import axios from 'axios';


const ProfilePage = () => {
  // State for showing/hiding password
  const [showPassword, setShowPassword] = React.useState(false);

  // State for user profile information
 
  const handleDelete=(e)=>{
e.preventDefault();
axios.delete("https://jsonplaceholder.typicode.com/posts/1")
.then((res)=>{
console.log(res)
})
  }
  const data={fName:"",lastName:"",emailId:"",mobileNumber:"",password:""};
  const [inputData,setInputData]=useState(data)
  const handleData=(e)=>{
    setInputData({...inputData,[e.target.name]:e.target.value})
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.put("https://jsonplaceholder.typicode.com/posts/1",inputData)
    .then((res)=>{
      console.log(res)
    })
  }
 
  // State for read-only mode
  const [readOnly, setReadOnly] = React.useState(true); 

  // Toggle password visibility
  const handleClickShowPassword = () => setShowPassword((show) => !show);



  // Toggle read-only mode
  const toggleReadOnly = () => {
    setReadOnly(!readOnly);
  };
  //Axios fetch property

 
  return (
    <Container maxWidth="sm">
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" color="textSecondary">
              My profile
            </Typography>
          </Box>
          
          <Button
            onClick={handleSubmit}
            variant="outlined"
            color="inherit"
            startIcon={<EditIcon />}
            sx={{ textTransform: 'none' }}
            aria-label="edit profile"
          >
            <Typography variant="button" color="textSecondary">
              {readOnly ? "EDIT" : "SAVE"}
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
        <Avatar sx={{ width: 80, height: 80, mb: 2 }} src="/static/images/avatar/1.jpg" />
        <Box sx={{ width: '100%' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
            <TextField
              margin="normal"
              label="First name"
              value={inputData.fName}
              name="fName"
              onChange={handleData}
          
            />
            <TextField
              margin="normal"
              label="Last name"
              value={inputData.lastName}
              name="lastName"
              onChange={handleData}
              
            />
          </Box>
          <TextField
  fullWidth
  margin="normal"
  label="Email address"
  name="emailId"
  value={inputData.emailId}
  onChange={handleData}
 
/>
          <TextField
            fullWidth
            margin="normal"
            label="Mobile number"
            value={inputData.mobileNumber}

            name="mobileNumber"
           onChange={handleData}
          
          />
          <TextField
            fullWidth
            margin="normal"
            label="Password"
            type={showPassword ? 'text' : 'password'}
            value={inputData.password}
            onChange={handleData}
            name="password"
            InputProps={{
              
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
            

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
            <Button variant="contained" onClick={handleDelete} color="secondary" startIcon={<DeleteIcon />}>
              DELETE ACCOUNT
            </Button>
          </Box>
   
        </Box>
      </Box>
    
          
    </Container>
  );
};

export default ProfilePage;
