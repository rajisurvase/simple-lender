import React, { ChangeEvent, MouseEvent } from 'react';

import { AppBar, Toolbar } from '@mui/material';
import Button from '@mui/material/Button';
import { Container, Box, Avatar, TextField,  Typography, IconButton, InputAdornment } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const ProfilePage = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [firstName, setFirstName] = React.useState('John');
  const [lastName, setLastName] = React.useState('Doe');
  const [email, setEmail] = React.useState('john.doe@example.com');
  const [mobile, setMobile] = React.useState('123 456 7890');
  const [password, setPassword] = React.useState('password');
  const [readOnly, setReadOnly] = React.useState(true);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

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

  const toggleReadOnly = () => {
    setReadOnly(!readOnly);
  };

  return (
    <Container maxWidth="sm">
         <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6" color="textSecondary">
            My profile
          </Typography>
        </Box>
        <Button onClick={toggleReadOnly}
        variant="outlined"
          color="inherit" 
          startIcon={<EditIcon  />} 
          sx={{ textTransform: 'none' }} 
          aria-label="edit profile"
        >
          <Typography variant="button" color="textSecondary">
            EDIT
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
              InputProps={{
                readOnly: readOnly,
              }}
            />
            <TextField
              margin="normal"
              label="Last name"
              value={lastName}
              onChange={handleLastNameChange}
              InputProps={{
                readOnly: readOnly,
              }}
            />
          </Box>
          <TextField
            fullWidth
            margin="normal"
            label="Email address"
            value={email}
            onChange={handleEmailChange}
            InputProps={{
              readOnly: readOnly,
            }}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Mobile number"
            value={mobile}
            onChange={handleMobileChange}
            InputProps={{
              readOnly: readOnly,
            }}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={handlePasswordChange}
            InputProps={{
              readOnly: readOnly,
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
