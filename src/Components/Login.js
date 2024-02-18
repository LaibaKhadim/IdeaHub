import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './GuestHomePage/SignupPages/Navbar';



export default function Login() {
  const [password, setPassword] = useState('');
  
  const [warning, setWarning] = useState('');
  const [showPassword, setShowPassword] = React.useState(false);
 
  const [email, setEmail] = React.useState('');
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const userData = await response.json();
       
      // Assuming your backend sends user data including the ID upon successful login
      // const userName = userData.name;
      const userId = userData.id;
      
      alert('Login successful');
      // Pass the userId as a parameter to the '/desk' route
      navigate(`/add-info/${userId}`);
      } else {
        alert('Invalid');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Login failed');
    }
  };

//  const isValidEmail = (email) => {
//   const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//   return re.test(email);
// };

 const handlePasswordChange = (e) => {
  setPassword(e.target.value);
 
};



const handleEmailChange = (e) => {
  setEmail(e.target.value);
  if (e.target.value === 0) {
    setWarning('*Please fill in all fields');
  } else {
    setWarning('');
  }
};

  return (
    <>
    
    <Navbar></Navbar>
  <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        '& .MuiTextField-root, & .MuiFormControl-root': {
          width: '70%',
          marginLeft: '15%',
          marginTop: '5%',
          marginBottom: '2rem',
          marginRight: '15%'
        },
        '& .MuiOutlinedInput-input': {
          // padding: '10px',
        },
      }}
      noValidate
      autoComplete="off"
     
    >
      <Typography
        variant="h4"
        style={{
          fontFamily: "'Kalnia', sans-serif",
          textAlign: 'center',
          margin: '2rem 0',
          marginTop: '5rem'
        }}
      >
        LOG IN
      </Typography>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '50%',
          marginLeft: '25%',
          border: '1px solid #ccc',
          borderRadius: '25px',
          boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
          // height: '20%'
        }}
      >
          <TextField
            required
            id="outlined-required"
            label="Email"
            defaultValue=""
            inputProps={{ name: 'email' }}
            onChange={handleEmailChange}
          />
          <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={handlePasswordChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
              inputProps={{ name: 'password' }}
            />
          </FormControl>
         
          {warning && <div className="warning">{warning}</div>}
          </div>
          <Button
          type="submit"
          variant="contained"
          style={{
            backgroundColor: 'rgba(15, 28, 28, 1)',
            color: 'white',
            fontFamily: "'Josefin Sans', sans-serif",
            marginTop: '2rem',
           marginLeft: '46%'
          }}
          size="large"
        >
          Log In
        </Button>
    
    </Box>
    <Footer></Footer>
   
    </>
  );
}
