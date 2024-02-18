import { Paper, Grid, Box} from '@mui/material';
import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';
export default function ForClients() {
    const box1= {
        paddingTop: '6%',
        height: '17vh',
        borderRadius: '10px',
        // textAlign:'center',
        fontFamily:  "'Josefin Sans', sans-serif",
       fontSize:'1.6vw',
        // color: 'white',
        paddingLeft: '5%',
    }
    const linkStyle = {
      textDecoration: 'none'
    }
   
  return (
    <Paper
      component="div"
      sx={{
        position: 'relative',
        backgroundImage: `url(${process.env.PUBLIC_URL}/ClientImage.png)`,
        width: '89%',
        height: '74vh',
        color: 'black',
        marginLeft: '5%',
        marginTop: '5%',
        borderRadius: '25px',
        display: 'flex',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',  
      }}
    >
    
      <span style={{ marginTop: '2%',  marginLeft: '5%' , color: 'rgba(54, 69, 79, 1)', marginRight:'5%'}}>
        <div style={{ color:'rgba(54, 69, 79, 1)' , fontSize:'20px', fontWeight: '500', marginLeft: '1%'}}>For Client</div>
     <div style={{fontSize: '60px', fontFamily: 'Playfair Display'}}>   Discover Ideas<br /> your way.
      </div>
      <div style={{  fontSize: '17px', marginTop: '1%',
      background: 'rgba(1, 1, 1, 0.5)',
       color:'white',marginRight: '65%'}}>
      Navigate our dynamic marketplace designed for idea enthusiasts. Advanced search features and intuitive filters help you find the perfect idea. Engage with trending and featured ideas that resonate with your vision.
     </div>
      
      <Grid container spacing={4} sx={{marginTop: '2%'}}>
     <Grid item xs={12} sm={4} xl={4}>
      <Link to='#' style={linkStyle}>
       <Box
      style={box1}
      sx={{
        backgroundColor: 'rgba(54, 69, 79, 1)',
        color: 'white', // Set your initial font color
        transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out',
        '&:hover': {
          backgroundColor: 'white',
          color: 'rgba(54, 69, 79, 1)', // Set your hover font color
          
        },
      }}
    >
             <div style={{   fontSize: '2.2vw',
        fontWeight: '700',textDecoration: 'none'}} >Discover and Sell <br/>Innovative Ideas</div>
   <div style={{marginTop:'5%',textDecoration: 'none'}}> Talent Marketplace™ <ArrowForwardIcon style={{verticalAlign:'middle'}}/></div>
   
       </Box>
       </Link>
      </Grid>
      <Grid item xs={12} sm={4} xl={4}>
      <Link to='#' style={linkStyle}>
       <Box
      style={box1}
      sx={{
        backgroundColor: 'rgba(54, 69, 79, 1)',
        color: 'white', // Set your initial font color
        transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out',
        '&:hover': {
          backgroundColor: 'white',
          color: 'rgba(54, 69, 79, 1)', // Set your hover font color
        },
      }}
    >
           <div style={{   fontSize: '2.2vw',
        fontWeight: '700',textDecoration: 'none'}}> Explore and Purchase <br/>Creative Concepts</div>
     <div style={{marginTop:'5%'}}> Project Catalog™ <ArrowForwardIcon style={{verticalAlign:'middle'}}/></div>
       </Box>
       </Link>
      </Grid>
      <Grid item xs={12} sm={4} xl={4}>
      <Link to='#' style={linkStyle}>
       <Box
      style={box1}
      sx={{
        backgroundColor: 'rgba(54, 69, 79, 1)',
        color: 'white', // Set your initial font color
        transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out',
        '&:hover': {
          backgroundColor: 'white',
          color: 'rgba(54, 69, 79, 1)', // Set your hover font color
        },
      }}
    >
              <div style={{   fontSize: '2.2vw',
        fontWeight: '700',}}>Connect with Industry <br/>Visionaries</div>
         <div style={{marginTop:'5%'}}> Consultations™ <ArrowForwardIcon style={{verticalAlign:'middle'}}/></div>
       </Box>
       </Link>
      </Grid>
      </Grid>
      </span>
    </Paper>
  );
}
