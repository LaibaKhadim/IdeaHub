import React from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { FormControl, FormControlLabel, Radio, RadioGroup, Paper, Typography } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Footer';
import Navbar from './Navbar';

export default function CheckPoint() {
  const mainContainerStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #ccc',
    borderRadius: '25px',
    padding: '5%',
    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };
  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: '20px', // Adjust the margin as needed
  };

  const [selectedDiv, setSelectedDiv] =  useState('div1');

  const handleRadioChange = (event) => {
    setSelectedDiv(event.target.value);
  };

 
  return (
    <>
    <Navbar></Navbar>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': {
          m: 1,
          width: '70%',
          marginLeft: '15%',
          marginTop: '5%',
          marginBottom: '5%',
        },
        '& .MuiFormControl-root': {
          m: 1,
          width: '70%',
          marginLeft: '15%',
          marginTop: '5%',
          marginBottom: '5%',
        },
        '& .MuiOutlinedInput-input': {
          padding: '10px',
        },
      }}
      noValidate
      autoComplete="off"
    >
      

      <div style={containerStyle}>
        <div style={mainContainerStyle}>
        <Typography gutterBottom sx={{ fontFamily: "'Josefin Sans', sans-serif", paddingBottom: '5%',marginLeft:'5%', fontSize:'2.6vw'}}>
        Join as a client or freelancer
        </Typography>
        <div style={{ display: 'flex' , paddingBottom:'7%'}}>
      <Paper style={{
       marginRight:'10px', 
       width: '50%',
       height: '23vh',
      borderRadius: '15px',
      border: selectedDiv === 'div1' ? '2px solid  rgba(15, 28, 28, 1)' : 'none'
      }}>
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="divSelection"
            name="divSelection"
            value={selectedDiv}
            onChange={handleRadioChange}
          >
            <FormControlLabel value="div1" control={<Radio style={{color: 'rgba(15, 28, 28, 1)'}}/>} label={<img src='clientlogo.png' alt='Client Logo' width='80%' height='80%'/>}/>
          </RadioGroup>
        </FormControl>
        {/* Your content for Div 1 goes here */}
       <div style={{marginLeft: '15%', fontWeight: '600', fontSize: '1.4vw'}}>I'm a Client, purchasing<br/> an Idea.</div>
      </Paper>

      <Paper style={{
         width: '50%',
         height: '23vh', 
         borderRadius: '15px',
         border: selectedDiv === 'div2' ? '2px solid rgba(15, 28, 28, 1)' : 'none'
         }}>
        <FormControl component="fieldset" >
          <RadioGroup
            aria-label="divSelection"
            name="divSelection"
            value={selectedDiv}
            onChange={handleRadioChange}
          >
            <FormControlLabel value="div2" control={<Radio style={{color: 'rgba(15, 28, 28, 1)'}}/>} label={<img src='contract.png' alt='Freelancer Logo' width='80%' height='80%'/>}/>
          </RadioGroup>
        </FormControl>
        {/* Your content for Div 2 goes here */}
        <div style={{marginLeft: '15%', fontWeight: '600', fontSize: '1.4vw'}}>Prepared to unleash market-worthy ideas.</div>
      </Paper>
    </div>
    <div style={buttonContainerStyle}>
    {selectedDiv === 'div1' &&
            <Button type='submit' component={Link} to='/clientsignup' variant="contained" style={{ 
              backgroundColor: 'rgba(15, 28, 28, 1)',
              color: 'white',
              fontFamily:"'Josefin Sans', sans-serif",
              borderRadius:'19px',
              fontSize: '1.2vw',
            // padding: '1vw 2vw',
            }} size="large" >
            Join as a Client
            </Button>
            }
             {selectedDiv === 'div2' &&
            <Button type='submit' component={Link} to="/signup" variant="contained" style={{ backgroundColor: 'rgba(15, 28, 28, 1)', color: 'white', fontFamily:"'Josefin Sans', sans-serif", borderRadius:'19px'}} size="large" >
            Apply as a Freelancer
            </Button>
            }
   </div>
   <Typography style={buttonContainerStyle} sx={{marginTop: '15px', fontSize: '1.3vw'}}>
   Already have an account? <Link to='/login' style={{fontWeight:'600', color: 'black', textDecoration:'none'}}>Log In</Link>
   </Typography>
    </div>
        
      </div>
    </Box>
    <Footer></Footer>
    </>
  );
}
