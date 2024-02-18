import { Box, Typography } from '@mui/material'
import React from 'react'
import GroupsIcon from '@mui/icons-material/Groups';
import ForumIcon from '@mui/icons-material/Forum';
import ShieldIcon from '@mui/icons-material/Shield';
import LearnMoreButton from './EnterpriseSuit/LearnMoreButton';

export default function EnterpriseSuit() {
    const ImageStyle = {
        width: '95%',
        height: '90%',
        marginTop: '5%',
        // marginLeft: '%',
        borderRadius: '25px'
    }
  return (
    <div style={{display: 'flex', marginBottom:'10%' }}>
    <Box sx={{
        position: 'relative',
        width: '50%',
        height: '68.5vh',
        backgroundColor: 'rgba(54, 69, 79, 1)',
        marginLeft: '5%',
        // marginTop: '5%',
        // margin: '5%',
        borderTopRightRadius: 'none',
        borderBottomRightRadius: 'none',
        borderTopLeftRadius: '5%',
        borderBottomLeftRadius: '5%'
    }}
      >
    
        
     <Box sx={{
    // color: 'white',
      marginTop: '5%', 
      marginLeft: '5%',
     fontSize: '0.7vw',
      fontFamily:  "'Josefin Sans', sans-serif",
      }}>
       <Typography style={{color: 'white'}}> Enterprise Suite</Typography>
        <Typography style={{marginTop:'2%',  fontSize: '3.1vw',
      fontFamily:  'Playfair Display', color: 'darkgrey'}}>Discover, Collaborate,</Typography>
       <Typography style={{  fontSize: '3.1vw',
      fontFamily:  'Playfair Display', color: 'whitesmoke'}}>And</Typography>
      <Typography style={{  fontSize: '3.1vw',
      fontFamily:  'Playfair Display', color: 'darkgrey'}}>Elevate Your Ideas.</Typography>
      <Typography style={{color:'white', fontFamily:  "'Josefin Sans', sans-serif", marginTop:'2%', marginRight:'10%'}}>Fuel innovation by accessing a curated hub of groundbreaking ideas from the brightest minds. Explore a diverse range of categories and stay ahead of the curve.</Typography>
     <Typography style={{color:'white', fontFamily:  "'Josefin Sans', sans-serif", marginTop:'2%'}}><GroupsIcon style={{color: 'goldenrod', verticalAlign: 'middle'}}/>&nbsp; Collaboration Central</Typography>
     <Typography style={{color:'white', fontFamily:  "'Josefin Sans', sans-serif"}}><ForumIcon style={{color: 'goldenrod', verticalAlign: 'middle'}}/>&nbsp;&nbsp;Idea Feedback Forums</Typography>
     <Typography style={{color:'white', fontFamily:  "'Josefin Sans', sans-serif"}}><ShieldIcon style={{color: 'goldenrod',verticalAlign: 'middle' }}/>&nbsp;&nbsp;Secure Transactions</Typography>
      <LearnMoreButton></LearnMoreButton>
        </Box>
   
    </Box>
    <Box sx={{
        position: 'relative',
          width: '40%',
          height: '68.5vh',
          backgroundColor: 'rgba(54, 69, 79, 1)',
        //   marginLeft: '60%',
        //   marginTop: '5%',
          borderTopRightRadius: '5%',
          borderBottomRightRadius: '5%',
    }}>
<img src='enterprise-suit-image.jpeg' alt='Enterprise Suit' style={ImageStyle}/>
    </Box>
    </div>
  )
}
