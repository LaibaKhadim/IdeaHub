import { Box, Typography, Grid } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import StarIcon from '@mui/icons-material/Star';
// import { useState, useEffect } from 'react';


export default function Browsebytalent() {
  

    // const [boxHeight, setBoxHeight] = useState('75vh');

    // useEffect(() => {
    //   const handleResize = () => {
    //     // Adjust the height based on the window size
    //     if (window.innerWidth <= 1370) {
    //       setBoxHeight('55vh');
    //     } else if (window.innerWidth <= 1200) {
    //         setBoxHeight('45vh');
    //       } else if (window.innerWidth <= 600) {
    //         setBoxHeight('200vh');
    //       } else {
    //       setBoxHeight('65vh');
    //     }
    //   };
  
    //   // Attach the event listener for window resize
    //   window.addEventListener('resize', handleResize);
  
    //   // Initial height adjustment
    //   handleResize();
  
    //   // Cleanup the event listener on component unmount
    //   return () => {
    //     window.removeEventListener('resize', handleResize);
    //   };
    // }, []);
  





const StarIconStyle = {
    color: 'green',
   marginTop: '5%'
}

const BoxStyle = {
  
      paddingTop: '13%',
      height: '14vh',
      borderRadius: '30px',
      textAlign:'center',
      fontFamily:  "'Josefin Sans', sans-serif",
      fontSize: '1.6vw',
      fontWeight: '500',
     
    }
    
  return (
    <Box sx={{
        position: 'relative',
        width: '90%',
        height: '65vh',
        backgroundColor: 'inherit',
        margin: '8%',
        
    }}
      >
     <Typography style={{
        color: 'black',
        fontFamily: "'Kalnia', sans-serif",
        fontSize: '4.6vh',
        fontWeight: '600'
     }}>
       Browse Ideas By Category
     </Typography>
     <Typography style={{
        color: 'darkslategrey',
        // fontFamily:  "'Josefin Sans', sans-serif",
        fontSize: '1.2vw',
        
     }}>
       Looking for Idea? <Link to='#' style={ {
        textDecoration: 'none',
        color: 'darkolive'
    }}>Browse ideas</Link>
     </Typography>
     <Grid container spacing={4} sx={{marginTop: '2%'}}>
     <Grid item xs={3} sm={3} xl={3}>
      <Box style = {BoxStyle}  sx={{ backgroundColor: 'lightgrey',
        transition: 'background-color 0.3s ease-in-out',
        '&:hover': {
          backgroundColor: 'gainsboro',
        },}} >
       Technology & Innovation
   <div><StarIcon style={StarIconStyle}/>4.8/5</div></Box>
      </Grid>
      <Grid item xs={3} sm={3} xl={3}>
      <Box style = {BoxStyle}  sx={{ backgroundColor: 'lightgrey',
        transition: 'background-color 0.3s ease-in-out',
        '&:hover': {
          backgroundColor: 'gainsboro',
        },}} >
       Business & Entrepreneurship 
   <div><StarIcon style={StarIconStyle}/>4.9/5</div></Box>
      </Grid>
      <Grid item xs={3} sm={3} xl={3}>
      <Box style = {BoxStyle}  sx={{ backgroundColor: 'lightgrey',
        transition: 'background-color 0.3s ease-in-out',
        '&:hover': {
          backgroundColor: 'gainsboro',
        },}} >
       Creative Arts and Design
   <div><StarIcon style={StarIconStyle}/>4.7/5</div></Box>
      </Grid>
      <Grid item xs={3} sm={3} xl={3}>
      <Box style = {BoxStyle}  sx={{ backgroundColor: 'lightgrey',
        transition: 'background-color 0.3s ease-in-out',
        '&:hover': {
          backgroundColor: 'gainsboro',
        },}} >
       Featured Ideas
   <div><StarIcon style={StarIconStyle}/>4.6/5</div></Box>
      </Grid>
  </Grid>
  <Grid container spacing={4} sx={{marginTop: '2%'}}>
     <Grid item xs={3} sm={3} xl={3}>
      <Box style = {BoxStyle}  sx={{ backgroundColor: 'lightgrey',
        transition: 'background-color 0.3s ease-in-out',
        '&:hover': {
          backgroundColor: 'gainsboro',
        },}} >
       Finance and Investment
   <div><StarIcon style={StarIconStyle}/>4.95/5</div></Box>
      </Grid>
      <Grid item xs={3} sm={3} xl={3}>
      <Box style = {BoxStyle}  sx={{ backgroundColor: 'lightgrey',
        transition: 'background-color 0.3s ease-in-out',
        '&:hover': {
          backgroundColor: 'gainsboro',
        },}} >
       Customization and Personalization
   <div><StarIcon style={StarIconStyle}/>4.5/5</div></Box>
      </Grid>
      <Grid item xs={3} sm={3} xl={3}>
      <Box style = {BoxStyle}  sx={{ backgroundColor: 'lightgrey',
        transition: 'background-color 0.3s ease-in-out',
        '&:hover': {
          backgroundColor: 'gainsboro',
        },}} >
          Collaboration and Networking
   <div><StarIcon style={StarIconStyle}/>4.4/5</div></Box>
      </Grid>
      <Grid item xs={3} sm={3} xl={3}>
      <Box style = {BoxStyle}  sx={{ backgroundColor: 'lightgrey',
        transition: 'background-color 0.3s ease-in-out',
        '&:hover': {
          backgroundColor: 'gainsboro',
        },}} >
Gadgets and Technology Accessories
   <div><StarIcon style={StarIconStyle}/>4.88/5</div>
   </Box>
      </Grid>
  </Grid>
 
   </Box>
  )
}
