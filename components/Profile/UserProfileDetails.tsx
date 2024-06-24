import React, { ChangeEvent, MouseEvent, useEffect } from 'react';
import { AppBar, Toolbar, Button, Container, Box, Avatar, TextField, Typography, IconButton, InputAdornment } from '@mui/material';
import { Delete as DeleteIcon, Edit as EditIcon, Visibility, VisibilityOff } from '@mui/icons-material';


const ProfilePage = () => {
  // State for showing/hiding password
  const [showPassword, setShowPassword] = React.useState(false);

  // State for user profile information
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [mobile, setMobile] = React.useState('');
  const [password, setPassword] = React.useState('');

  // State for read-only mode
  const [readOnly, setReadOnly] = React.useState(true);

  // Toggle password visibility
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  // Prevent default behavior for mouse down on password icon
  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement> ) => {
    event.preventDefault();
  };

  // Event handlers for changing profile information
  const handleFirstNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleMobileChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMobile(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

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
            onClick={toggleReadOnly}
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
              value={firstName}
              onChange={handleFirstNameChange}
          
            />
            <TextField
              margin="normal"
              label="Last name"
              value={lastName}
              onChange={handleLastNameChange}
              
            />
          </Box>
          <TextField
  fullWidth
  margin="normal"
  label="Email address"
  value={email}
  onChange={handleEmailChange}
 
/>
          <TextField
            fullWidth
            margin="normal"
            label="Mobile number"
            value={mobile}
            onChange={handleMobileChange}
          
          />
          <TextField
            fullWidth
            margin="normal"
            label="Password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={handlePasswordChange}
            InputProps={{
              
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
            

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
            <Button variant="contained" color="secondary" startIcon={<DeleteIcon />}>
              DELETE ACCOUNT
            </Button>
          </Box>
   
        </Box>
      </Box>
    
          
    </Container>
  );
};

export default ProfilePage;
