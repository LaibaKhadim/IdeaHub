import { Box, Typography, Grid } from '@mui/material';
import React from 'react';
import FindOpp from './ForTalent/FindOpp';


export default function ForTalent() {
  const ImageStyle = {
    width: '100%',
    height: '100%',
   
}
  return (
    <div style={{display: 'flex', width: '79%', height: '75vh', margin: '10%' , marginBottom: '10%', marginTop: '10%'}}>

<Box
      // component="div"
      sx={{
        // backgroundImage: `url(${process.env.PUBLIC_URL}/TalentImage.png)`,
        width: '50%',
        // height: '700px', 
        marginLeft: '0%',
        boxShadow:'none',
        border: 'none',
        borderTopRightRadius: 'none',
        borderBottomRightRadius: 'none',
        borderTopLeftRadius: '5%',
        borderBottomLeftRadius: '5%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',  
      }}
    >
      <img src='TalentImage.png' alt='Talent' style={ImageStyle}/>
    </Box>
    <Box sx={{
        position: 'relative',
        width: '50%',
        backgroundColor: 'rgba(15, 28, 28, 1)',
        borderTopRightRadius: '5%',
      borderBottomRightRadius: '5%',
    }}
      >
     <Box sx={{
      width: '85%',
      marginTop: '5%', 
      marginLeft: '5%',
     fontSize: '2vh',
      fontFamily:  "'Josefin Sans', sans-serif",
    
      }}>
    <Typography style={{color: 'white'}}> For Talent</Typography>
        <Typography style={{marginTop:'2%',  fontSize: '6vh',
      fontFamily:  'Playfair Display', color: 'white'}}>Sell great<br/> Ideas.</Typography>
     <Typography style={{color:'white', fontFamily:  "'Josefin Sans', sans-serif", marginTop:'2%', marginRight:'10%', fontSize: '1.2vw',}}>
     Unlock endless opportunities for freelancers at Idea Hub - where impactful ideas meet lucrative projects. Elevate your career by connecting with visionaries and turning creativity into success.
        </Typography>   
       
        <Grid container spacing={4} sx={{marginTop: '10%', borderTop: '1px white solid', marginLeft: '1%', fontSize: '1vw', color: 'white'}}>
     <Grid item xs={12} sm={4} xl={4} >
     Forge impactful collaborations in a thriving creative community.
     </Grid>
     <Grid item xs={12} sm={4} xl={4}>
     Secure top-tier projects matching your skills and aspirations.
     </Grid>
     <Grid item xs={12} sm={4} xl={4}>
     Showcase brilliance and earn accolades for your impactful ideas.
     </Grid>
     </Grid>
     <FindOpp></FindOpp>
     </Box> 
        </Box> 
   
   
    </div>
  )
}
